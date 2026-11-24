#!/usr/bin/env python3
"""Create a separate Indonesian SRT for the approved Swabakar video.

Prefer measured ASR word timings; fall back to a conservative, explicitly
unverified adaptation of the original storyboard cues when speech recognition
is unavailable. The output report always states the timing method.
"""
import argparse
import difflib
import json
import math
import re
import unicodedata
import wave
from pathlib import Path

# The approved clean narration, split for phone-readable captions.
# Base timing references the OLD recording, not the new one.
CUES = [
    ("Tahukah kamu?", 0.70, 1.60),
    ("Tumpukan batu bara raksasa\ndi tambang bisa terbakar hebat...", 2.80, 6.20),
    ("tanpa pernah disulut korek api\nsedikit pun!", 6.20, 9.30),
    ("Sebagai ahli tambang,\nkami menyebutnya swabakar", 10.90, 13.90),
    ("atau spontaneous combustion.", 13.90, 15.80),
    ("Saat terpapar udara, batu bara\nbereaksi dengan oksigen", 17.00, 20.25),
    ("dan menghasilkan panas\nsecara alami.", 20.25, 22.30),
    ("Masalahnya, jika tumpukan\nterlalu tinggi", 23.20, 25.90),
    ("dan sirkulasi udara buruk,\npanas ini gagal keluar", 25.90, 28.80),
    ("dan terus menumpuk di dalam.", 28.80, 30.80),
    ("Begitu mencapai titik kritis...", 31.20, 32.85),
    # The replacement WAV ASR detects "Boom! Api!" and omits the scripted continuation.
    ("Boom! Api!", 32.85, 34.15),
    ("Itulah mengapa di dunia tambang,", 35.20, 37.05),
    ("manajemen tinggi timbunan\ndan pemadatan rutin", 37.05, 39.30),
    ("wajib dilakukan untuk\nmencegah bencana.", 39.30, 41.55),
    ("Sekarang kamu tahu, kan?", 42.45, 43.70),
]

def words(text):
    norm = unicodedata.normalize("NFKD", text.lower())
    norm = "".join(ch for ch in norm if not unicodedata.combining(ch))
    return re.findall(r"[a-z0-9]+", norm)

def to_stamp(ms):
    total = max(0, int(round(ms)))
    h, rem = divmod(total, 3600000)
    m, rem = divmod(rem, 60000)
    s, milli = divmod(rem, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{milli:03d}"

def warped_old_time(t, duration):
    # Approximation only: remove old literally-spoken tags "Curious"
    # (roughly 1.8-2.65s) and "Serius" (roughly 16.3-17s).
    # The remaining drift is spread over the narration.
    lost = (0.85 if t >= 2.65 else 0.0) + (0.70 if t >= 17.0 else 0.0)
    extra = max(0.0, 43.88 - duration - 1.55)
    return max(0.0, t - lost - extra * t / 43.88)

def fallback(duration):
    entries = []
    for text, a, b in CUES:
        entries.append({"text": text, "start": warped_old_time(a, duration),
                        "end": warped_old_time(b, duration),
                        "match": 0, "confidence": "unverified"})
    return entries

def recognize(audio):
    from faster_whisper import WhisperModel
    model = WhisperModel("base", device="cpu", compute_type="int8", num_workers=2)
    expected = " ".join(c[0].replace("\n", " ") for c in CUES)
    segments, info = model.transcribe(
        str(audio), language="id", beam_size=5, word_timestamps=True,
        vad_filter=False, condition_on_previous_text=False, initial_prompt=expected,
    )
    transcript = []
    timed = []
    for seg in segments:
        transcript.append(seg.text.strip())
        for w in (seg.words or []):
            tokens = words(w.word)
            for token in tokens:
                timed.append((token, float(w.start), float(w.end)))
    return timed, " ".join(transcript), info.language

def matched_cues(timed, duration):
    target = []
    offsets = []
    for text, _, _ in CUES:
        first = len(target)
        target.extend(words(text))
        offsets.append((first, len(target)))
    actual = [word for word, _, _ in timed]
    matcher = difflib.SequenceMatcher(a=target, b=actual, autojunk=False)
    pairs = {}
    for a, b, size in matcher.get_matching_blocks():
        for i in range(size):
            pairs[a + i] = b + i
    ratio = len(pairs) / max(1, len(target))
    entries = fallback(duration)
    if ratio < 0.53:
        return entries, ratio, "fallback_old_cues_low_ASR_match"
    for idx, (first, last) in enumerate(offsets):
        found = [timed[pairs[pos]] for pos in range(first, last) if pos in pairs]
        match_ratio = len(found) / max(1, last - first)
        if len(found) >= 2 and match_ratio >= 0.38:
            # Tiny padding to preserve initial consonant and ending.
            start = max(0.0, min(w[1] for w in found) - 0.07)
            end = min(duration, max(w[2] for w in found) + 0.08)
            entries[idx].update(start=start, end=end, match=len(found),
                                confidence="automatic_word_alignment")
    return entries, ratio, "whisper_base_word_alignment_with_fallbacks"

def finalize(entries, duration):
    # Enforce monotonic SRT with no overlaps while retaining spoken pauses.
    for i, item in enumerate(entries):
        item["start"] = max(0.0, min(duration - 0.2, item["start"]))
        item["end"] = max(item["start"] + 0.2, min(duration, item["end"]))
        if i and item["start"] < entries[i - 1]["end"]:
            left = entries[i - 1]
            split = (left["end"] + item["start"]) / 2
            left["end"] = max(left["start"] + 0.1, split - 0.015)
            item["start"] = max(left["end"] + 0.015, split + 0.015)
        if i and item["start"] < entries[i - 1]["end"]:
            item["start"] = entries[i - 1]["end"] + 0.02
        item["end"] = min(duration, max(item["start"] + 0.2, item["end"]))
    for i in range(len(entries) - 1):
        entries[i]["end"] = min(entries[i]["end"], entries[i + 1]["start"] - 0.015)
        if entries[i]["end"] <= entries[i]["start"]:
            entries[i]["end"] = entries[i]["start"] + 0.08
    entries[-1]["end"] = min(duration, max(entries[-1]["start"] + 0.25, entries[-1]["end"]))
    return entries

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--audio", default="public/audio/VO_Batubara_Swabakar.wav")
    ap.add_argument("--output", default="final-deliverables/BatubaraSwabakar.srt")
    ap.add_argument("--asr", action="store_true", help="Try faster-whisper, fallback if not installed/network inaccessible")
    args = ap.parse_args()
    with wave.open(args.audio, "rb") as wav:
        duration = wav.getnframes() / wav.getframerate()
    entries = fallback(duration)
    method = "fallback_old_cues_unverified"
    transcript = ""
    ratio = None
    if args.asr:
        try:
            timed, transcript, lang = recognize(Path(args.audio))
            entries, ratio, method = matched_cues(timed, duration)
        except Exception as exc:
            method = f"fallback_ASR_unavailable_{type(exc).__name__}"
            transcript = f"ASR unavailable: {exc}"
    entries = finalize(entries, duration)
    path = Path(args.output)
    path.parent.mkdir(parents=True, exist_ok=True)
    out = []
    for n, c in enumerate(entries, start=1):
        out.append(f"{n}\n{to_stamp(c['start'] * 1000)} --> {to_stamp(c['end'] * 1000)}\n{c['text']}")
    path.write_text("\n\n".join(out) + "\n", encoding="utf-8")
    flagged = sorted(set(w for w in words(transcript) if w in {"curious", "serius", "serious", "explain"}))
    report = {
        "duration_seconds": duration,
        "srt_cues": len(entries),
        "method": method,
        "global_asr_token_match": ratio,
        "suspected_expression_tokens_in_ASR": flagged,
        "warning": "Automatic timing is not human listening verification. If method starts with fallback, SRT requires manual sync review.",
        "entries": entries,
        "transcript": transcript,
    }
    Path(path.parent / "subtitle-alignment-report.json").write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
    Path(path.parent / "whisper-transcript.txt").write_text(transcript, encoding="utf-8")
    print(json.dumps({k: v for k, v in report.items() if k not in {"entries", "transcript"}}, ensure_ascii=False))
    if any(c["end"] > duration + 1e-5 for c in entries):
        raise RuntimeError("Subtitle exceeds audio duration.")

if __name__ == "__main__":
    main()

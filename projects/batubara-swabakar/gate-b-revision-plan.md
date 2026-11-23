# Batubara Swabakar — Gate B revision plan

**Status:** Gate B not approved. Current contact sheet and existing WAV remain as baseline evidence, not final approval.

## Verified repository state (2026-11-23)
- Main branch contains `deliverables/swabakar-gate-b/preview/contact-sheet.jpg`, `preview/preview-360x640.webm`, four subtitled stills, `qa-report.md`, the original VO and original manuscript.
- Six inspected GitHub branches did **not** contain `BatubaraSwabakar.tsx`, `StockpileScenes.tsx`, or `MonitoringScenes.tsx`. The source files may still exist inside the prior Codex task workspace. Do not assert these can be rebuilt exactly from previews.

## VO blocking issue
The source manuscript contains expression tokens like `<curious>`, `<explain>` and others. The old audio and frame 64 show 'Curious' as speech/subtitle. Create a new recording from `scripts/Naskah_Batubara_Swabakar_TTS_Clean.md` using tested style settings. Preserve original as reference. Do not silently remove the word from old audio. Re-align all timings after receiving a new WAV.

## Visual feedback
On contact-sheet frames 1200, 1285, and 1316, the worker is an overly simplified geometric cartoon compared with the stronger stockpile cutaway. Its stationary presentation pose beside a large monitor obscures the practical temperature-checking action.

### Proposed redesign
- Scene 7: stockpile inspection context with plausible worker proportions and correct visible PPE, then a close-up showing a handheld measurement at an accessible point.
- Scene 8: separate reporting beat using a handheld radio, with a minimal graph/status overlay; closing text `PANTAU SUHU · LAPORKAN`.
- Avoid unsupported numerical temperature thresholds or implying infrared surface readings prove internal stockpile safety.

## Acceptance criteria
- New source code and media committed to an identifiable feature branch before reviewing a new Gate B clip.
- Before/after stills at matching scene points, animation preview of the actual worker in motion, text-safe-area review and human visual sign-off.
- Updated duration, timecoded storyboard/subtitles and listening QA based on the new WAV.
- No final MP4 until explicit approval.

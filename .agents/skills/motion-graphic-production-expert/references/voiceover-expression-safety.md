# Voice-over expression and TTS safety

## Source preservation
- Keep the original manuscript and WAV immutable. Create a separate clean spoken script and production direction notes.
- Never present angle-bracket expression tags as portable across vendors; supported syntax is engine- and model-specific.
- Before a full-length export, run a short audition containing one example of each proposed expression and listen to the WAV. Reject any take where markup is spoken aloud.
- Prefer style/emotion settings, separate director notes, and punctuation/pauses supported by the TTS engine. Only use documented markup verified in playback.

## Mandatory checks
1. Parse the spoken-input script for expressions such as `<curious>`, `<serious>`, `<explain>`, `<urgent>`, and XML/SSML-like tags. Report these as potential literal-speech hazards, not automatically supported instructions.
2. Produce a speech-only text version with no expression tokens. Preserve wording unless requested changes are explicitly approved.
3. Store the performance instructions in a separate table: segment, spoken words, delivery/emotion, pronunciation, intended pause.
4. Measure output duration and listen to every tag boundary. Speech recognizers can support checking but cannot prove the absence of unwanted speech.
5. If tags were spoken in the actual recording, label the VO as needing regeneration. Do not silently splice, mute, or remove narration. After replacement, redo timing and subtitles against the corrected file.

## Gate rule
A manuscript tagged as "TTS-ready" is not ready until the chosen TTS engine has passed an audio audition. Failed tags block final voice-over approval.

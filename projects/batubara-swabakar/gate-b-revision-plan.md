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

## Revision implementation — 2026-11-24 (ChatGPT/GitHub)
- GitHub PR #7 preserved the actual TypeScript source on `main`, including the Root registration.
- PR #8 updates `MonitoringScenes.tsx`: worker anatomical detail, connected arm pose, inspection with an infrared surface thermometer, separate radio-reporting action, and a compact non-numeric temperature trend. This is an artistic illustration, **not** a verified field measurement method.
- GitHub Actions successfully measured the replacement WAV: **41.360000 seconds**, mono 24 kHz/16-bit, 992,640 audio frames; an exact 30 fps canvas uses **1241 video frames / 41.366667 seconds**. The prior 43.880s/1317-frame timeline is no longer valid.
- `BatubaraSwabakar.tsx` now maps the eight prior illustration scenes to the 1241-frame timeline provisionally, retaining the 3-second opening; `src/Root.tsx` registers 1241 frames.
- **Critical remaining blocker:** old `subtitles.provisional.json` still contains the phrases `Curious.` and `Serius.` from the old WAV. These timings must not be delivered as verified subtitles. A listening review and new forced alignment of the corrected WAV are still required. The user-facing default remains `showSubtitles=false`.
- Gate B still requires human review of revised frame previews and a short motion segment. Passing TypeScript, lint and screenshot rendering alone is insufficient.
- Gate C final video/SRT remains unauthorized.

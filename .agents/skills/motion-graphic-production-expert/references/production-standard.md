# Production standard

## Timebase
Use integer frames and Remotion `useCurrentFrame()` / `useVideoConfig()` for deterministic animation. Convert verified timestamps to frames using the actual composition fps. Confirm VO starts at the intended frame; a 3-second title does not imply the VO should be delayed 3 seconds.

## Safe layout
Default design margin: 7% of canvas width on each side and 7% of height top/bottom. For vertical short-form, reserve extra lower space for platform overlays and subtitles; confirm against target platform. Avoid positioning key graphics in subtitle zone. Test unusually long Indonesian words and line wraps. Use visual inspection, not just bounding-box calculations.

## Storyboard columns
Scene ID | Start | End | Narration/VO | Visual | On-screen keywords | Motion/transition | Assets | Risks/notes

## Audio and subtitles
Measure media duration using ffprobe. Prefer a supported forced-alignment or transcription tool and manually verify the timing against the actual VO. If transcription is blocked, follow the fallback order in [Environment preflight](environment-preflight.md). Record verified cue times only. For storyboard review, leave unverified VO-dependent timings pending and label them clearly.

Run the SRT checker for cue structure, numbering and timestamp rules. During preview and final QA, listen to the actual audio, compare cue starts and ends to the speech, and confirm the last cue fits within the final duration. Keep VO clear and music below it, with fade in/out.

## Browser provisioning

Prefer Remotion's managed browser when available. If its download is blocked, use a verified local Chromium with the opt-in override in [Environment preflight](environment-preflight.md). Confirm composition discovery and a still before using it for preview. If neither browser works, report the blocker and keep the preview gate open.

## Quality gates
- Gate A requires approval of script/VO discrepancy handling and the storyboard before implementation.
- Gate B requires review and approval of representative previews.
- Gate C requires explicit authorization before the final render and validation of the resulting dimensions, fps, duration, audio streams, and SRT structure and sync where applicable.

## Mining visual fidelity
For safety content, depict APD, haul roads, vehicles, equipment geometry, signage, and operating context accurately. Do not fabricate procedures, distances, speed limits, or legal requirements; flag uncertain facts for SME approval.

## Git workflow
Use a feature branch and PR. Commit source, skill, and configuration, but exclude `node_modules`, large renders, and private or restricted assets. Confirm the GitHub repository's public/private visibility before committing proprietary scripts or VO.

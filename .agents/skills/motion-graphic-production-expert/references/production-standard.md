# Production standard

## Timebase
Use integer frames and Remotion `useCurrentFrame()` / `useVideoConfig()` for deterministic animation. Convert verified timestamps to frames using the actual composition fps. Confirm VO starts at the intended frame; a 3-second title does not imply the VO should be delayed 3 seconds.

## Safe layout
Default design margin: 7% of canvas width on each side and 7% of height top/bottom. For vertical short-form, reserve extra lower space for platform overlays and subtitles; confirm against target platform. Avoid positioning key graphics in subtitle zone. Test unusually long Indonesian words and line wraps. Use visual inspection, not just bounding-box calculations.

## Storyboard columns
Scene ID | Start | End | Narration/VO | Visual | On-screen keywords | Motion/transition | Assets | Risks/notes

## Audio and subtitles
Measure media duration using ffprobe. For alignment, prefer a supported forced-alignment/transcription tool; manually verify against actual VO. If unavailable, mark timings unverified and do not promise accurate SRT. No subtitle cue overlap; ensure cues stay within final duration. Keep VO clear and music below it, with fade in/out.

## Quality gates
- Gate A: script/VO discrepancies and storyboard approved
- Gate B: representative previews reviewed and approved
- Gate C: final render validated (dimensions, fps, duration, audio streams, SRT syntax)

## Mining visual fidelity
For safety content, depict APD, haul roads, vehicles, equipment geometry, signage, and operating context accurately. Do not fabricate procedures, distances, speed limits, or legal requirements; flag uncertain facts for SME approval.

## Git workflow
Use a feature branch and PR. Commit source, skill, and configuration, but exclude `node_modules`, large renders, and private or restricted assets. Confirm the GitHub repository's public/private visibility before committing proprietary scripts or VO.

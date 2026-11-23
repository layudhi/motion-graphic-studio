---
name: motion-graphic-production-expert
description: End-to-end Remotion TypeScript motion graphics production from script and voice-over, with verified timing, storyboard approval, visual QA, and final MP4/SRT delivery. Use for explainer, safety awareness, educational, vertical shorts and corporate video projects.
---

# Motion Graphic Production Expert v2.0

Use this skill when asked to produce a motion graphic, explainer, or safety video using Remotion. Read `references/production-standard.md` and the relevant installed Remotion official skill before writing code.
Use `references/environment-preflight.md` to verify the renderer and speech-alignment tools before relying on them.

## Input contract
Ask only for missing essentials: script, VO (if it exists), format/aspect ratio, audience, and any required reference images. Do not assume absent assets exist. Never modify the source narration without approval. Verify license/permission for music, images, and fonts.

## Stages and mandatory gates
1. **Ingest**: Inspect files and repository; record paths, VO duration (ffprobe if available), frame rate, canvas, transcript source, and differences between narration and recorded audio. If transcription fails, try a verified local fallback, use a supplied timecoded transcript, or align manually to the recording. If none is available, mark the storyboard timing unverified and leave VO-dependent timestamps pending. Do not invent timestamps.
2. **Storyboard**: Produce timecoded scenes with narration, visual actions, keywords, transitions, asset requirements, and safe zones. Opening title defaults to 3 seconds only if compatible with audio timing. Present storyboard and thumbnail concept. **STOP for user approval.**
3. **Implementation**: After storyboard approval, create a Remotion TypeScript composition with deterministic frame-based animations. Keep assets under `public/` and reusable components under `src/`. Do not overwrite unrelated compositions. Use original artwork or appropriately licensed assets.
4. **Preview and visual QA**: Render representative still frames (opening, scene transitions, longest text, subtitle, closing) and, when feasible, a low-resolution preview clip. If the managed browser download is blocked, use the preflight's verified local Chromium procedure and report any remaining blocker. Inspect for clipping, overlaps, unreadable text, missing assets, incorrect equipment or PPE, and animation/VO drift. Fix issues and report evidence. **STOP for user approval.**
5. **Final render**: Only after explicit approval, render H.264 MP4 and UTF-8 SRT; include VO and music only when authorized assets exist. Verify actual media with ffprobe, compare audio and video duration, inspect representative frames, and report outputs.

## Non-negotiable requirements
- Never claim a visual QA pass solely because TypeScript or build passed.
- No on-screen full narration except explicitly requested subtitles. Keep primary screen text to short keywords.
- Subtitle background transparent or minimally intrusive, with contrast and safe-area padding.
- Maintain separation between subtitles, titles, graphics, and platform UI safe zones.
- Audio mixing: VO intelligible; duck music beneath speech. Never silently substitute copyrighted music.
- Check spelling and technical accuracy of mining assets against provided references; do not invent safety distances or operating rules.
- Respect user-specified aspect ratio, resolution, fps, color palette, visual style, and required PPE.
- Do not render final MP4 before approval. If a tool, dependency, or network access is missing, report the limitation and a reproducible next step.

## Deliverables
- `docs/storyboard.md` (scene timeline and approvals)
- `docs/qa-report.md` (checks, evidence, unresolved items)
- `src/` Remotion composition and components
- `public/` licensed/supplied assets
- `out/` preview and final MP4 (do not commit large renders unless requested)
- `out/subtitles.srt` with verified timecodes

## Useful supporting references
- `references/production-standard.md`: timing, typography, composition, and QA rules
- `references/environment-preflight.md`: browser fallback, transcription options, and subtitle checks
- `templates/project-brief.md`: reusable project intake
- `scripts/check_srt.py`: SRT syntax, timing, overlap checks

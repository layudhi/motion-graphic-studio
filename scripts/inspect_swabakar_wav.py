#!/usr/bin/env python3
"""Check the committed voice-over without requiring additional packages.

Exit nonzero if the WAV cannot be inspected. Prints measured timing but does NOT
claim the transcript or old subtitles are aligned with the replacement audio.
"""
import math
import sys
import wave
from pathlib import Path

path = Path(sys.argv[1] if len(sys.argv) > 1 else "public/audio/VO_Batubara_Swabakar.wav")
with wave.open(str(path), "rb") as wav:
    frames = wav.getnframes()
    sample_rate = wav.getframerate()
    channels = wav.getnchannels()
    sample_width = wav.getsampwidth()
duration = frames / sample_rate
target_frames = math.ceil(duration * 30)
print(f"WAV_PATH={path}")
print(f"WAV_FRAMES={frames}")
print(f"WAV_SAMPLE_RATE={sample_rate}")
print(f"WAV_CHANNELS={channels}")
print(f"WAV_BYTES_PER_SAMPLE={sample_width}")
print(f"WAV_DURATION_SECONDS={duration:.6f}")
print(f"VIDEO_FRAMES_AT_30FPS={target_frames}")
print(f"VIDEO_DURATION_SECONDS={target_frames / 30:.6f}")
print("WARNING=Scene boundaries and subtitles are based on old audio; realign before final render.")

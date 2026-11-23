#!/usr/bin/env python3
"""Validate SRT timestamps, sequence numbers, ordering, and overlaps."""
import argparse
import re
from pathlib import Path

STAMP = re.compile(r"^(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})$")

def milliseconds(parts):
    h, m, s, ms = map(int, parts)
    if m > 59 or s > 59 or ms > 999:
        raise ValueError("Invalid timestamp component")
    return ((h * 60 + m) * 60 + s) * 1000 + ms

def validate(path):
    data = Path(path).read_text(encoding="utf-8-sig").strip()
    if not data:
        raise ValueError("Empty SRT")
    prev_end = 0
    for expected, block in enumerate(re.split(r"\n\s*\n", data), 1):
        lines = block.strip().splitlines()
        if len(lines) < 3 or lines[0].strip() != str(expected):
            raise ValueError(f"Cue {expected}: numbering or text invalid")
        match = STAMP.fullmatch(lines[1].strip())
        if not match:
            raise ValueError(f"Cue {expected}: timestamp format invalid")
        start = milliseconds(match.groups()[:4]); end = milliseconds(match.groups()[4:])
        if start >= end:
            raise ValueError(f"Cue {expected}: nonpositive duration")
        if start < prev_end:
            raise ValueError(f"Cue {expected}: overlap or out of order")
        prev_end = end
    print(f"PASS: {expected} cues; last ends at {prev_end / 1000:.3f}s")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("srt")
    args = parser.parse_args()
    validate(args.srt)

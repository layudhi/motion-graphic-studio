"""Exercise check_srt.py through its command-line interface."""

import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


CHECKER = Path(__file__).with_name("check_srt.py")


def run_checker(contents):
    with tempfile.TemporaryDirectory() as directory:
        path = Path(directory) / "subtitles.srt"
        path.write_text(contents, encoding="utf-8")
        return subprocess.run(
            [sys.executable, str(CHECKER), str(path)],
            capture_output=True,
            text=True,
            timeout=10,
        )


class CheckSrtTest(unittest.TestCase):
    def assert_rejected(self, contents, message):
        result = run_checker(contents)
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertIn(message, result.stderr)

    def test_valid_adjacent_cues(self):
        result = run_checker(
            "1\n00:00:00,000 --> 00:00:01,000\nSelamat pagi.\n\n"
            "2\n00:00:01,000 --> 00:00:02,250\nTerima kasih.\n"
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("PASS: 2 cues; last ends at 2.250s", result.stdout)

    def test_overlapping_cues(self):
        self.assert_rejected(
            "1\n00:00:00,000 --> 00:00:01,500\nFirst.\n\n"
            "2\n00:00:01,000 --> 00:00:02,250\nSecond.\n",
            "Cue 2: overlap or out of order",
        )

    def test_negative_duration(self):
        self.assert_rejected(
            "1\n00:00:02,000 --> 00:00:01,000\nReversed.\n",
            "Cue 1: nonpositive duration",
        )

    def test_malformed_timestamp(self):
        self.assert_rejected(
            "1\n00:00:00.000 --> 00:00:01,000\nMalformed.\n",
            "Cue 1: timestamp format invalid",
        )

    def test_out_of_order_cues_without_overlap(self):
        self.assert_rejected(
            "1\n00:00:04,000 --> 00:00:05,000\nLate cue.\n\n"
            "2\n00:00:01,000 --> 00:00:02,000\nEarly cue.\n",
            "Cue 2: overlap or out of order",
        )

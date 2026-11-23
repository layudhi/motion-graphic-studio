# Environment preflight

## Remotion browser

Prefer Remotion's managed Chrome Headless Shell. If provisioning fails because the download host is blocked, record the error and switch to an installed Chromium. Retry managed provisioning only after network access or the browser provisioning changes.

The Linux cloud preflight used Debian Chromium 156.0.8078.79 via `/usr/bin/chromium`, which starts the binary at `/usr/lib/chromium/chromium`. Pass the launcher so the distribution's setup is applied. Check the installed version and run a composition listing and a temporary still from the repository root.

```sh
/usr/bin/chromium --version
export REMOTION_BROWSER_EXECUTABLE=/usr/bin/chromium
npx --no-install remotion compositions --log=verbose
scratch_dir="$(mktemp -d)"
npx --no-install remotion still MiningSafetyDemo "$scratch_dir/frame-045.png" --frame=45 --log=verbose
ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of compact "$scratch_dir/frame-045.png"
```

The expected still is 1080×1920. Check the verbose browser launch line for the configured executable. For other projects, verify a representative still for each needed browser feature, especially browser-specific features such as `HtmlInCanvas`. A successful smoke test establishes renderer startup and still capture. Gate B still requires a review of the production previews.

The override requires an absolute path to an executable file. Leave the variable unset to use Remotion's managed default. For a single CLI call, leave the variable unset and pass `--browser-executable=/usr/bin/chromium`. Node API callers must pass `browserExecutable` to the renderer APIs directly because the CLI config does not apply. If no verified browser is available, report the failing step and keep Gate B open.

## Indonesian voice-over

1. Use an approved timecoded transcript when available. Verify it against the actual recording. If you have both the recording and an approved script, use the script to correct transcription errors and resolve discrepancies before approving timing.
2. Evaluate Remotion's [Whisper WebGPU](https://www.remotion.dev/docs/whisper-webgpu/) on GPU-capable hosts. It uses `@remotion/whisper-webgpu` and `@huggingface/transformers`, with a compatible GPU adapter, a model cache, and 16 kHz mono audio. Use the multilingual `small` model with `language: "id"`. Run `canUseWhisperWebGpu()` before attempting a weight download. Version 4.0.545 fetches weights from `remotion.media`. Its reported downloads are about 206 MB for `base`, 586 MB for `small`, and 1.70 GB for `medium`.
3. If WebGPU or its model provisioning fails, use Whisper.cpp on CPU with a locally cached multilingual GGML model. A CPU build needs Git, CMake, a C/C++ toolchain and build backend. FFmpeg prepares the audio. Use `base` (142 MiB) for a short smoke test. Start production evaluation with `small` (466 MiB) and consider `medium` (1.5 GiB) if the transcript needs better accuracy and throughput is acceptable. [Whisper.cpp models and checksums](https://github.com/ggml-org/whisper.cpp/blob/v1.8.4/models/README.md)
4. If the model host is blocked, use approved cached weights and verify their checksum against upstream. If transcription is still unavailable or inaccurate, get a timecoded transcript or use a waveform editor to mark cue boundaries while listening to the actual recording. Leave any unverified cue timestamps pending and flag them in the storyboard and QA report. Require verified cue timing for final subtitle delivery.

```sh
git clone --depth 1 --branch v1.8.4 https://github.com/ggml-org/whisper.cpp.git
cmake -S whisper.cpp -B whisper-build -DCMAKE_BUILD_TYPE=Release -DWHISPER_BUILD_EXAMPLES=ON \
  -DWHISPER_BUILD_TESTS=OFF -DGGML_CUDA=OFF -DGGML_VULKAN=OFF
cmake --build whisper-build --target whisper-cli --parallel 2

# When the upstream model host is reachable, or supply an approved cached file.
sh whisper.cpp/models/download-ggml-model.sh small
ffmpeg -i /path/to/vo.wav -vn -ac 1 -ar 16000 -c:a pcm_s16le vo-16k.wav
whisper-build/bin/whisper-cli --no-gpu --language id --model whisper.cpp/models/ggml-small.bin \
  --file vo-16k.wav --output-srt --output-json-full --output-file vo-draft
```

Use the segment times as draft cues and adjust them to sentence boundaries against the recording. For word-level estimates, Whisper.cpp documents an experimental pass using `--max-len 1 --split-on-word`. Use a separate output prefix for that pass. Verify Indonesian terms, names, and timing around pauses by listening to the actual VO. A transcription pass alone does not resolve discrepancies with the approved script.

The Linux cloud preflight built Whisper.cpp v1.8.4 on CPU. The Remotion WebGPU probe found no usable adapter. The proxy blocked HTTPS to `huggingface.co` and `remotion.media`, so model inference, Indonesian accuracy, and throughput remain unverified on this host. The proxy also blocked `api.openai.com`, which rules out the OpenAI-hosted transcription option on this network.

## Subtitle checks

```sh
python3 -B -m unittest discover -s .agents/skills/motion-graphic-production-expert/scripts -p 'test_check_srt.py' -v
python3 .agents/skills/motion-graphic-production-expert/scripts/check_srt.py out/subtitles.srt
```

The checker verifies cue numbering, text presence, timestamp syntax, positive duration, ordering, and overlap. Use `ffprobe` to measure the final media duration and compare it with the last cue end. Review cue starts and ends against the actual VO and inspect subtitle placement on the preview. Record structural validation and VO sync results separately in the QA report.

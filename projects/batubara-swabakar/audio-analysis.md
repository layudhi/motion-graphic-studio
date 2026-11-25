# Analisis VO | Keselamatan Tangan dan Jari

## Sumber dan hasil ukur

Naskah lengkap dan WAV diperoleh dari `main` pada commit `770ea9e86d8cebad0582116d3bbf2c646c7beaa0`. Kedua berkas memakai nama sumber yang ditetapkan dalam brief. [Naskah sumber](https://github.com/layudhi/motion-graphic-studio/blob/770ea9e86d8cebad0582116d3bbf2c646c7beaa0/scripts/naskah_storyboard_video_k3_jsa_tangan_kpc.md) · [WAV sumber](https://github.com/layudhi/motion-graphic-studio/blob/770ea9e86d8cebad0582116d3bbf2c646c7beaa0/public/audio/vo_video_k3_jsa_tangan_kpc.wav)

| Parameter | Hasil |
| --- | --- |
| Durasi media terukur | **66,000000 detik** (`00:01:06.000`) menurut stream dan kontainer `ffprobe` 7.1.5. |
| Sampel dan format | `duration_ts=1584000`, `time_base=1/24000`, PCM `pcm_s16le`, mono, 24.000 Hz, 16-bit. |
| Rentang gambar pada 30 fps | **1.980 frame**, indeks 0–1979. Akhir eksklusif video `00:01:06:00`. |
| Awal rekaman | Media dimulai di `00:00.000` dengan aktivitas audio ringan pada awal berkas. Onset ucapan pertama sekitar `00:00.87`, setelah jeda awal. |
| Akhir rekaman | Ujaran terakhir berakhir sekitar `01:05.6`. Ekor audio berlanjut hingga `01:06.000`. |
| Level rekaman | `ebur128` mencatat −23,4 LUFS terintegrasi dan true peak sekitar −1,9 dBTP. Gunakan headroom ini saat menilai level efek suara dan musik. |
| SHA-256 WAV | `18769f92d8760453dd7d1a12204965d16d15a4b4a64af85d1fb970246f765343` |

Pengukuran dapat diulang pada WAV sumber dengan perintah berikut.

```sh
ffprobe -v error \
  -show_entries format=duration:stream=codec_name,sample_rate,channels,bits_per_sample,time_base,duration_ts,duration \
  -of json public/audio/vo_video_k3_jsa_tangan_kpc.wav
```

## Metode dan keyakinan timing

Salinan analisis 16 kHz mono didekode secara lokal dengan `whisper.cpp` v1.8.4 model Small multibahasa (`id`), termasuk pemeriksaan posisi token dengan DTW. Jalur pembanding memakai Omnilingual ASR 300M CTC v2 INT8 dan Qwen3-ASR 0.6B INT8 pada jendela audio dengan offset dari WAV asli. Pemeriksaan silang memakai deteksi ucapan Silero, bentuk gelombang, serta `ffmpeg silencedetect` pada −45 dan −55 dBFS. Naskah dipakai untuk membandingkan hasil dan menormalkan ejaan setelah transkripsi.

Durasi media terverifikasi dari jumlah sampel. Keyakinan tinggi untuk urutan adegan dan posisi potongan gambar karena setiap potongan internal berada di jeda yang terukur. Cue ucapan di bawah dibulatkan ke persepuluhan detik dan masih **provisional**. ASR dan pemeriksaan akustik memberikan kisaran yang berguna untuk penyuntingan. Peninjauan sambil mendengar WAV diperlukan untuk mengesahkan batas kalimat dan bunyi ekspresif yang lemah.

| Setelah adegan | Jeda hasil `silencedetect` pada −55 dBFS, dibulatkan (detik) | Usulan titik potong pada 30 fps |
| --- | --- | --- |
| 01 | 2,57–3,48 | f90 · `00:00:03:00` |
| 02 | 11,02–11,33 | f336 · `00:00:11:06` |
| 03 | 23,32–23,63 | f704 · `00:00:23:14` |
| 04 | 38,32–38,99 | f1160 · `00:00:38:20` |
| 05 | 46,12–47,01 | f1397 · `00:00:46:17` |
| 06 | 57,49–58,00 | f1732 · `00:00:57:22` |

Gunakan WAV penuh pada titik masuk `00:00.000`. Hook memakai tiga detik pertama gambar, dengan ucapan masuk alami di dalamnya. Durasi gambar mengikuti ekor WAV.

## Perbandingan naskah dan rekaman

| Temuan | Bukti dan keputusan Gate A |
| --- | --- |
| Durasi | Naskah menetapkan target 78 detik (2.340 frame). WAV lebih pendek 12 detik (360 frame). Potongan gambar mengikuti rekaman. |
| Spesifikasi WAV | Arahan rekaman meminta 48 kHz dan 24-bit. Berkas aktual berformat 24 kHz dan 16-bit. Pengukuran durasi memakai berkas asli. |
| Kalimat dan kata | Tujuh blok narasi terbaca sesuai urutan naskah. Pemeriksaan silang belum menemukan kata naskah yang hilang atau tambahan kata yang dapat dikonfirmasi. “Ah, kerjaan rutin” sempat terlewat pada hasil Whisper penuh. CTC dan transkripsi ulang potongan yang sama memulihkan frasa tersebut. |
| Artikulasi dan ejaan | Qwen3-ASR menguatkan “tanganmu hari ini”, “keselamatanmu”, dan “memeluk”. Untuk “seberapa”, hasil CTC dan energi frikatif tinggi sekitar detik 14,7 mendukung bunyi awal /s/ sesuai naskah. Whisper menangkap akhir kata “menyentuh”. |
| Ekspresi dan jeda | `<inhale>`, `<sigh>`, `<gasp>`, dan `<soft chuckle>` adalah arahan performa dalam naskah. Transkripsi silang tidak menghasilkan pembacaan literal tag. Ada bunyi pendek di beberapa jeda yang perlu dikonfirmasi saat tinjauan dengar. Naskah mengarahkan 0,5 detik per elipsis. Di WAV, jeda di antara “pekerjaan” dan “hanya” sekitar 0,26–0,34 detik, bergantung pada ambang yang digunakan. |
| Ruang lingkup | Isi naskah dan WAV adalah keselamatan tangan dan jari. Permintaan ilustrasi swabakar dimasukkan sebagai konsep pendamping di [creative-direction.md](creative-direction.md). |

## Cue kalimat dari rekaman

Rentang perkiraan memakai `MM:SS.s` dari awal WAV, termasuk jeda internal dalam kalimat. Tanda baca dan kapitalisasi mengikuti Bahasa Indonesia. Rentang potong gambar ada di [storyboard.md](storyboard.md).

| Adegan | Rentang provisional | Ucapan |
| --- | --- | --- |
| 01 | `00:00.9–00:02.6` | Lihat kedua tanganmu hari ini. |
| 02 | `00:03.5–00:07.7` | Berapa kali kita memulai pekerjaan... hanya karena merasa sudah terbiasa? |
| 02 | `00:08.5–00:09.9` | Ah, kerjaan rutin. |
| 02 | `00:10.0–00:11.0` | Kemarin juga aman. |
| 03 | `00:12.2–00:15.8` | Di area kerja, bahaya tidak pernah peduli seberapa senior kita. |
| 03 | `00:16.6–00:22.8` | Satu detik lengah... satu titik jepit yang terlewat... bisa merenggut fungsi jari dan tangan kita selamanya. |
| 04 | `00:23.6–00:26.0` | Jangan mulai pekerjaan sebelum benar-benar siap. |
| 04 | `00:26.7–00:27.8` | Baca SOP-nya. |
| 04 | `00:28.3–00:29.4` | Pahami JSA-nya. |
| 04 | `00:29.9–00:38.3` | Kenali setiap potensi bahaya di sekitarmu, pahami kontrolnya, dan pastikan semua kondisi benar-benar aman sebelum tanganmu menyentuh alat. |
| 05 | `00:39.2–00:40.1` | Ingat prinsip kita. |
| 05 | `00:40.7–00:43.0` | Kerjakan dengan benar, kerjakan dengan aman. |
| 05 | `00:43.7–00:46.1` | Karena mesin yang rusak... selalu bisa diperbaiki. |
| 06 | `00:47.8–00:50.2` | Tapi keselamatanmu... tidak ada suku cadangnya. |
| 06 | `00:51.0–00:57.5` | Tangan dan jari yang bekerja keras hari ini, adalah tangan yang sama... yang dinanti untuk memeluk keluarga saat kamu pulang. |
| 07 | `00:58.0–01:03.8` | JSA sebelum tangan bekerja, agar tangan yang sama bisa memeluk keluarga. |
| 07 | `01:04.5–01:05.6` | Pulang dengan selamat. |

Cue gerak yang berguna dalam kalimat panjang mencakup “titik jepit” sekitar `00:18.5`, “pahami kontrolnya” sekitar `00:32.6`, “dan pastikan” sekitar `00:34.0`, dan “adalah tangan yang sama” sekitar `00:53.4`.

## Klaim dan visual teknis untuk tinjauan HSES

| Butir dari sumber | Perlakuan storyboard |
| --- | --- |
| Freeze “2 milimeter” dan “ZERO SECOND CHANCE” | Gunakan arsiran seluruh zona jepit tanpa angka jarak. Gambarkan kemungkinan cedera permanen melalui cue narasi dan hentinya tangan di luar jalur gerak. Adegan tanpa kontak atau gambar cedera. [NIOSH, cedera tangan dan jari di pertambangan](https://www.cdc.gov/niosh/mining/topics/handfingerinjuries.html) |
| Tekanan hidrolik, pengganjalan, dan LOTO | Konfirmasi sumber energi, titik isolasi, cara verifikasi, dan penopang sesuai tugas dan manual unit. Tampilkan isolasi, penahanan gerak, dan verifikasi sebagai langkah yang terlihat. D10T memakai rantai, sehingga arahan *wheel chock/jack stand* perlu validasi penerapan sebelum digambar terperinci. [MSHA, panduan keselamatan alat berat](https://www.msha.gov/sites/default/files/events/Powered%20Haulage%20Guidance.pdf) · [Caterpillar D10T](https://parts.cat.com/en/catcorp/equipment/track-type-tractor/D10T-35/manuals-and-resources) |
| Sarung tangan dan APD KPC | Validasi jenis sarung tangan, APD, dan tanda identitas dengan HSES setempat. Urutan visual mengutamakan kontrol sumber bahaya dan posisi tangan di luar jalur gerak. Seleksi sarung tangan bergantung pada tugas dan potensi tersangkut. [RSHQ, pencegahan cedera tangan serius](https://www.rshq.qld.gov.au/safety-and-health-alerts/mines/preventing-serious-hand-injuries) |
| “Benar-benar aman” dan “selalu bisa diperbaiki” | Pertahankan VO kampanye. Untuk “aman”, tampilkan peninjauan langkah dan verifikasi kontrol relevan. Tempatkan “selalu bisa diperbaiki” sebagai ungkapan kampanye tanpa klaim keandalan peralatan di layar. [CCOHS, *Job Safety Analysis*](https://www.ccohs.ca/oshanswers/hsprograms/job-haz.html) |
| Flyer, logo resmi, dan rilis publik | Gunakan komposisi ilustrasi orisinal. Konfirmasikan aset logo dan izin KPC jika identitas resmi akan tampil. |

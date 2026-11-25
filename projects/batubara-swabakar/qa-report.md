# QA Gate B | Keselamatan Tangan dan Jari

**Komposisi Remotion `KeselamatanTangan` · 1080 × 1920 · 30 fps · 1.980 frame · 66,000 detik**

Storyboard disetujui untuk Gate B. Tujuh Sequence memakai batas frame 0, 90, 336, 704, 1160, 1397, 1732, dan 1980. Aksen cahaya pada match cut berjalan di dalam adegan. Potongan dan penutup tetap mengikuti [storyboard yang disetujui](storyboard.md).

## Pratinjau

| Berkas | Isi |
| --- | --- |
| `out/keselamatan-tangan-gate-b/preview-360x640.webm` | Klip lengkap 360 × 640, 30 fps. Video VP8 dan audio Opus. |
| `out/keselamatan-tangan-gate-b/contact-sheet.jpg` | Ringkasan 15 gambar untuk menilai cerita, kata kunci, dan transisi. |
| `out/keselamatan-tangan-gate-b/stills/` | 42 PNG dengan resolusi komposisi. Frame 1872 merupakan kandidat sampul. |
| `out/keselamatan-tangan-gate-b/ponsel/` | Gambar yang sama pada 360 × 640 untuk memeriksa keterbacaan. |

Salinan klip, contact sheet, dan seluruh frame untuk tinjauan di GitHub tersedia di [paket pratinjau Gate B](../../deliverables/keselamatan-tangan-gate-b/README.md).

Remotion Studio menampilkan komposisi dan kedua jalur audio. CLI menggunakan Chromium lokal 156.0.8078.79 setelah unduhan Chrome Headless Shell gagal. Paket `@remotion/fonts` yang tercatat dalam lockfile dipulihkan ke instalasi lokal. Font Barlow Condensed memakai aset OFL yang sudah tersedia di repositori.

## Pemeriksaan visual

Gambar PNG diperiksa pada potongan detail di resolusi sumber dan pada ukuran ponsel. Sebanyak 19 frame yang didekode dari klip WebM diperiksa lagi untuk menilai perubahan pose dan label saat adegan bergerak.

| Bagian | Frame yang ditinjau | Hasil |
| --- | --- | --- |
| Hook dan rutinitas | 0, 15, 45, 89, 91, 150, 264, 335 | Judul terbaca. Sarung tangan dan penanda bahaya memiliki siluet yang terpisah. Lengan yang meraih alat dipendekkan dan siku dibentuk ulang setelah tinjauan pertama. |
| Titik jepit | 336, 450, 565, 662, 703 | Arsiran menunjukkan zona jepit. Bayangan skematis memperlihatkan arah gerak yang mungkin. Tangan berada di luar arsiran dan ditarik pada akhir adegan. |
| SOP, JSA, dan kontrol | 704, 748, 840, 872, 918, 994, 1019, 1058, 1159 | Posisi tangan kedua mekanik disesuaikan agar masing-masing bisa menunjuk dokumen. Ujung lengan pada gambar dari atas kini tersambung ke tepi frame. Verifikasi tampil setelah ilustrasi isolasi dan penahan. |
| Kerja terkendali | 1160, 1223, 1257, 1315, 1396 | Ratchet berputar pada sumbu pengikat dengan tangan di gagang. Rekan terlihat di belakang bidang kerja. |
| Akhir shift dan pelukan | 1397, 1488, 1547, 1601, 1602, 1680, 1731 | Proporsi tangan, kepala anak, dan kontak sepatu dengan lantai disesuaikan setelah tinjauan pertama. Posisi tangan berpindah dari bengkel ke bahu pada frame 1602. |
| Sampul dan penutup | 1732, 1872, 1934, 1935, 1958, 1979 | Judul sampul tetap terbaca di crop tengah. Kata kunci penutup masuk pada cue terakhir dan bertahan sampai frame 1979. |

## Pemeriksaan audio dan render

- WAV VO memiliki SHA-256 `18769f92d8760453dd7d1a12204965d16d15a4b4a64af85d1fb970246f765343`. Jalurnya mulai di frame 0 dengan gain 1. Efek mekanis, ambience, dan motif nada merupakan suara orisinal pada jalur terpisah. Level jalur efek diturunkan mengikuti energi ucapan.
- `ffprobe` membaca 1.980 frame. Kontainer WebM melaporkan 66,008 detik dengan metadata penundaan codec Opus. Hasil decode berisi 3.168.000 sampel per kanal pada 48 kHz, tepat 66,000 detik.
- Korelasi gelombang terhadap campuran sumber sebesar 0,9969 untuk keseluruhan klip. Offset terukur 0 sampel pada delapan jendela ucapan, termasuk pembuka dan penutup. Puncak sejati pratinjau sekitar −1,8 dBTP dengan loudness terintegrasi −20,4 LUFS.
- `npm run lint` lulus. Pemeriksaan daftar komposisi mencatat `MiningSafetyDemo` 1080 × 1920 pada 30 fps dan 300 frame, `BatubaraSwabakar` 1.241 frame, serta `KeselamatanTangan` 1.980 frame.
- Cue kalimat di [analisis audio](audio-analysis.md) berstatus provisional hingga pemeriksaan dengar. Korelasi menguji sinkronisasi waveform pada pratinjau. Konfirmasi kejelasan bunyi ekspresif dan cue per kalimat menjadi bagian tinjauan dengar.

Cabang sumber lokal `codex/keselamatan-tangan-gate-b` memuat komposisi, ilustrasi vektor, naskah rujukan, VO sumber, dan efek suara.

## Persetujuan Gate B

Tinjauan HSES mencakup kesesuaian APD, konfigurasi isolasi, dan penahan terhadap gerak untuk unit serta tugas di lokasi. Panel isolasi dan penahan memakai gambar prinsip pengendalian. Konsep swabakar tetap tersedia di [arah kreatif](creative-direction.md).

Menunggu persetujuan eksplisit pratinjau Gate B.

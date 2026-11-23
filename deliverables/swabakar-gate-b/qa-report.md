# Laporan pratinjau Gate B — Batubara Swabakar

**Gate A disetujui. Gate B menunggu persetujuan pratinjau.**

| Atribut | Implementasi |
| --- | --- |
| Composition ID | `BatubaraSwabakar` |
| Kanvas dan laju | 1080 × 1920, 9:16, 30 fps |
| Durasi | 1.317 frame, 43,900 detik. Frame 0–89 membentuk pembuka tiga detik. |
| Narasi | WAV PCM asli 43,880000 detik dan 1.053.120 sampel pada 24.000 Hz, dimulai dari frame 0 dengan kecepatan dan level sumber. Sisa 20 ms pada gambar berasal dari pembulatan ke frame utuh. |
| Waktu adegan | Delapan interval visual mengikuti [storyboard](storyboard.md). Narasi melintasi potongan visual pada frame 90. |
| Komposisi lama | `MyComp` dan `MiningSafetyDemo` tetap terdaftar. Berkas skill yang terpasang dipertahankan. |

Kode proyek ada di [BatubaraSwabakar.tsx](BatubaraSwabakar.tsx), [StockpileScenes.tsx](StockpileScenes.tsx), dan [MonitoringScenes.tsx](MonitoringScenes.tsx). Registrasi ditambahkan di `src/Root.tsx`. WAV di `public/audio/VO_Batubara_Swabakar.wav` cocok secara bita dengan sumber pada commit `f6b953b`. Tipografi memakai Barlow Condensed Bold dan Barlow SemiBold lokal dengan lisensi SIL OFL di `public/fonts/batubara-swabakar/`. Pratinjau memakai narasi asli sebagai satu-satunya trek suara.

## Bukti pratinjau

| Frame | Bukti yang diperiksa |
| --- | --- |
| 0, 72, 89, 90 | Mulai dari siluet, kata kunci terpanjang pada pembuka, dan kontinuitas kamera melewati batas tiga detik |
| 218 | Skala timbunan dan frasa **TANPA PEMANTIK** |
| 416 | Judul **SWABAKAR** di atas penampang, kandidat sampul dari video |
| 596, 644 | Jalur O₂, label **OKSIGEN**, dan progresi **OKSIDASI** |
| 867 | Panah arah panas dan oksigen, tinggi serta tren tanpa angka |
| 1008, 1037, 1038 | Bara lokal dan potongan ke adegan kerja rutin |
| 1103, 1200 | Dozer, lalu lokasi pemantauan dengan APD dan indikator suhu |
| 1285, 1316 | Pelaporan melalui radio dan penahanan bingkai akhir |

Masuk ke Remotion Studio melalui `npm run dev` lalu pilih `BatubaraSwabakar`. Gunakan [lembar kontak](preview/contact-sheet.jpg) untuk menemukan frame ukuran penuh di `preview/stills/`. [Klip Gate B](preview/preview-360x640.webm) memakai 360 × 640 piksel, 30 fps, serta seluruh suara sumber.

Chrome Headless Shell bawaan Remotion gagal diunduh di lingkungan ini. PNG dan setiap frame klip diambil dari bundle Remotion melalui Chromium lokal. FFmpeg menyatukan rangkaian 1.317 frame dengan WAV sumber untuk klip peninjauan WebM.

## Subtitle sementara

[Data subtitle](subtitles.provisional.json) berisi 18 cue berbahasa Indonesia yang mengikuti transkripsi WAV dan rentang sementara di [analisis audio](audio-analysis.md). Cue mempertahankan «Curious.», «Serius.» dan «Boom! Api!». Bunyi yang belum teridentifikasi tetap terdengar pada WAV dan dibiarkan tanpa teks. Setiap cue menempati maksimal dua baris dengan panjang maksimum 32 karakter per baris. Urutan cue bebas tumpang tindih.

Komposisi dan klip pratinjau standar memakai kata kunci pendek. Aktifkan `showSubtitles` pada panel Props di Remotion Studio untuk meninjau lapisan subtitle. Bukti aktif tersedia pada frame 64, 218, 1020, dan 1297 di `preview/subtitles/`. Subtitle memakai Barlow SemiBold 44 px dan bidang hitam tipis di area bawah gambar di atas zona antarmuka.

## Pemeriksaan tata letak dan konteks keselamatan

Pemeriksaan mencakup PNG representatif, pengukuran batas huruf dari komposisi pada Chromium, dan pemeriksaan frame di sekitar potongan. Bidang aman yang dipakai adalah `x 88–900` dan `y 144–1520`. Frasa pembuka memakai dua baris yang disengaja. Bagian penutup menjaga posisi **PANTAU SUHU** saat **LAPORKAN** muncul. Label O₂ merupakan penanda kecil pada ilustrasi makro. Pengujian zona aman memakai panduan desain tersebut. Posisi antarmuka dapat bergeser menurut aplikasi dan perangkat.

| Uji | Hasil |
| --- | --- |
| Batas dan pertemuan teks | 1.317 frame dengan subtitle aktif dan 110 frame representatif pada mode standar. Semua batas huruf berada di area aman. Teks tampil tanpa tumpang tindih atau pemenggalan tak terencana. Waktu tampilan sesuai tabel cue sementara. |
| Kata kunci dan O₂ | Batas huruf kata kunci x 90–727, y 241–451. Label O₂ x 506–544, y 768–809. |
| Subtitle | Batas huruf x 172–816, y 1398–1491. Teks terbaca pada pemeriksaan visual versi 270 px lebar. Cue terpendek 0,70 detik dan laju baca tertinggi sekitar 20 karakter per detik. |
| Pemeriksaan kode | TypeScript, ESLint, pemeriksaan whitespace, dan bundle Remotion lulus. |

Ilustrasi memisahkan jalur O₂ dari pelepasan panas, menggunakan tren tanpa skala numerik, dan memperlihatkan bara lokal. Potongan pada frame 1038 berpindah langsung dari penampang panas ke timbunan rutin sehingga aktivitas dozer terbaca sebagai konteks pengelolaan. Pekerja dengan helm, kacamata pelindung, pelindung pendengaran dan rompi berada di area pemantauan tersendiri dengan radio. Status dan penerapan kewajiban pemadatan dalam narasi masih menjadi tinjauan K3 setempat. [Risiko teknis sumber](audio-analysis.md#risiko-teknis-untuk-tinjauan-k3)

## Risiko sinkronisasi

Titik ucap berasal dari ASR yang diperiksa silang dengan gelombang. Akurasi ucap per frame masih provisional. Batas subtitle pembuka yang singkat, bunyi sebelum «Sebagai», dan awal kalimat terakhir merupakan titik prioritas saat mendengar ulang. Frame 90 berada dekat awal kata «Tumpukan». Gerak gambar melanjutkan timbunan yang sama dan audio berjalan terus. Komposisi memakai satu trek WAV dari frame 0 agar waktu tiap potongan gambar tetap independen dari audio.

Pemeriksaan aset audio dalam bundle mencatat timestamp audio 0 pada frame 0 dan 3,000 detik pada frame 90. Frame terakhir hanya berisi 13,333 ms audio dari 43,866667 sampai 43,880000 detik, sesuai akhir WAV yang diukur dengan `ffprobe`.

`ffprobe` menghitung 1.317 frame video pada klip WebM dan durasi kontainer 43,900 detik. Audio hasil dekode berdurasi 43,880 detik. Perbandingan sinyal pada 12 rentang dari pembuka hingga ekor menghasilkan selisih waktu terukur 0 ms pada laju analisis 12 kHz.

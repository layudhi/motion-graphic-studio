# QA Gate C | Keselamatan Tangan dan Jari

Ekspor memakai komposisi `KeselamatanTanganRevisiKarakter` pada commit `af4b028496c5ea75563058109fe1cfc76a98a3b6`, sesuai pratinjau Gate B yang disetujui. Pohon berkas sumber yang sama tersedia pada merge `c72236f622cbda4be49eb149b7439eebc7d9d01b` di `main`. [Revisi Gate B](https://github.com/layudhi/motion-graphic-studio/tree/af4b028496c5ea75563058109fe1cfc76a98a3b6/deliverables/keselamatan-tangan-revisi-karakter)

| Berkas | Hasil verifikasi |
| --- | --- |
| `Keselamatan_Tangan_dan_Jari_Final.mp4` | H.264 High, 1080 × 1920, 9:16, 30 fps konstan, 1.980 frame, BT.709 dan yuv420p. Jalur video tepat 66,000 detik. |
| Audio MP4 | AAC-LC stereo 48 kHz. Awal stream di 0,000 detik. Padding AAC sebesar 256 sampel per kanal membuat kontainer terbaca 66,005 detik. Puncak padding −92,1 dBFS. True peak campuran sekitar −1,9 dBTP dan loudness −20,4 LUFS. |
| `Keselamatan_Tangan_dan_Jari_Final.srt` | UTF-8, 23 cue Bahasa Indonesia dengan batas 0,850–65,940 detik. Maksimal dua baris, lebar maksimum 37 karakter, dan laju baca puncak 20,54 karakter per detik. Pemeriksa SRT repositori lulus. |

WAV asli ditempatkan pada frame 0 dan memakai efek suara Gate B. Hasil decode AAC dibandingkan dengan WebM Gate B pada 23 jendela ujaran. Offset terukur 0 sampel pada setiap jendela. Korelasi seluruh program audio sebesar 0,99932.

Frasa dipetakan ke WAV dengan forced alignment Omnilingual CTC v2 dan diperiksa silang dengan transkripsi serta analisis waveform. Cue diberi jeda baca singkat pada hening yang terukur. Seluruh teks ujaran cocok dengan analisis Gate A setelah normalisasi tanda baca. Pemeriksaan ini berbasis data akustik. SRT tersedia sebagai jalur subtitle pilihan.

Sampel gambar diambil dari MP4 hasil encode pada frame 45, 90, 264, 565, 748, 872, 1058, 1257, 1601, 1602, 1872, 1958, dan 1979. Pemeriksaan mencakup keterbacaan judul, APD, tangan di luar zona jepit, pegangan ratchet, peralihan ke pelukan, dan penutup. Decode penuh FFmpeg selesai tanpa kesalahan.

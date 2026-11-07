# Atlas Desa Kembaran

Website Desa Kembaran (Kec. Kalikajar, Kab. Wonosobo, Jawa Tengah) berbasis
React + TypeScript + Vite. Tampilan mengikuti desain **Atlas Kembaran (Arah Baru)**
dan sudah responsif untuk desktop, tablet, dan ponsel.

## Menjalankan

```bash
npm install
npm run dev       # pengembangan
npm run build     # build produksi ke folder dist/
npm run preview   # coba hasil build
```

## Mengisi konten — semua ada di `src/data/desa.ts`

Teks bertanda `[KURUNG SIKU]` adalah placeholder dari desain. Ganti dengan data asli desa:

| Bagian | Yang diisi |
| --- | --- |
| `DESA` | alamat kantor, telepon, email, **nomor WhatsApp desa** (format `6281234567890`) |
| `STAT_HERO`, `PROFIL`, `MATA_PENCAHARIAN`, `PENDIDIKAN_KESEHATAN` | angka profil desa |
| `TITIK` | nama, alamat, jam, kontak tiap titik di peta |
| `PRODUK` | produk Lapak Desa (nama, penjual, dusun, harga, kategori, WhatsApp penjual) |
| `PEMBANGUNAN` | kegiatan, lokasi, sumber dana, anggaran, status, progres |
| `GALERI`, `FASILITAS`, `SARAN_AWAL` | galeri, deskripsi fasilitas, contoh saran |

Setelah semua terisi, ubah `MODE_CONTOH` menjadi `false` agar catatan
"tampilan contoh" ikut hilang.

### Memasang foto

Taruh foto di folder `public/foto/`, lalu isi field `foto` di data, misalnya
`foto: '/foto/keripik-singkong.jpg'`. Selama `foto` kosong, kotak berwarna
placeholder tetap tampil. Gunakan foto yang sudah dikompres (maks. ±300 KB) agar halaman ringan.

### Bagian GALERI

Susunan kotak galeri sengaja berjumlah 12 sel (4 kolom × 3 baris) agar rapat tanpa celah.
Jika mengubah ukuran kotak, usahakan total `kolom × baris` kelipatan 4.

## Catatan teknis

- **Saran warga** saat ini disimpan di `localStorage` peramban pengunjung (belum ada server),
  sehingga hanya terlihat di perangkat yang mengirim. Untuk penggunaan nyata, sambungkan
  fungsi `kirim` di `src/components/SaranSection.tsx` ke backend / Google Form / Firebase.
- **Peta** adalah peta ilustrasi (SVG). Posisi pin diatur lewat `x` dan `y` (persen) di `TITIK`.
  Tombol "Lihat rute" membuka pencarian Google Maps.
- **Font** (Fraunces, Plus Jakarta Sans, Space Grotesk) dimuat dari Google Fonts di `index.html`.
  Jika lokasi lomba berisiko tanpa internet, pasang font secara lokal (mis. paket `@fontsource`).
- Aksesibilitas: tautan lompat ke konten, fokus keyboard terlihat, `aria` pada filter/peta/form,
  dan animasi dimatikan untuk pengguna dengan `prefers-reduced-motion`.

## Struktur

```
src/
  data/desa.ts        ← seluruh konten desa
  hooks/              ← useActiveSection, useInView
  components/         ← Navbar, Hero, Peta, Data, Lapak, Pembangunan,
                        Galeri, Fasilitas, Saran, Footer (+ CSS masing-masing)
  index.css           ← token warna, tipografi, tata letak global
  App.tsx
```

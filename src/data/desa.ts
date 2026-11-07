/**
 * ============================================================
 *  DATA DESA KEMBARAN — ISI SEMUA KONTEN DI FILE INI
 * ============================================================
 *  Semua teks bertanda [KURUNG SIKU] adalah placeholder dari
 *  desain. Ganti dengan data asli desa, lalu ubah MODE_CONTOH
 *  menjadi `false` agar catatan "tampilan contoh" ikut hilang.
 */

/** true = tampilkan catatan "ini contoh / ganti dengan data asli". */
export const MODE_CONTOH = true

/* ---------------------------------------------------------- */
/*  Identitas & kontak                                         */
/* ---------------------------------------------------------- */

export const DESA = {
  nama: 'Kembaran',
  lokasi: 'Kec. Kalikajar · Kab. Wonosobo · Jawa Tengah',
  alamatLengkap:
    'Pemerintah Desa Kembaran, Kecamatan Kalikajar, Kabupaten Wonosobo, Jawa Tengah.',
  kontak: {
    alamat: '[Alamat kantor desa]',
    telepon: '[Telepon / WhatsApp]',
    email: '[Email resmi]',
  },
  /** Nomor WhatsApp desa, format internasional tanpa + (contoh: 6281234567890). Kosong = pilih kontak sendiri. */
  whatsapp: '',
} as const

export function linkWhatsApp(nomor: string, pesan: string): string {
  const base = nomor ? `https://wa.me/${nomor}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(pesan)}`
}

/* ---------------------------------------------------------- */
/*  Navigasi                                                   */
/* ---------------------------------------------------------- */

export const MENU = [
  { id: 'peta', label: 'Peta' },
  { id: 'data', label: 'Data' },
  { id: 'lapak', label: 'Lapak' },
  { id: 'pembangunan', label: 'Pembangunan' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'saran', label: 'Saran' },
] as const

/* ---------------------------------------------------------- */
/*  Ringkasan di hero                                          */
/* ---------------------------------------------------------- */

export const STAT_HERO = [
  { label: 'Penduduk', nilai: '[XX]' },
  { label: 'Kepala keluarga', nilai: '[XX]' },
  { label: 'Dusun', nilai: '[XX]' },
  { label: 'RT / RW', nilai: '[XX]' },
  { label: 'Luas (ha)', nilai: '[XX]' },
]

/* ---------------------------------------------------------- */
/*  Peta wilayah                                               */
/* ---------------------------------------------------------- */

export type JenisTitik = 'puskesmas' | 'pasar' | 'sekolah' | 'lapangan' | 'balai'
export type LapisanPeta = 'semua' | JenisTitik

export const JENIS_TITIK: Record<JenisTitik, { label: string; warna: string }> = {
  puskesmas: { label: 'Puskesmas', warna: '#C4572E' },
  pasar: { label: 'Pasar', warna: '#E3A72F' },
  sekolah: { label: 'Sekolah', warna: '#6B8F5E' },
  lapangan: { label: 'Lapangan sepakbola', warna: '#7FA6C4' },
  balai: { label: 'Balai desa', warna: '#F3EEE2' },
}

export interface Titik {
  id: string
  jenis: JenisTitik
  nama: string
  /** Posisi pin di peta ilustrasi, dalam persen. */
  x: number
  y: number
  alamat: string
  jam: string
  kontak: string
}

export const TITIK: Titik[] = [
  {
    id: 'puskesmas',
    jenis: 'puskesmas',
    nama: '[Nama Puskesmas / Pustu]',
    x: 28,
    y: 62,
    alamat: '[Alamat / dusun]',
    jam: '[Jam buka]',
    kontak: '[Kontak]',
  },
  {
    id: 'pasar',
    jenis: 'pasar',
    nama: '[Nama Pasar]',
    x: 52,
    y: 46,
    alamat: '[Alamat / dusun]',
    jam: '[Jam buka]',
    kontak: '[Kontak]',
  },
  {
    id: 'sekolah',
    jenis: 'sekolah',
    nama: '[Nama Sekolah]',
    x: 70,
    y: 66,
    alamat: '[Alamat / dusun]',
    jam: '[Jam buka]',
    kontak: '[Kontak]',
  },
  {
    id: 'lapangan',
    jenis: 'lapangan',
    nama: '[Nama Lapangan Sepakbola]',
    x: 42,
    y: 80,
    alamat: '[Alamat / dusun]',
    jam: '[Jam pemakaian]',
    kontak: '[Kontak]',
  },
  {
    id: 'balai',
    jenis: 'balai',
    nama: 'Balai Desa Kembaran',
    x: 60,
    y: 30,
    alamat: '[Alamat / dusun]',
    jam: '[Jam pelayanan]',
    kontak: '[Kontak]',
  },
]

export const LAPISAN: { id: LapisanPeta; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'puskesmas', label: 'Puskesmas' },
  { id: 'pasar', label: 'Pasar' },
  { id: 'sekolah', label: 'Sekolah' },
  { id: 'lapangan', label: 'Lapangan' },
  { id: 'balai', label: 'Balai desa' },
]

/** Tautan pencarian Google Maps untuk tombol "Lihat rute". */
export function linkRute(t: Titik): string {
  const kueri = `${JENIS_TITIK[t.jenis].label} Desa Kembaran Kalikajar Wonosobo`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kueri)}`
}

/* ---------------------------------------------------------- */
/*  Data wilayah                                               */
/* ---------------------------------------------------------- */

export const PROFIL = {
  penduduk: { angka: '[XXXX]', ket: 'jiwa · [XXX] kepala keluarga · data [TAHUN]' },
  luas: { angka: '[XXX] ha', ket: '[XXX] mdpl · [X] dusun · [X] RW · [X] RT' },
  batas: '[Desa batas U / T / S / B]',
}

/** `persen` = panjang batang (0–100). `label` = teks yang tampil. */
export const MATA_PENCAHARIAN = [
  { nama: 'Pertanian', persen: 60, label: '[XX]%', warna: '#6B8F5E' },
  { nama: 'Perdagangan', persen: 30, label: '[XX]%', warna: '#E3A72F' },
  { nama: 'Jasa', persen: 22, label: '[XX]%', warna: '#C4572E' },
  { nama: 'Lainnya', persen: 14, label: '[XX]%', warna: '#7FA6C4' },
]

export const PENDIDIKAN_KESEHATAN = [
  { label: 'Sekolah', nilai: '[X]' },
  { label: 'Puskesmas / Pustu', nilai: '[X]' },
  { label: 'Posyandu', nilai: '[X]' },
  { label: 'Tempat ibadah', nilai: '[X]' },
]

/* ---------------------------------------------------------- */
/*  Lapak desa                                                 */
/* ---------------------------------------------------------- */

export const KATEGORI_LAPAK = [
  'Semua',
  'Makanan olahan',
  'Kerajinan',
  'Hasil tani',
  'Jasa',
] as const
export type KategoriLapak = (typeof KATEGORI_LAPAK)[number]

export interface Produk {
  id: string
  kategori: Exclude<KategoriLapak, 'Semua'>
  nama: string
  penjual: string
  dusun: string
  harga: string
  /** Latar placeholder. Dipakai selama `foto` belum diisi. */
  latar: string
  /** Isi dengan path foto (mis. '/foto/keripik.jpg' di folder public/). */
  foto?: string
  /** Nomor WhatsApp penjual (628...). Kosong = memakai nomor desa. */
  whatsapp?: string
}

export const PRODUK: Produk[] = [
  {
    id: 'p1',
    kategori: 'Makanan olahan',
    nama: '[Nama produk]',
    penjual: '[Nama pelaku usaha]',
    dusun: '[X]',
    harga: '[Rp ...]',
    latar: 'linear-gradient(135deg,#E3A72F,#C4572E)',
  },
  {
    id: 'p2',
    kategori: 'Hasil tani',
    nama: '[Nama produk]',
    penjual: '[Nama pelaku usaha]',
    dusun: '[X]',
    harga: '[Rp ...]',
    latar: 'linear-gradient(135deg,#9FB99A,#1F4D3A)',
  },
  {
    id: 'p3',
    kategori: 'Kerajinan',
    nama: '[Nama produk]',
    penjual: '[Nama pelaku usaha]',
    dusun: '[X]',
    harga: '[Rp ...]',
    latar: 'linear-gradient(135deg,#7FA6C4,#DCE5DA)',
  },
  {
    id: 'p4',
    kategori: 'Makanan olahan',
    nama: '[Nama produk]',
    penjual: '[Nama pelaku usaha]',
    dusun: '[X]',
    harga: '[Rp ...]',
    latar: 'linear-gradient(135deg,#C4572E,#E3A72F)',
  },
]

/* ---------------------------------------------------------- */
/*  Pembangunan                                                */
/* ---------------------------------------------------------- */

export type StatusBangun = 'Selesai' | 'Berjalan' | 'Direncanakan'

export interface Kegiatan {
  id: string
  nama: string
  lokasi: string
  sumberDana: string
  anggaran: string
  status: StatusBangun
  /** Panjang batang progres (0–100). */
  progres: number
  progresLabel: string
}

export const PEMBANGUNAN: Kegiatan[] = [
  {
    id: 'b1',
    nama: '[Nama kegiatan pembangunan]',
    lokasi: '[Dusun X]',
    sumberDana: '[Dana Desa / lainnya]',
    anggaran: '[Rp ...]',
    status: 'Selesai',
    progres: 100,
    progresLabel: '[XX]%',
  },
  {
    id: 'b2',
    nama: '[Nama kegiatan pembangunan]',
    lokasi: '[Dusun X]',
    sumberDana: '[Dana Desa / lainnya]',
    anggaran: '[Rp ...]',
    status: 'Berjalan',
    progres: 64,
    progresLabel: '[XX]%',
  },
  {
    id: 'b3',
    nama: '[Nama kegiatan pembangunan]',
    lokasi: '[Dusun X]',
    sumberDana: '[Dana Desa / lainnya]',
    anggaran: '[Rp ...]',
    status: 'Berjalan',
    progres: 38,
    progresLabel: '[XX]%',
  },
  {
    id: 'b4',
    nama: '[Nama kegiatan pembangunan]',
    lokasi: '[Dusun X]',
    sumberDana: '[Dana Desa / lainnya]',
    anggaran: '[Rp ...]',
    status: 'Direncanakan',
    progres: 6,
    progresLabel: '[XX]%',
  },
]

/* ---------------------------------------------------------- */
/*  Galeri                                                     */
/* ---------------------------------------------------------- */

export interface FotoGaleri {
  id: string
  keterangan: string
  latar: string
  /** Lebar & tinggi kotak dalam satuan grid. */
  kolom: 1 | 2
  baris: 1 | 2
  /** Isi dengan path foto di folder public/ (mis. '/foto/panorama.jpg'). */
  foto?: string
}

/**
 * Susunan kotak ini sengaja berjumlah 12 sel (grid 4 kolom × 3 baris) sehingga rapat tanpa celah.
 * Jika menambah/mengubah ukuran, usahakan total (kolom × baris) kelipatan 4.
 */
export const GALERI: FotoGaleri[] = [
  { id: 'g1', keterangan: 'Panorama desa', latar: 'linear-gradient(135deg,#9FB99A,#1F4D3A)', kolom: 2, baris: 2 },
  { id: 'g2', keterangan: 'Kegiatan warga', latar: 'linear-gradient(135deg,#E3A72F,#C4572E)', kolom: 1, baris: 1 },
  { id: 'g3', keterangan: 'Pasar', latar: 'linear-gradient(135deg,#C4572E,#E3A72F)', kolom: 1, baris: 2 },
  { id: 'g4', keterangan: 'Sekolah', latar: 'linear-gradient(135deg,#7FA6C4,#DCE5DA)', kolom: 1, baris: 1 },
  { id: 'g5', keterangan: 'Lapangan', latar: 'linear-gradient(135deg,#6B8F5E,#DCE5DA)', kolom: 2, baris: 1 },
  { id: 'g6', keterangan: 'Pembangunan', latar: 'linear-gradient(135deg,#DCE5DA,#9FB99A)', kolom: 1, baris: 1 },
  { id: 'g7', keterangan: 'Lapak desa', latar: 'linear-gradient(135deg,#E3A72F,#9FB99A)', kolom: 1, baris: 1 },
]

/* ---------------------------------------------------------- */
/*  Fasilitas umum                                             */
/* ---------------------------------------------------------- */

export interface Fasilitas {
  jenis: JenisTitik
  judul: string
  deskripsi: string
  bg: string
  fg: string
  chip: string
  /** Path SVG ikon (viewBox 24×24). */
  ikon: string
}

export const FASILITAS: Fasilitas[] = [
  {
    jenis: 'puskesmas',
    judul: 'Puskesmas',
    deskripsi: 'Layanan kesehatan dasar untuk warga. [Jam layanan dan poli diisi].',
    bg: '#C4572E',
    fg: '#F3EEE2',
    chip: '#d77a56',
    ikon: 'M12 5v14M5 12h14M4 4h16v16H4z',
  },
  {
    jenis: 'pasar',
    judul: 'Pasar',
    deskripsi: 'Pusat jual beli hasil tani dan olahan warga. [Hari pasar diisi].',
    bg: '#E3A72F',
    fg: '#1B2A22',
    chip: '#f0c05a',
    ikon: 'M4 9l2-5h12l2 5M4 9h16v11H4zM9 20v-6h6v6',
  },
  {
    jenis: 'sekolah',
    judul: 'Sekolah',
    deskripsi: 'Tempat anak-anak Kembaran belajar. [Daftar sekolah diisi].',
    bg: '#1F4D3A',
    fg: '#F3EEE2',
    chip: '#2c6a50',
    ikon: 'M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5',
  },
  {
    jenis: 'lapangan',
    judul: 'Lapangan sepakbola',
    deskripsi: 'Ruang olahraga dan acara desa. [Jadwal pemakaian diisi].',
    bg: '#7FA6C4',
    fg: '#0F1D17',
    chip: '#a8c4da',
    ikon: 'M3 6h18v12H3zM12 6v12M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  },
]

/* ---------------------------------------------------------- */
/*  Saran warga                                                */
/* ---------------------------------------------------------- */

export const KATEGORI_SARAN = ['Pembangunan', 'Pelayanan', 'Lingkungan', 'Lainnya'] as const
export type KategoriSaran = (typeof KATEGORI_SARAN)[number]
export type StatusSaran = 'Baru' | 'Diproses' | 'Ditanggapi'

export interface Saran {
  id: string
  kategori: string
  status: StatusSaran
  isi: string
  nama: string
  tanggal: string
  tanggapan: string
}

/** Contoh awal. Ganti dengan saran asli, atau hubungkan ke backend. */
export const SARAN_AWAL: Saran[] = [
  {
    id: 's1',
    kategori: 'Pembangunan',
    status: 'Ditanggapi',
    isi: '[Isi saran warga ditampilkan di sini]',
    nama: '[Nama atau anonim]',
    tanggal: '[Tanggal]',
    tanggapan: '[ISI]',
  },
  {
    id: 's2',
    kategori: 'Lingkungan',
    status: 'Diproses',
    isi: '[Isi saran warga ditampilkan di sini]',
    nama: '[Nama atau anonim]',
    tanggal: '[Tanggal]',
    tanggapan: '[ISI]',
  },
  {
    id: 's3',
    kategori: 'Pelayanan',
    status: 'Baru',
    isi: '[Isi saran warga ditampilkan di sini]',
    nama: '[Nama atau anonim]',
    tanggal: '[Tanggal]',
    tanggapan: '[ISI]',
  },
]

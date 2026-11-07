import { useState, type FormEvent } from 'react'
import {
  KATEGORI_SARAN,
  SARAN_AWAL,
  type KategoriSaran,
  type Saran,
  type StatusSaran,
} from '../data/desa'
import SectionHead from './SectionHead'
import './SaranSection.css'

const KUNCI = 'kembaran:saran-warga'
const MAKS_TAMPIL = 5
const MIN_HURUF = 10

const KELAS_STATUS: Record<StatusSaran, string> = {
  Baru: 'baru',
  Diproses: 'diproses',
  Ditanggapi: 'ditanggapi',
}

function muatTersimpan(): Saran[] {
  try {
    const mentah = localStorage.getItem(KUNCI)
    if (!mentah) return []
    const data: unknown = JSON.parse(mentah)
    return Array.isArray(data) ? (data as Saran[]) : []
  } catch {
    return []
  }
}

function simpan(daftar: Saran[]) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(daftar))
  } catch {
    /* penyimpanan tidak tersedia; saran tetap tampil selama halaman terbuka */
  }
}

export default function SaranSection() {
  const [kiriman, setKiriman] = useState<Saran[]>(muatTersimpan)
  const [nama, setNama] = useState('')
  const [kategori, setKategori] = useState<KategoriSaran>('Pembangunan')
  const [isi, setIsi] = useState('')
  const [galat, setGalat] = useState('')
  const [berhasil, setBerhasil] = useState(false)

  const daftar = [...kiriman, ...SARAN_AWAL].slice(0, MAKS_TAMPIL)

  const kirim = (e: FormEvent) => {
    e.preventDefault()
    const teks = isi.trim()
    if (teks.length < MIN_HURUF) {
      setBerhasil(false)
      setGalat(`Tulis saran minimal ${MIN_HURUF} huruf agar bisa ditindaklanjuti.`)
      return
    }
    const baru: Saran = {
      id: `k${Date.now()}`,
      kategori,
      status: 'Baru',
      isi: teks,
      nama: nama.trim() || 'Anonim',
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      tanggapan: 'belum ada',
    }
    const berikut = [baru, ...kiriman]
    setKiriman(berikut)
    simpan(berikut)
    setNama('')
    setIsi('')
    setGalat('')
    setBerhasil(true)
  }

  return (
    <section id="saran" className="sec sec--terra saran" aria-labelledby="judul-saran">
      <div className="saran__grid">
        <div className="saran__kiri">
          <SectionHead nomor="07" label="Saran warga" id="judul-saran">
            Suara Anda membentuk desa.
          </SectionHead>
          <p className="saran__lead">
            Sampaikan usul, keluhan, atau ide. Setiap saran dicatat, diberi status, dan
            ditanggapi terbuka.
          </p>

          <form className="saran__form" onSubmit={kirim} noValidate>
            <div className="saran__field">
              <label htmlFor="s-nama">Nama (boleh dikosongkan)</label>
              <input
                id="s-nama"
                type="text"
                autoComplete="name"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="saran__field">
              <label htmlFor="s-kat">Kategori</label>
              <select
                id="s-kat"
                value={kategori}
                onChange={(e) => setKategori(e.target.value as KategoriSaran)}
              >
                {KATEGORI_SARAN.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div className="saran__field">
              <label htmlFor="s-isi">Saran Anda</label>
              <textarea
                id="s-isi"
                rows={4}
                value={isi}
                aria-invalid={galat ? true : undefined}
                aria-describedby={galat ? 's-galat' : undefined}
                onChange={(e) => setIsi(e.target.value)}
              />
              {galat && (
                <p id="s-galat" className="saran__galat" role="alert">
                  {galat}
                </p>
              )}
            </div>
            <button type="submit" className="saran__kirim">
              Kirim saran
            </button>
            {berhasil && (
              <p className="saran__sukses" role="status">
                Terima kasih. Saran Anda sudah dicatat dengan status “Baru” dan muncul di
                daftar saran terbaru.
              </p>
            )}
          </form>
        </div>

        <div className="saran__kanan">
          <h3 className="saran__judul-daftar">Saran terbaru</h3>
          {daftar.map((s) => (
            <article key={s.id} className="saran__kartu">
              <div className="saran__atas">
                <span className="saran__kat">{s.kategori}</span>
                <span className={`saran__status saran__status--${KELAS_STATUS[s.status]}`}>
                  {s.status}
                </span>
              </div>
              <p className="saran__isi">{s.isi}</p>
              <span className="saran__meta">
                {s.nama} · {s.tanggal} · Tanggapan desa: {s.tanggapan}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

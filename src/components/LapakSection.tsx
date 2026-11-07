import { useState } from 'react'
import {
  DESA,
  KATEGORI_LAPAK,
  PRODUK,
  linkWhatsApp,
  type KategoriLapak,
} from '../data/desa'
import SectionHead from './SectionHead'
import './LapakSection.css'

export default function LapakSection() {
  const [kategori, setKategori] = useState<KategoriLapak>('Semua')
  const tampil = PRODUK.filter((p) => kategori === 'Semua' || p.kategori === kategori)

  return (
    <section id="lapak" className="sec sec--forest lapak" aria-labelledby="judul-lapak">
      <div className="lapak__kepala">
        <div>
          <SectionHead nomor="03" label="Lapak desa" id="judul-lapak">
            Dari tangan warga, langsung ke tangan Anda.
          </SectionHead>
        </div>
        <button
          type="button"
          className="lapak__semua"
          onClick={() => setKategori('Semua')}
        >
          Buka semua produk →
        </button>
      </div>

      <div className="lapak__kategori" role="group" aria-label="Filter kategori produk">
        {KATEGORI_LAPAK.map((k) => (
          <button
            key={k}
            type="button"
            className="lapak__chip"
            aria-pressed={kategori === k}
            onClick={() => setKategori(k)}
          >
            {k}
          </button>
        ))}
      </div>

      {tampil.length === 0 ? (
        <p className="lapak__kosong" role="status">
          Belum ada produk di kategori {kategori}. Pilih kategori lain untuk melihat produk warga.
        </p>
      ) : (
        <div className="lapak__grid" aria-live="polite">
          {tampil.map((p) => (
            <article key={p.id} className="lapak__kartu">
              <div className="lapak__foto" style={{ background: p.latar }}>
                {p.foto && <img src={p.foto} alt={`Foto ${p.nama}`} loading="lazy" />}
                <span className="lapak__tag">{p.kategori}</span>
                {!p.foto && <span className="lapak__placeholder">[FOTO PRODUK]</span>}
              </div>
              <div className="lapak__isi">
                <h3 className="lapak__nama">{p.nama}</h3>
                <span className="lapak__penjual">
                  oleh {p.penjual} · Dusun {p.dusun}
                </span>
                <div className="lapak__baris">
                  <span className="lapak__harga">{p.harga}</span>
                  <a
                    className="lapak__pesan"
                    href={linkWhatsApp(
                      p.whatsapp ?? DESA.whatsapp,
                      `Halo, saya tertarik memesan ${p.nama} dari Lapak Desa Kembaran.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan WhatsApp
                    <span className="sr-only"> untuk {p.nama} (membuka WhatsApp di tab baru)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

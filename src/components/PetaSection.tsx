import {
  JENIS_TITIK,
  LAPISAN,
  MODE_CONTOH,
  TITIK,
  linkRute,
  type LapisanPeta,
} from '../data/desa'
import SectionHead from './SectionHead'
import './PetaSection.css'

interface Props {
  lapisan: LapisanPeta
  terpilih: string
  onLapisan: (l: LapisanPeta) => void
  onPilih: (id: string) => void
}

export default function PetaSection({ lapisan, terpilih, onLapisan, onPilih }: Props) {
  const cur = TITIK.find((t) => t.id === terpilih) ?? TITIK[0]
  const info = JENIS_TITIK[cur.jenis]
  const warnaLabel = info.warna === '#F3EEE2' ? '#E3A72F' : info.warna

  return (
    <section id="peta" className="sec sec--cream peta" aria-labelledby="judul-peta">
      <div className="sec-head">
        <SectionHead nomor="01" label="Peta wilayah" id="judul-peta">
          Semua tempat penting, satu peta.
        </SectionHead>
      </div>

      <div className="peta__grid">
        <div className="peta__panel">
          <div className="peta__filter" role="group" aria-label="Filter lapisan peta">
            {LAPISAN.map((l) => (
              <button
                key={l.id}
                type="button"
                className="peta__chip"
                aria-pressed={lapisan === l.id}
                onClick={() => onLapisan(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="peta__info" aria-live="polite">
            <span className="peta__info-jenis" style={{ color: warnaLabel }}>
              {info.label}
            </span>
            <span className="peta__info-nama">{cur.nama}</span>
            <span className="peta__info-detail">
              {cur.alamat}
              <br />
              {cur.jam}
              <br />
              {cur.kontak}
            </span>
            <a
              href={linkRute(cur)}
              target="_blank"
              rel="noopener noreferrer"
              className="peta__rute"
            >
              Lihat rute →<span className="sr-only"> (membuka Google Maps di tab baru)</span>
            </a>
          </div>
        </div>

        <div className="peta__kanvas" role="group" aria-label="Peta ilustrasi Desa Kembaran">
          <svg
            aria-hidden="true"
            viewBox="0 0 800 560"
            preserveAspectRatio="none"
            className="peta__gambar"
          >
            <g fill="none" stroke="#B9C7B4" strokeWidth="1.6">
              <path d="M60 460c40-170 200-300 360-290s280 100 340 250" />
              <path d="M120 470c40-130 160-220 290-212s220 80 270 190" />
              <path d="M180 480c36-92 120-150 220-144s170 54 206 130" />
              <path d="M240 490c30-56 86-84 160-80s126 34 150 80" />
            </g>
            <path
              d="M0 150C140 110 260 190 400 150S660 90 800 140"
              fill="none"
              stroke="#7FA6C4"
              strokeWidth="14"
              strokeLinecap="round"
              opacity=".6"
            />
            <g fill="none" stroke="#F3EEE2" strokeWidth="7" strokeLinecap="round">
              <path d="M70 330C200 300 300 380 420 340S640 300 760 360" />
              <path d="M420 340C430 420 470 480 500 560" />
            </g>
            <g
              fill="none"
              stroke="#1B2A22"
              strokeWidth="1.4"
              strokeDasharray="6 6"
              opacity=".4"
            >
              <path d="M30 40L770 30L760 520L40 530z" />
            </g>
          </svg>

          {TITIK.map((t) => {
            const aktif = lapisan === 'semua' || lapisan === t.jenis
            const dipilih = terpilih === t.id
            return (
              <button
                key={t.id}
                type="button"
                className={`peta__pin${dipilih ? ' is-dipilih' : ''}${aktif ? '' : ' is-redup'}`}
                style={{ left: `${t.x}%`, top: `${t.y}%` }}
                aria-label={`${JENIS_TITIK[t.jenis].label}: ${t.nama}`}
                aria-pressed={dipilih}
                disabled={!aktif}
                title={t.nama}
                onClick={() => onPilih(t.id)}
              >
                <svg width="48" height="56" viewBox="0 0 48 56" aria-hidden="true">
                  <path
                    d="M24 54C24 54 6 34 6 22a18 18 0 0 1 36 0c0 12-18 32-18 32z"
                    fill={JENIS_TITIK[t.jenis].warna}
                    stroke={dipilih ? '#0F1D17' : '#F3EEE2'}
                    strokeWidth={dipilih ? 4 : 2}
                  />
                  <circle cx="24" cy="22" r="7" fill="#0F1D17" />
                </svg>
              </button>
            )
          })}

          <div className="peta__catatan">
            {MODE_CONTOH ? 'Peta ilustrasi · ganti dengan peta wilayah resmi' : 'Peta ilustrasi'}
          </div>

          <div className="peta__utara">
            <svg width="36" height="36" viewBox="0 0 36 36" role="img" aria-label="Arah utara">
              <path d="M18 3l7 16H11z" fill="#C4572E" />
              <path d="M18 33l-7-14h14z" fill="#1B2A22" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

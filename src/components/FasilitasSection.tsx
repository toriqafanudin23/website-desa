import { FASILITAS, type JenisTitik } from '../data/desa'
import SectionHead from './SectionHead'
import './FasilitasSection.css'

interface Props {
  onLihatDiPeta: (jenis: JenisTitik) => void
}

export default function FasilitasSection({ onLihatDiPeta }: Props) {
  return (
    <section
      id="fasilitas"
      className="sec sec--cream fasilitas"
      aria-labelledby="judul-fasilitas"
    >
      <div className="sec-head">
        <SectionHead nomor="06" label="Fasilitas umum" id="judul-fasilitas">
          Puskesmas, pasar, sekolah, dan lapangan.
        </SectionHead>
      </div>

      <div className="fasilitas__grid">
        {FASILITAS.map((f) => (
          <article
            key={f.jenis}
            className="fasilitas__kartu"
            style={{ background: f.bg, color: f.fg }}
          >
            <span className="fasilitas__ikon" style={{ background: f.chip }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={f.fg}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={f.ikon} />
              </svg>
            </span>
            <h3 className="fasilitas__judul">{f.judul}</h3>
            <p className="fasilitas__desk">{f.deskripsi}</p>
            <button
              type="button"
              className="fasilitas__peta"
              style={{ color: f.fg }}
              onClick={() => onLihatDiPeta(f.jenis)}
            >
              Lihat di peta →<span className="sr-only"> {f.judul}</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

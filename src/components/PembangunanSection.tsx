import { MODE_CONTOH, PEMBANGUNAN, type StatusBangun } from '../data/desa'
import { useInView } from '../hooks/useInView'
import SectionHead from './SectionHead'
import './PembangunanSection.css'

const KELAS_STATUS: Record<StatusBangun, string> = {
  Selesai: 'selesai',
  Berjalan: 'berjalan',
  Direncanakan: 'rencana',
}

export default function PembangunanSection() {
  const [ref, terlihat] = useInView<HTMLOListElement>(0.2)

  return (
    <section
      id="pembangunan"
      className="sec sec--cream bangun"
      aria-labelledby="judul-bangun"
    >
      <div className="sec-head sec-head--lebar">
        <SectionHead nomor="04" label="Pembangunan" id="judul-bangun">
          Apa yang sedang dibangun, sampai mana.
        </SectionHead>
      </div>

      <ol className="bangun__daftar" ref={ref}>
        {PEMBANGUNAN.map((b, i) => (
          <li key={b.id} className="bangun__baris">
            <span className="bangun__nomor" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="bangun__teks">
              <h3 className="bangun__nama">{b.nama}</h3>
              <p className="bangun__meta">
                Lokasi {b.lokasi} · Sumber dana {b.sumberDana} · Anggaran {b.anggaran}
              </p>
            </div>
            <span className={`bangun__status bangun__status--${KELAS_STATUS[b.status]}`}>
              {b.status}
            </span>
            <div className="bangun__progres">
              <div
                className="bangun__jalur"
                role="img"
                aria-label={`Progres ${b.progresLabel}`}
              >
                <div
                  className="bangun__isi"
                  style={{
                    width: terlihat ? `${b.progres}%` : '0%',
                    transitionDelay: `${i * 0.12}s`,
                  }}
                />
              </div>
              <p className="bangun__label">
                Progres {b.progresLabel}
                {MODE_CONTOH ? ' · tampilan contoh' : ''}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

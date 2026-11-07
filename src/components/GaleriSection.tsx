import { GALERI, MODE_CONTOH } from '../data/desa'
import SectionHead from './SectionHead'
import './GaleriSection.css'

export default function GaleriSection() {
  return (
    <section id="galeri" className="sec sec--ink galeri" aria-labelledby="judul-galeri">
      <div className="sec-head">
        <SectionHead nomor="05" label="Galeri" id="judul-galeri">
          Kembaran lewat lensa warga.
        </SectionHead>
      </div>

      <div className="galeri__grid">
        {GALERI.map((g) => (
          <figure
            key={g.id}
            className="galeri__foto"
            style={{
              background: g.latar,
              gridColumn: `span ${g.kolom}`,
              gridRow: `span ${g.baris}`,
            }}
          >
            {g.foto && <img src={g.foto} alt={g.keterangan} loading="lazy" />}
            <figcaption className="galeri__ket">
              {g.foto ? g.keterangan : `[FOTO · ${g.keterangan}]`}
            </figcaption>
          </figure>
        ))}
      </div>

      {MODE_CONTOH && (
        <p className="galeri__catatan">
          Kotak berwarna adalah tempat foto. Foto asli dari galeri desa akan dipasang di sini.
        </p>
      )}
    </section>
  )
}

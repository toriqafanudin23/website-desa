import {
  MATA_PENCAHARIAN,
  MODE_CONTOH,
  PENDIDIKAN_KESEHATAN,
  PROFIL,
} from '../data/desa'
import { useInView } from '../hooks/useInView'
import SectionHead from './SectionHead'
import './DataSection.css'

export default function DataSection() {
  const [refKerja, kerjaTerlihat] = useInView<HTMLDivElement>(0.3)

  return (
    <section id="data" className="sec sec--cream sec--joined data" aria-labelledby="judul-data">
      <div className="sec-head">
        <SectionHead nomor="02" label="Data wilayah" id="judul-data">
          Desa dalam angka.
        </SectionHead>
      </div>

      <div className="data__grid">
        <div className="data__kartu data__penduduk">
          <span className="data__label data__label--amber">Penduduk</span>
          <span className="data__angka data__angka--besar">{PROFIL.penduduk.angka}</span>
          <span className="data__ket">{PROFIL.penduduk.ket}</span>
        </div>

        <div className="data__kartu data__luas">
          <span className="data__label">Luas dan ketinggian</span>
          <span className="data__angka data__angka--sedang">{PROFIL.luas.angka}</span>
          <span className="data__ket">{PROFIL.luas.ket}</span>
        </div>

        <div className="data__kartu data__batas">
          <span className="data__label data__label--muted">Batas wilayah</span>
          <svg width="150" height="150" viewBox="0 0 150 150" role="img" aria-label="Kompas batas wilayah">
            <circle cx="75" cy="75" r="60" fill="none" stroke="#1B2A22" strokeWidth="1.5" />
            <path d="M75 20l8 55H67z" fill="#C4572E" />
            <path d="M75 130l-8-55h16z" fill="#1B2A22" />
            <text x="75" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1B2A22">U</text>
            <text x="75" y="146" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1B2A22">S</text>
            <text x="142" y="79" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1B2A22">T</text>
            <text x="8" y="79" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1B2A22">B</text>
          </svg>
          <span className="data__batas-ket">{PROFIL.batas}</span>
        </div>

        <div className="data__kartu data__kerja" ref={refKerja}>
          <h3 className="data__judul-kecil">Mata pencaharian warga</h3>
          <ul className="data__batang-list">
            {MATA_PENCAHARIAN.map((k, i) => (
              <li key={k.nama} className="data__batang-baris">
                <span className="data__batang-nama">{k.nama}</span>
                <div
                  className="data__batang-jalur"
                  role="img"
                  aria-label={`${k.nama}: ${k.label}`}
                >
                  <div
                    className="data__batang-isi"
                    style={{
                      width: kerjaTerlihat ? `${k.persen}%` : '0%',
                      background: k.warna,
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
                <span className="data__batang-nilai">{k.label}</span>
              </li>
            ))}
          </ul>
          {MODE_CONTOH && (
            <p className="data__catatan">
              Batang hanya contoh tampilan; isi dengan data profil desa.
            </p>
          )}
        </div>

        <div className="data__kartu data__fasil">
          <h3 className="data__judul-kecil data__judul-kecil--hijau">Pendidikan dan kesehatan</h3>
          <div className="data__fasil-grid">
            {PENDIDIKAN_KESEHATAN.map((f) => (
              <div key={f.label} className="data__fasil-item">
                <div className="data__fasil-angka">{f.nilai}</div>
                <div className="data__fasil-label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { DESA, MENU } from '../data/desa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__atas">
        <div className="foot__kolom foot__kolom--merek">
          <div className="foot__nama">{DESA.nama}</div>
          <p className="foot__alamat">{DESA.alamatLengkap}</p>
        </div>
        <div className="foot__kolom">
          <h2 className="foot__judul">Hubungi</h2>
          <p className="foot__teks">
            {DESA.kontak.alamat}
            <br />
            {DESA.kontak.telepon}
            <br />
            {DESA.kontak.email}
          </p>
        </div>
        <nav className="foot__kolom" aria-label="Pintasan atlas">
          <h2 className="foot__judul">Atlas</h2>
          <ul className="foot__tautan">
            {MENU.map((m) => (
              <li key={m.id}>
                <a href={`#${m.id}`}>{m.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="foot__bawah">
        © {new Date().getFullYear()} Pemerintah Desa Kembaran
      </div>
    </footer>
  )
}

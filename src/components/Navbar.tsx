import { useEffect, useState } from 'react'
import { DESA, MENU } from '../data/desa'
import './Navbar.css'

interface Props {
  aktif: string
}

export default function Navbar({ aktif }: Props) {
  const [buka, setBuka] = useState(false)
  const [tergulir, setTergulir] = useState(false)

  useEffect(() => {
    const cek = () => setTergulir(window.scrollY > 40)
    cek()
    window.addEventListener('scroll', cek, { passive: true })
    return () => window.removeEventListener('scroll', cek)
  }, [])

  useEffect(() => {
    if (!buka) return
    const tutupDenganEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBuka(false)
    }
    window.addEventListener('keydown', tutupDenganEsc)
    return () => window.removeEventListener('keydown', tutupDenganEsc)
  }, [buka])

  const tutup = () => setBuka(false)

  return (
    <header
      className={`nav${tergulir ? ' nav--tergulir' : ''}${buka ? ' nav--buka' : ''}`}
    >
      <a href="#beranda" className="nav__merek" onClick={tutup}>
        <span className="nav__titik" aria-hidden="true" />
        {DESA.nama}
      </a>

      <button
        type="button"
        className="nav__tombol"
        aria-expanded={buka}
        aria-controls="menu-utama"
        onClick={() => setBuka((b) => !b)}
      >
        <span className="sr-only">{buka ? 'Tutup menu' : 'Buka menu'}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {buka ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav id="menu-utama" className="nav__menu" aria-label="Menu utama">
        {MENU.map((m) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            className={`nav__link${aktif === m.id ? ' is-aktif' : ''}`}
            aria-current={aktif === m.id ? 'true' : undefined}
            onClick={tutup}
          >
            {m.label}
          </a>
        ))}
      </nav>

      <a href="#saran" className="nav__cta" onClick={tutup}>
        Kirim saran
      </a>
    </header>
  )
}

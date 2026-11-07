import { DESA, STAT_HERO } from '../data/desa'
import './Hero.css'

/** Kontur ketinggian: lingkaran bertingkat seperti peta topografi. */
const KONTUR = [
  'M760 430c20-150 160-250 320-230s260 140 240 290-170 260-330 240-250-150-230-300z',
  'M800 430c16-122 140-208 270-190s214 118 198 242-140 214-272 198-212-124-196-250z',
  'M840 430c12-96 118-166 224-150s170 96 158 194-112 170-218 156-174-98-164-200z',
  'M880 430c10-70 94-124 178-112s130 74 120 148-84 126-164 116-144-72-134-152z',
  'M920 430c8-46 68-84 130-76s92 50 84 100-58 86-116 78-106-48-98-102z',
  'M960 430c6-24 42-44 80-40s54 26 48 54-30 44-66 40-68-26-62-54z',
]

const LERENG = [
  'M-20 700C200 620 360 760 560 690s380-120 560-40 300 30 360-20',
  'M-20 740C200 660 360 800 560 730s380-120 560-40 300 30 360-20',
  'M-20 780C200 700 360 840 560 770s380-120 560-40 300 30 360-20',
]

export default function Hero() {
  return (
    <section id="beranda" className="hero" aria-labelledby="judul-desa">
      <svg
        className="hero__peta"
        aria-hidden="true"
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="#E3A72F" strokeWidth="1.2" opacity=".42">
          {KONTUR.map((d, i) => (
            <path
              key={i}
              d={d}
              pathLength={1}
              className="hero__kontur"
              style={{ animationDelay: `${0.15 + i * 0.22}s` }}
            />
          ))}
        </g>
        <g fill="none" stroke="#6B8F5E" strokeWidth="1" opacity=".5">
          {LERENG.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <path
          d="M-20 560C240 500 420 600 640 540"
          fill="none"
          stroke="#7FA6C4"
          strokeWidth="8"
          strokeLinecap="round"
          opacity=".35"
        />
      </svg>

      {/* Ruang untuk navigasi melayang */}
      <div className="hero__ruang-nav" aria-hidden="true" />

      <div className="hero__isi">
        <p className="hero__lokasi">{DESA.lokasi}</p>
        <h1 id="judul-desa" className="hero__judul">
          Kem<span>baran</span>
        </h1>
        <p className="hero__lead">
          Atlas hidup sebuah desa di lereng Wonosobo. Jelajahi peta, hasil karya warga,
          pembangunan, dan suara dusun dalam satu halaman.
        </p>
        <div className="hero__aksi">
          <a href="#peta" className="btn hero__btn-utama">
            Jelajahi peta desa
          </a>
          <a href="#lapak" className="btn hero__btn-garis">
            Belanja di Lapak Desa
          </a>
        </div>
      </div>

      <dl className="hero__stat">
        {STAT_HERO.map((s) => (
          <div key={s.label} className="hero__stat-item">
            <dt className="hero__stat-label">{s.label}</dt>
            <dd className="hero__stat-nilai">{s.nilai}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

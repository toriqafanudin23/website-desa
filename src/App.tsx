import { useState } from 'react'
import DataSection from './components/DataSection'
import FasilitasSection from './components/FasilitasSection'
import Footer from './components/Footer'
import GaleriSection from './components/GaleriSection'
import Hero from './components/Hero'
import LapakSection from './components/LapakSection'
import Navbar from './components/Navbar'
import PembangunanSection from './components/PembangunanSection'
import PetaSection from './components/PetaSection'
import SaranSection from './components/SaranSection'
import { MENU, TITIK, type JenisTitik, type LapisanPeta } from './data/desa'
import { useActiveSection } from './hooks/useActiveSection'

const ID_SECTION = MENU.map((m) => m.id)

export default function App() {
  const [lapisan, setLapisan] = useState<LapisanPeta>('semua')
  const [terpilih, setTerpilih] = useState<string>(TITIK[0].id)
  const aktif = useActiveSection(ID_SECTION)

  /** Memilih lapisan sekaligus memilih titik pertama dari jenis itu. */
  const pilihLapisan = (l: LapisanPeta) => {
    setLapisan(l)
    if (l === 'semua') return
    const titik = TITIK.find((t) => t.jenis === l)
    if (titik) setTerpilih(titik.id)
  }

  const lihatDiPeta = (jenis: JenisTitik) => {
    pilihLapisan(jenis)
    document.getElementById('peta')?.scrollIntoView()
  }

  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten utama
      </a>
      <Navbar aktif={aktif} />
      <main id="konten" tabIndex={-1}>
        <Hero />
        <PetaSection
          lapisan={lapisan}
          terpilih={terpilih}
          onLapisan={pilihLapisan}
          onPilih={setTerpilih}
        />
        <DataSection />
        <LapakSection />
        <PembangunanSection />
        <GaleriSection />
        <FasilitasSection onLihatDiPeta={lihatDiPeta} />
        <SaranSection />
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'

/** Mengembalikan id section yang sedang berada di tengah layar ('' jika di hero). */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elemen = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const hero = document.getElementById('beranda')
    const pengamat = new IntersectionObserver(
      (entri) => {
        for (const e of entri) {
          if (!e.isIntersecting) continue
          setActive(e.target.id === 'beranda' ? '' : e.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    elemen.forEach((el) => pengamat.observe(el))
    if (hero) pengamat.observe(hero)
    return () => pengamat.disconnect()
  }, [ids])

  return active
}

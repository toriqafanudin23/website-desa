import { useEffect, useRef, useState } from 'react'

/** Bernilai true (dan tetap true) setelah elemen pertama kali terlihat di layar. */
export function useInView<T extends HTMLElement>(ambang = 0.25) {
  const ref = useRef<T | null>(null)
  const [terlihat, setTerlihat] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setTerlihat(true)
      return
    }
    const pengamat = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTerlihat(true)
          pengamat.disconnect()
        }
      },
      { threshold: ambang },
    )
    pengamat.observe(el)
    return () => pengamat.disconnect()
  }, [ambang])

  return [ref, terlihat] as const
}

import type { ReactNode } from 'react'

interface Props {
  nomor: string
  label: string
  id?: string
  children: ReactNode
}

export default function SectionHead({ nomor, label, id, children }: Props) {
  return (
    <>
      <p className="eyebrow">
        {nomor} · {label}
      </p>
      <h2 className="h2" id={id}>
        {children}
      </h2>
    </>
  )
}

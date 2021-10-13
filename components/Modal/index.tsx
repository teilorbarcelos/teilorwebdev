import { ReactNode } from 'react'

interface Props {
  className: string
  children: ReactNode
  onClick?: () => void
}

export default function Modal({ className, children, onClick }: Props) {
  return (
    <section className={className} onClick={onClick}>
      {children}
    </section>
  )
}
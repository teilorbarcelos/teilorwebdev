import styles from './styles.module.css'
import Link from 'next/link'

interface Props {
  href: string
  text: string
}

export default function Square({ href, text }: Props) {
  return (
    <Link href={href}>
      <a className={styles.square}>
        {text}
      </a>
    </Link>
  )
}
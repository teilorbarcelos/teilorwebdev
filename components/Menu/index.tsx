import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Link from 'next/link'

export default function Menu() {
  return (
    <section className={styles.container}>

      <Link href="#hero">
        <a className={globals.link}>TOP</a>
      </Link>

      <Link href="#about">
        <a className={globals.link}>ABOUT ME</a>
      </Link>

      <Link href="#works">
        <a className={globals.link}>WORKS</a>
      </Link>
      <Link href="#get">
        <a className={globals.link}>GET IN TOUCH</a>
      </Link>

    </section>
  )
}
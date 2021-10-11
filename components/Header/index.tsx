import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Logo from '../../components/svg/Logo'

export default function Header() {

  return (
    <header className={styles.menu}>
      <div className={styles.menuLeft}>
        <Link href="#hero">
          <a className={globals.link}>TOP</a>
        </Link>
        <Link href="#about">
          <a className={globals.link}>ABOUT ME</a>
        </Link>
      </div>
      <div className={styles.menuLogo}>
        <Link href="/">
          <a className={styles.logo}>

            <Logo className={styles.svg} />

          </a>
        </Link>
      </div>
      <div className={styles.menuRight}>
        <Link href="#works">
          <a className={globals.link}>WORKS</a>
        </Link>
        <Link href="#get">
          <a className={globals.link}>GET IN TOUCH</a>
        </Link>
      </div>
    </header>
  )
}
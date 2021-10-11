import Link from 'next/link'
import Logo from '../components/svg/Logo'

export default function Header() {

  return (
    <header className="menu" id="menu">
      <div className="menu-left">
        <Link href="#hero">
          <a className="link menu-3">TOP</a>
        </Link>
        <Link href="#about">
          <a className="link menu-2">ABOUT ME</a>
        </Link>
      </div>
      <div className="menu-logo menu-1">
        <Link href="/">
          <a className="logo">

            <Logo />

          </a>
        </Link>
      </div>
      <div className="menu-right">
        <Link href="#list">
          <a className="link menu-2">WORKS</a>
        </Link>
        <Link href="#get">
          <a className="link menu-3">GET IN TOUCH</a>
        </Link>
      </div>
    </header>
  )
}
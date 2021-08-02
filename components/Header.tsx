import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'

export default function Header(){
        
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
          <Link href="#hero">
            <a className="logo">
              
              <Image
                src={logo}
                alt="Logo of the site"
              />
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
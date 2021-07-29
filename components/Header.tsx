import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import gsap from 'gsap'

export default function Header(){

    if(typeof window !== 'undefined'){

        document.addEventListener('DOMContentLoaded', () => {
            let tl = gsap.timeline()
            tl
            .from('.menu-1', {
                y: -50,
            })  
            .to('.menu-1', {
                opacity: 1,
                y: 0,
                delay: .1,
            })
            .from('.menu-2', {
                y: -50,
            })
            .to('.menu-2', {
                opacity: 1,
                y: 0,
            })
            .from('.menu-3', {
                y: -50,
            })
            .to('.menu-3', {
                opacity: 1,
                y: 0,
            })
        })

    }
        
    return (
        <header className="menu">
        <div className="menu-left">
          <Link href="#">
            <a className="link menu-3">HOME</a>
          </Link>
          <Link href="#">
            <a className="link menu-2">ABOUT</a>
          </Link>
        </div>
        <div className="menu-logo menu-1">
        <Link href="/">
            <a className="logo">
              <Image
                src={logo}
                alt="Logo of the site"
              />
            </a>
          </Link>
        </div>
        <div className="menu-right">
          <Link href="#">
            <a className="link menu-2">WORKS</a>
          </Link>
          <Link href="#">
            <a className="link menu-3">GET IN TOUCH</a>
          </Link>
        </div>
      </header>
    )
}
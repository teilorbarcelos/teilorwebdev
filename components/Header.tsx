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
                // opacity: 0,
                y: -50,
            })  
            .to('.menu-1', {
                duration: 1,
                opacity: 1,
                y: 0,
                delay: 1,
                ease: 'power3.out',
            })
            .from('.menu-2', {
                // opacity: 0,
                y: -50,
            })
            .to('.menu-2', {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power3.out',
            })
            .from('.menu-3', {
                // opacity: 0,
                y: -50,
            })
            .to('.menu-3', {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power3.out',
            })
        })

    }
        
    return (
        <header className="menu">
        <div className="menu-left">
          <Link href="#hero">
            <a className="link menu-3">TOP</a>
          </Link>
          <Link href="#">
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
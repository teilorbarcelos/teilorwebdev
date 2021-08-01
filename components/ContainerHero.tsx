import Image from 'next/image'
import imgHero from '../public/hero.png'
import Link from 'next/link'
import gsap from 'gsap'

export default function ContainerHero() {
    
    if(typeof window !== 'undefined'){
        document.addEventListener('DOMContentLoaded', () => {
            let tl = gsap.timeline()
            tl
              .from('.container-item div', {
                y: 200,
              })
              .to('.container-item div', {
                duration: 2,
                opacity: 1,
                y: 0,
                stagger: {each: .4},
                delay: .7,
                ease: 'power3.out',
              })
        })
    }

    return (
        <section className="container hero" id="hero">
        <div className="container-item">
          <div>
            <h1>Teilor Souza Barcelos</h1>
          </div>
          <div>
            <h5 className="mask text-center mt-5">Web Developer</h5>
          </div>
          <div>
            <h5 className="mask mt-4">Front & Back-end Programming</h5>
          </div>
          <div className="flex-end pr-9">
            <Link href="#list">
              <a className="square">
                WORKS
              </a>
            </Link>
          </div>
        </div>
        <div className="container-item">
          <div>
            <h5 className="mask">I am</h5>
          </div>
          <div className="mt-3">
            <h4>A passionate about programing and a constant seeker by improvement of own skills</h4>
          </div>
        </div>
      </section>
    )
}
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
                y: 100,
              })
              .to('.container-item div', {
                duration: 1,
                opacity: 1,
                y: 0,
                stagger: {each: .3},
                delay: .3,
                ease: 'power3.out',
              })
        })
    }

    return (
        <section className="container hero mb-9">
        <div className="container-item">
          <div>
            <h1>Teilor Souza Barcelos</h1>
          </div>
          <div>
            <h2 className="mask text-right mt-3">Web Developer</h2>
          </div>
          <div>
            <h2 className="mask text-center">Front & Back-end Programming</h2>
          </div>
          <div className="flex-end pr-9">
            <Link href="#">
              <a className="square">
                WORKS
              </a>
            </Link>
          </div>
        </div>
        <div className="container-item">
          <div className="img-hero">
            <Image
              src={imgHero}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    )
}
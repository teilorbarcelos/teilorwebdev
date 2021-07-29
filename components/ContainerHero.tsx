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
                y: 50,
                })
                .to('.container-item div', {
                transition: 0.5,
                opacity: 1,
                y: 0,
                stagger: {each: .2},
                delay: .1,
                })
        })
    }

    return (
        <section className="container hero">
        <div className="container-item">
          <div>
            <h1>Teilor S. Barcelos</h1>
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
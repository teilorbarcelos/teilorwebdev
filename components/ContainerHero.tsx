import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Github from './svg/Github'
import Instagram from './svg/Instagram'
import Linkedin from './svg/Linkedin'

export default function ContainerHero() {

  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {

      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo('.container-item div', {
        opacity: 0,
        y: 200,
      }, {
        scrollTrigger: {
          trigger: '.container-item div'
        },
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: { each: .4 },
        delay: 5,
      })

    })
  }

  return (
    <section className="container hero" id="hero">
      <div className="container-item pt-6">
        <div>
          <h1>Teilor Souza Barcelos</h1>
        </div>
        <div>
          <h5 className="mask text-center mt-5">Web Developer</h5>
        </div>
        <div>
          <h5 className="mask mt-4">Front & Back-end Programming</h5>
        </div>
        <div className="flex space-between flex-column-on-mobile">
          <div className="mt-6 flex gap-2 folow-me-panel">
            <div className="folow-me">
              <Link href="https://github.com/teilorbarcelos">
                <a title="Github" target="_blank">

                  <Github />

                </a>
              </Link>
            </div>
            <div className="folow-me">
              <Link href="https://www.instagram.com/teilor.dev/">
                <a title="Instagram" target="_blank">

                  <Instagram />

                </a>
              </Link>
            </div>
            <div className="folow-me">
              <Link href="https://www.linkedin.com/in/teilorsb/">
                <a title="Linkedin" target="_blank">

                  <Linkedin />

                </a>
              </Link>
            </div>
          </div>
          <div className="flex-end pr-9">
            <Link href="#list">
              <a className="square">
                WORKS
              </a>
            </Link>
          </div>

        </div>
      </div>
      <div className="container-item">
        <div>
          <h5 className="mask right-on-hover">I am</h5>
        </div>
        <div className="mt-3">
          <h4>A constant student of programming who loves what does, always looking for self-improvement and the learning new technologies</h4>
        </div>
      </div>
    </section>
  )
}
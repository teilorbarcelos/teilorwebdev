import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Github from './svg/Github'
import Instagram from './svg/Instagram'
import Linkedin from './svg/Linkedin'

export default function GetInTouch() {

    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {

            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('.get .get-item', {
                opacity: 0,
                y: 100,
            }, {
                scrollTrigger: {
                    trigger: '.get .get-item'
                },
                duration: 1,
                opacity: 1,
                y: 0,
                stagger: { each: .3 },
                delay: 1,
            })
        })
    }

    return (
        <section className="get mt-9" id="get">
            <h2 className="get-item">Get in touch</h2>
            <h3 className="mask mt-6 text-center get-item">tsb.developer87@gmail.com</h3>
            <div className="folow-me">
                <div className="folow-me-item py-4 flex get-item">
                    <Link href="https://github.com/teilorbarcelos">
                        <a target="_blank">

                            <Github />

                            <h6 className="px-1 link">Github</h6>
                        </a>
                    </Link>
                </div>
                <div className="folow-me-item py-4 flex get-item">
                    <Link href="https://www.instagram.com/teilor.dev/">
                        <a target="_blank">

                            <Instagram />
                            
                            <h6 className="px-1 link">Instagram</h6>
                        </a>
                    </Link>
                </div>
                <div className="folow-me-item py-4 flex get-item">
                    <Link href="https://www.linkedin.com/in/teilorsb/">
                        <a target="_blank">

                            <Linkedin />

                            <h6 className="px-1 link">Linkedin</h6>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
import Image from 'next/image'
import Link from 'next/link'
import imgLetmeask from '../public/letmeask.png'
import imgDevdotfinance from '../public/devdotfinance.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function SelectedWorks() {
    
    if(typeof window !== 'undefined'){
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('#list div', {
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: '#list'
                },
                transition: 0.5,
                opacity: 1,
                y: 0,
                stagger: {each: .2},
                delay: .1,
            })
        })
    }

    return (
        <section className="list" id="list">
            <div className="list-item">
            <h2>Selected Works</h2>
            </div>

            <div className="list-item py-6">
            <h5>01.</h5>
            <Link href="https://letmeask-f38c5.web.app/">
                <a target="_blank">
                <h3>Letmeask</h3>
                </a>
            </Link>
            <div className="work-img">
                <Image
                src={imgLetmeask}
                alt="Letmeask image"
                />
            </div>
            </div>

            <div className="bb-gray"></div>

            <div className="list-item py-6">
                <h5>02.</h5>
                <Link href="https://devdotfinance.web.app/">
                    <a target="_blank">
                    <h3>Devdotfinance</h3>
                    </a>
                </Link>
                <div className="work-img">
                    <Image
                    src={imgDevdotfinance}
                    alt="Devdotfinance image"
                    />
                </div>
            </div>
        </section>
    )
}
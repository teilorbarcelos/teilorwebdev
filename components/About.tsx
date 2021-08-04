import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Github from './svg/Github'
import Html5 from './svg/Html5'
import Javascript from './svg/Javascript'
import Reactjs from './svg/Reactjs'
import Sass from './svg/Sass'
import Vuejs from './svg/Vuejs'
import Laravel from './svg/Laravel'
import Python from './svg/Python'
import Typescript from './svg/Typescript'
import Debian from './svg/Debian'

export default function About() {

    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {

            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('#about div', {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: '#about div'
                },
                duration: 1,
                opacity: 1,
                y: 0,
                stagger: { each: .3 },
                delay: .7,
            })
        })
    }

    return (
        <section className="about in-front mt-9" id="about">
            <div className="about-item">
                <h2>About Me</h2>
            </div>
            <div className="about-item">
                <h4 className="mask mt-3">Hello, I'm Teilor Souza Barcelos, Brazilian, resident in Criciúma - SC, a truly passionate about technology, web development & front and back-end programming.</h4>
                <h3 className="mt-3">Some technologies that I know:</h3>
            </div>
            <div className="technologies mt-3">
                <div className="technologies-item">
                    <Link href="https://github.com/teilorbarcelos">
                        <a title="Github" target="_blank">

                            <Github />

                        </a>
                    </Link>
                </div>
                <div title="Html5" className="technologies-item">

                    <Html5 />

                </div>
                <div title="Javascript" className="technologies-item">
                    
                    <Javascript />

                </div>
                <div title="Reactjs" className="technologies-item">

                    <Reactjs />

                </div>
                <div title="Sass" className="technologies-item">

                    <Sass />

                </div>
                <div title="Vuejs" className="technologies-item">

                    <Vuejs />

                </div>
                <div title="Laravel" className="technologies-item">

                    <Laravel />

                </div>
                <div title="Python" className="technologies-item">

                    <Python />

                </div>
                <div title="Typescript" className="technologies-item">

                    <Typescript />

                </div>
                <div title="Debian" className="technologies-item">

                    <Debian />

                </div>

            </div>
        </section>
    )
}
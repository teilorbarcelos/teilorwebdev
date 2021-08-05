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
import Nextjs from './svg/Nextjs'
import Figma from './svg/Figma'
import Nodejs from './svg/Nodejs'
import Php from './svg/php'
import Java from './svg/Java'
import Mysql from './svg/Mysql'
import Firebase from './svg/Firebase'
import Csharp from './svg/Csharp'
import Flutter from './svg/Flutter'
import Elixir from './svg/Elixir'

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
                delay: .5,
            })
        })
    }

    return (
        <section className="about in-front mt-9" id="about">
            <div className="about-item">
                <h2>About Me</h2>
            </div>
            <div className="about-item flex">
                <h4 className="mask mt-3">Hello, I'm Teilor Souza Barcelos, Brazilian, resident in Criciúma - SC, a truly passionate about technology, web development & front and back-end programming.</h4>
                <div className="my-photo">

                    <img title="Hello!" className=" up-on-hover" src='https://avatars.githubusercontent.com/u/80414833?v=4' />

                </div>
            </div>
            <div className="about-item">
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
                <div title="NextJs" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Nextjs />

                </div>
                <div title="Html5" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Html5 />

                </div>
                <div title="Javascript" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">
                    
                    <Javascript />

                </div>
                <div title="ReactJs" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Reactjs />

                </div>
                <div title="Sass" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Sass />

                </div>
                <div title="Vuejs" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Vuejs />

                </div>
                <div title="Laravel" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Laravel />

                </div>
                <div title="Python" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Python />

                </div>
                <div title="Typescript" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Typescript />

                </div>
                <div title="Debian" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Debian />

                </div>
                <div title="Figma" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Figma />

                </div>
                <div title="NodeJs" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Nodejs />

                </div>
                <div title="PHP" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Php />

                </div>
                <div title="Java" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Java />

                </div>
                <div title="C#" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Csharp />

                </div>
                <div title="MySQL" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Mysql />

                </div>
                <div title="Firebase" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Firebase />

                </div>
                <div title="Flutter" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Flutter />

                </div>
                <div title="Elixir" onClick={(e) => alert(e.currentTarget.title)} className="technologies-item">

                    <Elixir />

                </div>

            </div>
        </section>
    )
}
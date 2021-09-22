import Image from 'next/image'
import Link from 'next/link'
import imgLetmeask from '../public/letmeask.png'
import imgDevdotfinance from '../public/devdotfinance.png'
import imgGameplay from '../public/gameplay.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function SelectedWorks() {

    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            function show(work) {
                const element = document.getElementById(`work-image-${work}`)
                element.style.transform = 'translate(-45%, -50%) translate3d(0, 0, 0)'
                element.style.width = '720px'
                element.style.opacity = '1'
                document.getElementById('bb-gray').style.opacity = '0'
                document.getElementById('bb-gray1').style.opacity = '0'
            }

            function hidde(work) {
                const element = document.getElementById(`work-image-${work}`)
                element.style.transform = 'translate(-50%, -50%) translate3d(-1000px, 0, 0) skew(90deg)'
                element.style.width = '0'
                element.style.opacity = '0'
                document.getElementById('bb-gray').style.opacity = '1'
                document.getElementById('bb-gray1').style.opacity = '1'
            }

            document.getElementById('work-1').onmouseover = () => show(1)
            document.getElementById('work-1').onmouseout = () => hidde(1)

            document.getElementById('work-2').onmouseover = () => show(2)
            document.getElementById('work-2').onmouseout = () => hidde(2)

            document.getElementById('work-3').onmouseover = () => show(3)
            document.getElementById('work-3').onmouseout = () => hidde(3)

            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('#list div', {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: '#list'
                },
                duration: .5,
                opacity: 1,
                y: 0,
                stagger: { each: .2 },
                delay: .3,
            })
        })
    }

    return (
        <section className="list mt-9" id="list">
            <div className="list-item">
                <h2>Selected Works</h2>
            </div>

            <div className="list-item py-6">
                <h5>01.</h5>
                <Link href="https://letmeask-f38c5.web.app/">
                    <a target="_blank" id="work-1">
                        <h3 title="ReactJs SPA">Letmeask &#8599;</h3>
                    </a>
                </Link>
                <div className="work-img" id="work-image-1">
                    <Image
                        src={imgLetmeask}
                        alt="Letmeask image"
                    />
                </div>
            </div>

            <div className="bb-gray" id="bb-gray"></div>

            <div className="list-item py-6">
                <h5>02.</h5>
                <Link href="https://devdotfinance.web.app/">
                    <a target="_blank" id="work-2">
                        <h3 title="HTML, CSS and JS only">Devdotfinance &#8599;</h3>
                    </a>
                </Link>
                <div className="work-img" id="work-image-2">
                    <Image
                        src={imgDevdotfinance}
                        alt="Devdotfinance image"
                    />
                </div>
            </div>

            <div className="bb-gray" id="bb-gray1"></div>

            <div className="list-item py-6">
                <h5>03.</h5>
                <Link href="https://github.com/teilorbarcelos/gameplay">
                    <a target="_blank" id="work-3">
                        <h3 title="React Native App">GamePlay &#8599;</h3>
                    </a>
                </Link>
                <div className="work-img" id="work-image-3">
                    <Image
                        src={imgGameplay}
                        alt="Gameplay image"
                    />
                </div>
            </div>
        </section>
    )
}
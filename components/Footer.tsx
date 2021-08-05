import Logo from '../components/svg/Logo'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function Footer() {

    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {

            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('footer div', {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: 'footer div'
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
        <footer className="text-center py-4 in-front">

            <div className="bb-gray2 my-5 only-mobile"></div>

            {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
            <div className="addthis_inline_share_toolbox_62v1 only-mobile"></div>

            <div className="bb-gray2 my-5"></div>

            <div className="my-5">

                <Logo />

            </div>

            <div>
                <h6 className="mask">Developed by Teilor Souza Barcelos &copy; 2021</h6>
            </div>

        </footer>
    )
}
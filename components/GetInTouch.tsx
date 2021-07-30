import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function GetInTouch() {
    
    if(typeof window !== 'undefined'){
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
                stagger: {each: .3},
                delay: 1,
            })
        })
    }

    return (
        <section className="get mt-9">
            <h2 className="get-item">Get in touch</h2>
            <h3 className="mask mt-9 text-center get-item">tsb.developer87@gmail.com</h3>
        </section>
    )
}
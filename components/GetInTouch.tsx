import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

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
        <section className="get mt-9" id="get">
            <h2 className="get-item">Get in touch</h2>
            <h3 className="mask mt-6 text-center get-item">tsb.developer87@gmail.com</h3>
            <div className="folow-me">
                <div className="folow-me-item py-4 flex">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon up-on-hover'
                        viewBox='0 0 512 512'
                    >
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>
                        
                        <title>Instagram</title>
                        <path
                            d='M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                        <path
                            d='M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                    <Link href="https://www.instagram.com/teilor.dev/">
                        <a target="_blank">
                            <h6 className="px-1 link">Instagram</h6>
                        </a>
                    </Link>
                </div>
                <div className="folow-me-item py-4 flex">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon up-on-hover'
                        viewBox='0 0 512 512'
                    >
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>
                        
                        <title>Linkedin</title>
                        <path
                            d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                    <Link href="https://www.linkedin.com/in/teilorsb/">
                        <a target="_blank">
                            <h6 className="px-1 link">Linkedin</h6>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
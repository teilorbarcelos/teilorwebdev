import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Footer() {
    return (
        <footer className="text-center py-4 in-front">

            <div className="bb-gray2 my-5 only-mobile"></div>

            {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
            <div className="addthis_inline_share_toolbox_62v1 only-mobile"></div>

            <div className="bb-gray2 my-5"></div>

            <div className="my-5">
                <Image
                    src={logo}
                    alt="Logo of the site"
                    width={40}
                />
            </div>

            <h6 className="mask">Developed by Teilor Souza Barcelos &copy; 2021</h6>
        </footer>
    )
}
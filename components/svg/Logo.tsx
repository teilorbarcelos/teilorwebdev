interface Props {
    className?: string
    onClick?: () => void
}

export default function Logo({ className, onClick }: Props) {
    return (
        <svg onClick={onClick} className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="28.5" y="15.5" width="14" height="54" fill="url(#paint0_linearLogo)" stroke="url(#paint1_linearLogo)" />
            <rect x="0.5" y="0.5" width="69" height="14" fill="url(#paint2_linearLogo)" stroke="url(#paint3_linearLogo)" />
            <defs>
                <linearGradient id="paint0_linearLogo" x1="35.5" y1="15" x2="35.5" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#666666" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint1_linearLogo" x1="35.5" y1="15" x2="35.5" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopOpacity="0.34" />
                </linearGradient>
                <linearGradient id="paint2_linearLogo" x1="70" y1="6.99999" x2="4.38019e-07" y2="6.99999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#15aed4" />
                    <stop offset="1" stopOpacity="0.26" />
                </linearGradient>
                <linearGradient id="paint3_linearLogo" x1="-3.12924e-07" y1="7" x2="70" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopOpacity="0.33" />
                </linearGradient>
            </defs>
        </svg>
    )
}
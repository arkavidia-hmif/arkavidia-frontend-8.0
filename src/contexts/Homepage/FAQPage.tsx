import FAQ from "./FAQ"
import Timeline from "./Timeline"
import ArkavStamp from 'src/assets/images/arkav-stamp.svg'
import Image from "next/image"
import QMark from "src/assets/images/qmark.png";
import QMark_Reversed from "src/assets/images/qmark-reversed.svg"
// Your components pages here
const Landing = () => {
    return (
        <div>
            <div className="mb-[-30px] relative">
                <div className="absolute top-[-50%] right-0">
                    <Image src={ArkavStamp} />
                </div>
                <svg fill="none" viewBox="0 0 1438 203" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1438 0C886.22 170.772 571.373 164.307 0 0V203H1438V0Z" fill="#FEB20E"/>
                </svg>
            </div>
            <div className="w-full bg-yellow300 pb-[130px] relative z-10">
                <div className="absolute top-0 left-0 z-20">
                    <Image src={QMark} />
                </div>
                <div className="absolute bottom-0 right-0 z-20">
                    <Image src={QMark_Reversed} />
                </div>
                <div className="relative z-30">
                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default Landing

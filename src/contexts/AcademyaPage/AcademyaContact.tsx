import WaInversed from "@src/assets/images/whatsapp-inversed.svg"
import LineInversed from "@src/assets/images/line-inversed.svg"
import ContactArt from "@src/assets/images/contact-art.png"
import DiskGroup from "@src/assets/images/disks-group.png";
import Image from "next/image"

const AcademyaContact = () => {
    return (
        <div className="bg-[#FEB20E] z-[0]">
            <p className="text-center text-[24px] mt-4 font-archivo sm:mt-8 md:mt-0 lg:mt-8 md:text-[64px]">Butuh Bantuan?</p>
            <p className="text-center text-[18px] mb-6">Kamu dapat membaca panduan Academya melalui guidebook atau dapat <br></br> menghubungi contact person berikut!</p>    
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="bg-white border-solid border-2 border-black md:min-h-[380px] md:min-w-[60vw] min-w-[348px]">
                    <div className="flex justify-center md:justify-start bg-black md:pl-[45px]">
                        <p className="text-white text-[18px] font-archivo md:text-[36px] pt-[9px] pb-[5px] md:pt-[18px] md:pb-[11px]">Guidebook</p>
                    </div>
                    <div className="flex justify-center md:justify-start bg-[#1F307C] md:pl-[45px] py-[20px]">
                        <button className="bg-white py-[10px] px-[60px] md:py-[21px] md:px-[117px] rounded-[12px] text-[#1F307C] text-[15px] font-archivo md:text-[15px]">Download Guidebook</button>
                    </div>
                    <div className="flex justify-center md:justify-start md:pl-[45px] py-[15px] gap-[50px]">
                        <div className="flex flex-col items-center">
                            <Image src={WaInversed}/>
                            <p className="text-[#1F307C] font-varela">0888-8888-8888</p>
                            <p className="text-[#1F307C] font-bold font-varela">Abdul</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={LineInversed} />
                            <p className="text-[#1F307C] font-varela">abdulganteng</p>
                            <p className="text-[#1F307C] font-bold font-varela">Abdul</p>
                        </div>
                    </div>
                </div>
                <div className="flex ml-[-2px] min-h-[380px]">
                    <Image src={ContactArt} />
                </div>
            </div>
            <div className="mt-4 invisible md:mb-[-90px] z-[-100]">
                <Image src={DiskGroup}/>
            </div>
        </div>
    )
}

export default AcademyaContact
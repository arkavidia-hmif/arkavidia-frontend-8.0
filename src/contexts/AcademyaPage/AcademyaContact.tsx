import WaInversed from '@src/assets/images/whatsapp-inversed.svg'
import LineInversed from '@src/assets/images/line-inversed.svg'
import ContactArt from '@src/assets/images/contact-art.png'
import DiskGroup from '@src/assets/images/disks-group.png'
import Image from 'next/image'

const AcademyaContact = () => {
  return (
    <div className="bg-[#FEB20E] z-[0] relative pb-[5rem] md:pb-[8rem]">
      <p className="text-center text-[24px] font-archivo md:text-[64px]">
        Butuh Bantuan?
      </p>
      <p className="text-center text-[18px] mb-6">
        Kamu dapat membaca panduan Academya melalui guidebook atau dapat{' '}
        <br></br> menghubungi contact person berikut!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center md:px-5">
        <div className="bg-white border-solid border-2 border-black md:min-h-[380px] md:min-w-[60vw] min-w-[348px]">
          <div className="flex justify-center md:justify-start bg-black md:pl-[45px]">
            <p className="text-white text-[18px] font-archivo md:text-[36px] pt-[9px] pb-[5px] md:pt-[18px] md:pb-[11px]">
              Guidebook
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center bg-[#1F307C] px-[20px] md:px-[15px] py-[20px] gap-5">
            <a
              href="https://drive.google.com/file/u/3/d/1K0-QhKUaXTU4PbvuYnbFb27nZCGcvKBX/view?usp=share_link"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none' }}>
              <button className="bg-white py-[10px] px-[60px] md:py-[21px] md:px-[70px] rounded-[12px] text-[#1F307C] text-[15px] font-archivo md:text-[15px]">
                Download Guidebook PM
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/11B1foU8tNNYpUk_U2SgKvoUJUW20v-Iz/view"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none' }}>
              <button className="bg-white py-[10px] px-[60px] md:py-[21px] md:px-[70px] rounded-[12px] text-[#1F307C] text-[15px] font-archivo md:text-[15px]">
                Download Guidebook DS
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start md:pl-[45px] py-[15px] md:gap-[50px]">
            <div className="flex flex-col items-center">
              <Image src={WaInversed} />
              <p className="text-[#1F307C] font-varela">082246702270</p>
              <p className="text-[#1F307C] font-bold font-varela">Fajar</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={LineInversed} />
              <p className="text-[#1F307C] font-varela">xxfajarxx</p>
              <p className="text-[#1F307C] font-bold font-varela">Fajar</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ml-[-2px] min-h-[380px]">
          <Image src={ContactArt} />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-[5] z-1">
        <Image src={DiskGroup} />
      </div>
    </div>
  )
}

export default AcademyaContact

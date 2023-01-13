import Image from 'next/image'
import comingSoon from '@src/assets/images/event-landing/comingsoon.svg'
import boy from '@src/assets/images/event-landing/boy.svg'

const EventComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full ">
      <div className="w-[841px] h-[104px] bg-black flex justify-center items-center">
        <h1 className="font-archivo font-black text-white text-[72px]">
          MAIN EVENT
        </h1>
      </div>

      <div className="w-full flex justify-center items-center mt-[100px] pb-[180px]">
        <Image src={comingSoon} />
        <div className="absolute top-28 right-0">
          <Image src={boy} />
        </div>
      </div>
    </div>
  )
}

export default EventComingSoon

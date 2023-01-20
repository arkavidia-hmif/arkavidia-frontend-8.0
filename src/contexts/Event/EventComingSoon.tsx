import Image from 'next/image'
import comingSoon from '@src/assets/images/event-landing/comingsoon.svg'
import boy from '@src/assets/images/event-landing/boy.svg'

const EventComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full ">
      <div className="w-[75%] pt-2 pb-2 lg:pb-0 lg:pt-0 lg:w-[788px] lg:h-[104px] bg-black flex justify-center items-center">
        <h1 className="font-archivo font-black text-white text-[2.5em] lg:text-[72px]">
          MAIN EVENT
        </h1>
      </div>

      <div className="w-full flex justify-center items-center mt-[14vh] pb-[24vh]">
        <div className="w-[80vw] lg:w-auto">
          <Image src={comingSoon} />
        </div>
        <div className="w-[30vw] absolute  right-0">
          <Image src={boy} />
        </div>
      </div>
    </div>
  )
}

export default EventComingSoon

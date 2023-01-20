import Image from 'next/image'
import background from '@src/assets/images/event-landing/blue-background.svg'
import star from '@src/assets/images/event-landing/star.svg'
import comingSoon from '@src/assets/images/event-landing/comingsoon.svg'
import boy from '@src/assets/images/event-landing/boy.svg'

const PreEvent = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full mt-[5rem]">
      {/* PRE-EVENT */}
      <div className="w-[75%] pt-2 pb-2 lg:pb-0 lg:pt-0 lg:w-[788px] lg:h-[104px] bg-black flex justify-center items-center">
        <h1 className="font-archivo font-black text-white text-[2.5em] lg:text-[72px]">
          PRE-EVENT
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="relative mt-16 flex flex-col items-center">
        {/* BACKGROUND */}
        <div className=" min-w-[70vw] max-h-[100vh]">
          <Image src={background} className="" />
        </div>

        {/* COMING SOON */}
        <div className="absolute w-full flex justify-center items-center z-20">
          <div className="w-[80vw] lg:w-auto">
            <Image src={comingSoon} />
          </div>
          <div className="w-[30vw] absolute  right-0">
            <Image src={boy} />
          </div>
        </div>
      </div>

      {/* STARS */}
      <div className="hidden xl:block absolute top-[350px] right-20 w-[60px]">
        <Image src={star}></Image>
      </div>
      <div className="hidden xl:block absolute top-28 left-20">
        <Image src={star}></Image>
      </div>
    </div>
  )
}

export default PreEvent

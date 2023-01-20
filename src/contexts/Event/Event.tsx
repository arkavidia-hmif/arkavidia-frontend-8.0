import Image from 'next/image'
import background from '@src/assets/images/event-landing/background-yellow.svg'
import board from '@src/assets/images/event-landing/board.svg'

const Event = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full ">
      <div className="w-[75%] pt-2 pb-2 lg:pb-0 lg:pt-0 lg:w-[788px] lg:h-[104px] bg-black flex justify-center items-center">
        <h1 className="font-archivo font-black text-white text-[2.5em] lg:text-[72px]">
          MAIN EVENT
        </h1>
      </div>

      <div className="relative mt-16 flex flex-col items-center">
        {/* BACKGROUND */}
        <div className=" min-w-[1280px] lg:w-fit">
          <Image src={background} className="" />
        </div>

        {/* CARDS */}
        <div className="absolute w-[100vw] lg:w-[1000px] top-0 flex flex-col">
          <div className="flex overflow-x-auto pl-[15%] lg:pl-0">
            <div className="shrink-0 relative mr-2 ">
              <Image src={board} className="w-full" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center">
                <h3 className="font-varela text-[24px] ">NOW</h3>
                <h3 className="font-helvatica text-[16px] font-bold w-[117px] text-center leading-[18px] mt-[20px]">
                  Arkavidia Talks Day 1
                </h3>
                <h3 className="font-helvatica text-[14px] mt-[20px]">
                  99 Jan - 99 Jan
                </h3>
              </div>
            </div>

            <div className="shrink-0 relative ml-2 mr-2  ">
              <Image src={board} className="" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center">
                <h3 className="font-varela text-[24px] ">Incoming</h3>
                <h3 className="font-helvatica text-[16px] font-bold w-[117px] text-center leading-[18px] mt-[20px]">
                  Arkavidia Talks Day 2
                </h3>
                <h3 className="font-helvatica text-[14px] mt-[20px]">99 Feb</h3>
              </div>
            </div>

            <div className="shrink-0 relative ml-2 mr-2  ">
              <Image src={board} className="w-full" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center">
                <h3 className="font-varela text-[24px] ">Incoming</h3>
                <h3 className="font-helvatica text-[16px] font-bold w-[117px] text-center leading-[18px] mt-[20px]">
                  AFI
                </h3>
                <h3 className="font-helvatica text-[14px] mt-[20px]">
                  To Be Announce
                </h3>
              </div>
            </div>
          </div>

          {/* SLIDER */}
        </div>
      </div>
    </div>
  )
}

export default Event

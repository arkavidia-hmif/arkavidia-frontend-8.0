import Image from 'next/image'
import background from '@src/assets/images/pre-event/blue-background.svg'
import board from '@src/assets/images/pre-event/board.svg'
import star from '@src/assets/images/pre-event/star.svg'

const PreEvent = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full ">
      {/* PRE-EVENT */}
      <div className="w-[788px] h-[104px] bg-black flex justify-center items-center">
        <h1 className="font-archivo font-black text-white text-[72px]">
          PRE-EVENT
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="relative mt-16 flex flex-col items-center">
        {/* BACKGROUND */}
        <div className=" min-w-[1440px]">
          <Image src={background} className="" />
        </div>

        {/* CARDS */}
        <div className="absolute w-screen top-0 flex flex-col items-center">
          <div className="flex justify-center item-center ">
            <div className="relative ml-2 mr-2">
              <Image src={board} className="w-full" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center bg-red-300">
                <h3 className="font-varela text-[24px] ">NOW</h3>
                <h3 className="font-helvatica text-[16px] font-bold w-[117px] text-center leading-[18px] mt-[20px]">
                  Arkavidia Talks Day 1
                </h3>
                <h3 className="font-helvatica text-[14px] mt-[20px]">
                  99 Jan - 99 Jan
                </h3>
              </div>
            </div>

            <div className="relative ml-2 mr-2  ">
              <Image src={board} className="" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center bg-red-300">
                <h3 className="font-varela text-[24px] ">Incoming</h3>
                <h3 className="font-helvatica text-[16px] font-bold w-[117px] text-center leading-[18px] mt-[20px]">
                  Arkavidia Talks Day 2
                </h3>
                <h3 className="font-helvatica text-[14px] mt-[20px]">99 Feb</h3>
              </div>
            </div>

            <div className="relative ml-2 mr-2  ">
              <Image src={board} className="w-full" />
              <div className="absolute w-[180px] top-[50%] bottom-[50%] left-[12%] right-[88%] top-20 flex flex-col items-center justify-center bg-red-300">
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
        </div>
      </div>

      {/* STARS */}
      <div className="absolute top-[350px] right-20 w-[60px]">
        <Image src={star}></Image>
      </div>
      <div className="absolute top-28 left-20">
        <Image src={star}></Image>
      </div>
    </div>
  )
}

export default PreEvent

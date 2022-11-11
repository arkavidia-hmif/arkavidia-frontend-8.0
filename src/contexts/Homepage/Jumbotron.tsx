import Image from 'next/image'
import Background from '../src/components/Background/Group 302.png'
import ArkavLogo from '../src/components/Images/logo_arkav 1.png'
import Image1 from '../src/components/Images/cewe 2.png'
import Image2 from '../src/components/Images/Layer 2.png'
import ArrowDown from '../src/components/Images/ArrowDown.png'
import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'

export default function Jumbotron() {
  return (
    <>
      <div className="bg-[#1F307C] h-[917px]">
        <div
          className="
          xl:h-[66px]"
        ></div>
        <div
          className="flex
          xl:bg-gray-200 xl:mx-[120px] xl:rounded-full xl:h-[93.25px] xl:w-auto"
        >
          <div
            className="my-auto
            xl:ml-[70px]"
          >
            <Image src={ArkavLogo} />
          </div>
          <button
            className="font-helvatica text-[#1F307C] my-auto
            xl:text-[16px] xl:font-black xl:ml-[740px]"
          >
            Home
          </button>
          <button
            className="flex font-helvatica text-[#1F307C] my-auto
            xl:text-[16px] xl:font-black xl:ml-[81.5px]"
          >
            Event
            <ArrowDownIcon
              className="my-auto
              xl:ml-[4px]"
            />
          </button>
          <button
            className="flex font-helvatica text-[#1F307C] my-auto
            xl:text-[16px] xl:font-black xl:ml-[61px]"
          >
            Competition
            <ArrowDownIcon
              className="my-auto
              xl:ml-[4px]"
            />
          </button>
        </div>
        <div className="flex">
          <div
            className="
            xl:ml-[155px] xl:mt-[80px]"
          >
            <Image src={Image1} />
          </div>
          <div
            className="absolute z-50 divide-y border-black
            xl:border-4 xl:mx-[410px] xl:h-[296px] xl:w-[694px] xl:mt-[184.75px]"
          >
            <div
              className="flex bg-black
              xl:h-[52px]"
            >
              <div
                className="rounded-full bg-[#F43518] my-auto
                xl:w-[18px] xl:h-[18px] xl:ml-[19px]"
              ></div>
              <div
                className="rounded-full bg-[#FEB20E] my-auto
                xl:w-[18px] xl:h-[18px] xl:ml-[14px]"
              ></div>
              <div
                className="rounded-full bg-[#069154] my-auto
                xl:w-[18px] xl:h-[18px] xl:ml-[14px]"
              ></div>
            </div>
            <div
              className="bg-[#FFFFFF]
              xl:h-[236px]"
            >
              <p
                className="text-center font-archivo text-gray-200
                xl:text-[64px] xl:mt-[20px]"
              >
                ARKAVIDIA 8.0
              </p>
              <div
                className="divide-y border-black rounded-xl mx-auto
                xl:border-4 xl:mt-[5px] xl:mx-auto xl:h-[75px] xl:w-[428px]"
              >
                <div
                  className="bg-black mx-auto border-black
                  xl:border-4 xl:h-[64px] xl:w-[421px]"
                >
                  <p
                    className="text-center text-white
                    xl:text-[32px] xl:font-medium xl:my-auto"
                  >
                    IT & Informatics Festival
                  </p>
                </div>
                <div
                  className="bg-white rounded-b-xl
                  xl:h-[3px]"
                ></div>
              </div>
            </div>
          </div>
          <div
            className="
            xl:ml-[570px] xl:mt-[243px]"
          >
            <Image src={Image2} />
          </div>
        </div>
        <div
          className="text-center
          "
        >
          <button
            className="divide-y-transparent bg-black border-black text-center rounded-xl hover: active: transition-all 
            xl:border-4 xl:h-[100px] xl:w-[100px]
            "
          >
            <div
              className="bg-white rounded-lg
              xl:h-[80px] xl:mb-[30px]
              "
            >
              <p
                className="font-varela font-bold
                xl:text-[18px] xl:pt-[55px]"
              >
                Explore
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

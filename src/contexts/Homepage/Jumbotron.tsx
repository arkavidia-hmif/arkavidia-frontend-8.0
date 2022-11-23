import Image from 'next/image'
import Image1 from '@src/components/Images/cewe 2.png'
import Image2 from '@src/components/Images/Layer 2.png'
import ArrowDownAltIcon from '@src/components/Icon/ArrowDownAltIcon'

const Jumbotron = (): JSX.Element => {
  const handleExplore = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: window.innerHeight * 1.05,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className="bg-blue300"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #6979BE 2%, transparent 1%), linear-gradient(#6979BE 2%, transparent 1%)',
        backgroundSize: '80px 80px'
      }}
    >
    <div
      className="
        absolute left-[50px] top-[50px] z-5"
    >
      <Image src={Image1} />
    </div>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <div className="z-10 divide-y border-black border-4 mx-[410px] h-[296px] w-[694px] mt-[5rem]">
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
            className="bg-white
              xl:h-[236px]"
          >
            <p
              className="text-center font-archivo text-white xl:text-[64px] xl:mt-[20px]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
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
      </div>
      <div
          className="
            absolute top-[30vh] right-[50px] z-5"
        >
          <Image src={Image2} />
        </div>
      <div className="flex w-full justify-center">
        <div
          className="flex flex-col w-[80px] h-[80px] items-center justify-center box bg-white rounded-lg my-[30px] pl-[5px] shadow-buttonShadow cursor-pointer active:shadow-buttonPressed active:translate-y-[4px]"
          onClick={handleExplore}
        >
          <div className="animate-bounce mt-[10px]">
            <ArrowDownAltIcon
              color="black"
              size={25}
              style={{ marginLeft: '3px' }}
            />
          </div>
          <div className="font-varela font-bold text-[14px] mt-[5px]">
            Explore
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron

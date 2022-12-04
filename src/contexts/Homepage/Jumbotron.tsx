import Image from 'next/image'
import Image1 from '@src/assets/images/Homepage2.svg'
import Image2 from '@src/assets/images/Homepage1.svg'
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
        absolute z-5
        left-[30px] top-[115px] h-[150px] w-[150px]
        sm:left-[50px] sm:top-[120px] sm:h-[200px] sm:w-[200px]
        lg:left-[100px] lg:top-[135px] lg:h-[250px] lg:w-[250px]
        xl:left-[150px] xl:top-[150px] xl:h-[300px] xl:w-[300px]"
    >
      <Image src={Image1} />
    </div>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <div className="
          z-10 divide-y border-black border-4
          h-[170px] w-[320px] mt-[128px]
          sm:h-[200px] sm:w-[400px] sm:mt-[150px]
          lg:h-[250px] lg:w-[550px]
          xl:h-[296px] xl:w-[694px] xl:mt-[150px]">
          <div
            className="
              flex bg-black
              h-[25px]
              lg:h-[40px]
              xl:h-[52px]"
          >
            <div
              className="
                rounded-full bg-[#F43518] my-auto
                h-[10px] w-[10px] ml-[8px]
                lg:w-[14px] lg:h-[14px] lg:ml-[15px]
                xl:w-[18px] xl:h-[18px] xl:ml-[19px]"
            ></div>
            <div
              className="
                rounded-full bg-[#FEB20E] my-auto
                h-[10px] w-[10px] ml-[8px]
                lg:w-[14px] lg:h-[14px] lg:ml-[15px]
                xl:w-[18px] xl:h-[18px] xl:ml-[14px]"
            ></div>
            <div
              className="
                rounded-full bg-[#069154] my-auto
                h-[10px] w-[10px] ml-[8px]
                lg:w-[14px] lg:h-[14px] lg:ml-[15px]
                xl:w-[18px] xl:h-[18px] xl:ml-[14px]"
            ></div>
          </div>
          <div
            className="
              bg-white
              h-[137px]
              sm:h-[167px]
              lg:h-[202px]
              xl:h-[236px]"
          >
            <p
              className="
                text-center font-archivo text-white
                text-[34px] mt-[8px]
                sm:text-[43px] sm:mt-[17px]
                lg:text-[54px] lg:mt-[19px]
                xl:text-[64px] xl:mt-[20px]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
            >
              ARKAVIDIA 8.0
            </p>
            <div
              className="
                divide-y border-black mx-auto
                rounded-lg border-[4px] h-[45px] w-[210px] mt-[10px]
                sm:mt-[13px]
                lg:h-[58px] lg:w-[358px]
                xl:rounded-xl xl:border-4 xl:mt-[5px] xl:h-[75px] xl:w-[428px]"
            >
              <div
                className="
                  bg-black mx-auto border-black
                  rounded-t-md border-4 mt-[-1px] ml-[-1px] h-[37px] w-[205px]
                  lg:h-[50px] lg:w-[352px]
                  xl:border-4 xl:h-[64px] xl:w-[421px]"
              >
                <p
                  className="text-center text-white my-auto
                    text-[17px] font-normal
                    lg:text-[25px] lg:font-medium lg:mt-[-1px]
                    xl:text-[32px] xl:font-medium"
                >
                  IT & Informatics Festival
                </p>
              </div>
              <div
                className="bg-white rounded-b-xl
                  h-[3px]
                  xl:h-[3px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
          className="
            absolute z-5
            right-[30px] top-[61vh] h-[150px] w-[150px]
            sm:right-[50px] sm:top-[51vh] sm:h-[200px] sm:w-[200px]
            lg:right-[100px] lg:top-[43vh] lg:h-[250px] lg:w-[250px]
            xl:right-[150px] xl:top-[38vh] xl:h-[300px] xl:w-[300px]"
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
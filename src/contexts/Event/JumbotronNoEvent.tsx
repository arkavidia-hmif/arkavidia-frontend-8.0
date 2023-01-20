import Image from 'next/image'
import Image1 from '@src/assets/images/landing-jumbotron/landingfox.svg'
import Image2 from '@src/assets/images/landing-jumbotron/landingboy.svg'
import Image3 from '@src/assets/images/landing-jumbotron/whatson.svg'
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
      className="bg-[#FFB100]"
      style={{
        backgroundImage:
          'linear-gradient(45deg, #DF9800 25%, transparent 25%), linear-gradient(135deg, #DF9800 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #DF9800 75%),linear-gradient(135deg, transparent 75%, #DF9800 75%)',
        backgroundSize: '180px 180px',
        backgroundPosition: '0 0, 90px 0, 90px -90px, 0px 90px'
      }}>
      <div
        className="
        absolute z-5
        left-[30px] top-[115px] h-[150px] w-[150px]
        sm:left-[50px] sm:top-[150px] sm:h-[200px] sm:w-[200px]
        lg:left-[80px] lg:top-[180px] lg:h-[250px] lg:w-[250px]
        xl:left-[100px] xl:top-[200px] xl:h-[300px] xl:w-[300px]">
        <Image src={Image1} />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <div
          className="z-10
            mt-[30px] h-[100px] w-[250px]
            sm:top-[px] sm:h-[px] sm:w-[280px]
            lg:top-[px] lg:h-[px] lg:w-[370px]
            xl:mt-[-10px] xl:h-[50px] xl:w-[450px]">
          <Image src={Image3} />
        </div>
        <p
          className="
                z-10 text-center font-archivo text-white tracking-wider
                text-[34px] mt-[35px]
                sm:text-[43px] sm:mt-[50px]
                lg:text-[54px] lg:mt-[100px]
                xl:text-[80px] xl:mt-[200px]"
          style={{
            textShadow:
              '2px -2px 0 #000, -6px 6px 0 #000, -2px 4px 0 #000, -6px 6px 0px #000'
          }}>
          ARKAVIDIA
        </p>
        <div
          className=" z-10
                bg-black mx-auto mt-[10px]
                h-[37px] w-[160px]
                lg:h-[60px] lg:w-[260px]
                xl:h-[80px] xl:w-[380px] xl:mt-[10px]">
          <p
            className="text-center text-white font-archivo tracking-wider 
                  text-[25px] font-normal
                  lg:text-[38px] lg:font-medium
                  xl:text-[50px] xl:font-medium">
            EVENT
          </p>
        </div>
      </div>
      <div
        className="
            absolute z-5
            right-[30px] top-[61vh] h-[150px] w-[150px]
            sm:right-[50px] sm:top-[46vh] sm:h-[200px] sm:w-[200px]
            lg:right-[80px] lg:top-[38vh] lg:h-[250px] lg:w-[250px]
            xl:right-[100px] xl:top-[200px] xl:h-[300px] xl:w-[300px]">
        <Image src={Image2} />
      </div>
      <div className="flex w-full justify-center">
        <div
          className="flex flex-col w-[80px] h-[80px] items-center justify-center box bg-white rounded-lg my-[30px] pl-[5px] shadow-buttonShadow cursor-pointer active:shadow-buttonPressed active:translate-y-[4px]"
          onClick={handleExplore}>
          <div className="animate-bounce mt-[10px]">
            <ArrowDownAltIcon
              color="black"
              size={25}
              style={{ marginLeft: '3px' }}
            />
          </div>
          <div className="font-varela font-bold text-[14px] mt-[5px] text-center leading-tight">
            Explore Pre-Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron

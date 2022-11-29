import Image from 'next/image'
import Disk from '@src/assets/images/competition-disk.svg'
import Game from '@src/assets/images/game.svg'
import ArkavidiaStamp from '@src/assets/images/arkavidia-stamp-green.svg'

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
    <>
    <div className="bg-yellow300 relative">
      <div className="absolute left-0 top-0 w-[400px]">
        <Image src={Disk} />
      </div>
    <div className="flex flex-col w-full align-center bg-yellow300 pt-[8rem] mb-[-1rem] px-12 rounded-[55% 100%]">
      <div className="flex justify-center">
        <Image src={ArkavidiaStamp} />
      </div>
      <p
              className="text-center font-archivo text-white text-[84px] mt-[20px]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
            >
              COMPETITIONS
            </p>
            <div className="flex flex-col items-center justify-center w-full mt-[-2rem]">
            <div
              className="bg-black text-white font-[archivo] rotate-[-4.51deg]
              px-[80px] py-[7px] text-[24px] "
            >
              ADAPTIVE COLLABORATION
            </div>
            <div
              className="bg-black text-white font-[archivo] rotate-[-1.76deg]
              mt-[-5px] px-[100px] py-[7px] text-[24px] text-center"
            >
              TO ENCOUNTER  DIGITAL DISRUPTION
            </div>
          </div>
          <div className='flex justify-center mt-[3rem]'>
            <div className='flex justify-center items-center px-[20px] py-[12px] bg-blue400 text-white text-helvatica text-bold rounded-[12px] w-1/3 cursor-pointer' onClick={handleExplore}>
            Explore more!
            </div>
          </div>
    </div>
    <div className="absolute right-0 bottom-[-10rem]">
        <Image src={Game} />
      </div>
    </div>
    <svg viewBox="0 0 1440 320"><path fill="#FEB20E" d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,176C672,213,768,235,864,240C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}

export default Jumbotron

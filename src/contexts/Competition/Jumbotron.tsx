import Image from 'next/image'
import SmallDisk from '@src/assets/images/competition-disk-small.svg'
import LargeDisk from '@src/assets/images/competition-disk-large.svg'
import SmallGame from '@src/assets/images/game-small.svg'
import LargeGame from '@src/assets/images/game-large.svg'
import SmallArkavidiaStamp from '@src/assets/images/arkavidia-stamp-green-small.svg'
import LargeArkavidiaStamp from '@src/assets/images/arkavidia-stamp-green-large.svg'
import { useState, useEffect } from 'react'

const Jumbotron = (): JSX.Element => {
  const handleExplore = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: window.innerHeight * 1.05,
        behavior: 'smooth'
      })
    }
  }

  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      const handleResize = (): void => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="bg-yellow300 relative">
        <div className="absolute left-0 top-0 w-[400px]">
          <Image src={windowWidth >= 768 ? LargeDisk : SmallDisk} />
        </div>
        <div className="flex flex-col w-full align-center bg-yellow300 pt-[9rem] mb-[-1rem] px-12 rounded-[55% 100%] md:pt-[8rem]">
          <div className="flex justify-center">
            <Image
              src={
                windowWidth >= 768 ? LargeArkavidiaStamp : SmallArkavidiaStamp
              }
            />
          </div>
          <p
            className="text-center font-archivo text-white text-[28px] mt-[20px] z-10 md:text-[56px] lg:text-[84px]"
            style={
              windowWidth >= 768
                ? {
                    textShadow:
                      '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
                  }
                : {
                    textShadow:
                      '0px 0px 0 #000, 4px -1px 0 #000, 0px 2px 0 #000, 4px 2px 0px #000'
                  }
            }>
            COMPETITIONS
          </p>
          <div className="flex flex-col items-center justify-center w-full z-20 mt-[-0.5rem] md:mt-[-1rem] lg:mt-[-2rem]">
            <div
              className="bg-black text-white font-[archivo] rotate-[-4.51deg]
              px-[20px] py-[2px] text-[8px] md:text-[18px] md:px-[50px] md:py-[4px] lg:px-[100px] lg:py-[7px]">
              ADAPTIVE COLLABORATION
            </div>
            <div
              className="bg-black text-white font-[archivo] rotate-[-1.76deg] px-[20px] py-[2px] text-[8px] text-center md:text-[18px] md:px-[40px] md:py-[4px] lg:px-[100px] lg:py-[7px]">
              TO ENCOUNTER DIGITAL DISRUPTION
            </div>
          </div>
          <div className="flex justify-center mt-[2rem] md:mt-[3rem]">
            <div
              className="flex justify-center items-center px-[24px] py-[8px] bg-blue400 text-white text-helvatica text-bold text-xs rounded-[12px] min-w-[129px] w-1/3 cursor-pointer md:px-[20px] md:py-[12px] md:text-base"
              onClick={handleExplore}>
              Explore more!
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-[-5rem] z-10 md:bottom-[-10rem]">
          <Image src={windowWidth >= 768 ? LargeGame : SmallGame} />
        </div>
      </div>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#FEB20E"
          d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,176C672,213,768,235,864,240C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </>
  )
}

export default Jumbotron

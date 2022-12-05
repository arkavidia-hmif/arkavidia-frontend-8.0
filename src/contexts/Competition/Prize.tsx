import Image from 'next/image'
import Tapes from '@src/assets/images/tapes.svg'
import Star from '@src/assets/images/star.svg'
import { useState, useEffect } from 'react'

const Prize = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect((): void => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      const handleResize = (): void => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }
  })

  return (
    <div className="flex flex-col w-full bg-white relative">
      <div className="absolute top-0 left-2 min-w-[36px] w-[10vw] md:left-10">
        <Image src={Star} />
      </div>
      <p className="text-center text-[24px] font-archivo md:mt-[5px] md:text-[44px] lg:text-[64px]">
        PRIZES POOL
      </p>
      <p
        className="text-center font-archivo text-[24px] text-cream300 mb-[-2rem] mt-[10px] md:mb-[-5rem] md:text-[54px] lg:text-[84px]"
        style={
          windowWidth >= 1028
            ? {
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }
            : windowWidth >= 768
            ? {
              textShadow:
                  '-2px -2px 0 #000, 3px -2px 0 #000, -2px 3px 0 #000, 3px 3px 0px #000'
            }
            : {
                textShadow:
                  '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0px #000'
              }
        }>
        Rp75.000.000++
      </p>
      <div className="absolute bottom-6 right-2 min-w-[36px] w-[10vw] md:bottom-14 md:right-10">
        <Image src={Star} />
      </div>
      <div className="relative bottom-0 translate-y-1/2 w-full z-[5]">
        <Image src={Tapes} />
      </div>
    </div>
  )
}

export default Prize

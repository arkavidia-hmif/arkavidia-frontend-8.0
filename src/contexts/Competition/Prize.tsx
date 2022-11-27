import Image from 'next/image'
import Tapes from '@src/assets/images/tapes.svg'
import Star from '@src/assets/images/star.svg'

const Prize = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white relative">
      <div className="absolute top-0 left-10">
        <Image src={Star} />
      </div>
      <p className="text-center text-[64px] mt-[5px] font-archivo">PRIZES POOL</p>
      <p
              className="text-center font-archivo text-cream300 text-[84px] mt-[10px] mb-[-5rem]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
            >
              Rp75.000.000++
            </p>
            <div className="absolute bottom-14 right-10">
        <Image src={Star} />
      </div>
      <div className="relative bottom-[-8rem] w-full z-[5]">
        <Image src={Tapes} />
      </div>
    </div>
  )
}

export default Prize

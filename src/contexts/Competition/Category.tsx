import Image from 'next/image'
import { useRouter } from 'next/router'
import Star from '@src/assets/images/star.svg'
import ArkalogicaLogo from '@src/assets/images/LogoArkalogica.svg'
import CPLogo from '@src/assets/images/LogoCP.svg'
import DatavidiaLogo from '@src/assets/images/LogoDatavidia.svg'
import UXVidiaLogo from '@src/assets/images/LogoUXVidia.svg'

const Category = (): JSX.Element => {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full bg-gray400 pt-[3rem] relative pb-[5rem] z-0 md:pt-[10rem]">
      <div className="absolute min-w-[69px] w-[8vw] max-w-[120px] z-40 bottom-4 left-[4%] rotate-[19.57deg] md:w-[120px] md:top-[55%] md:z-0">
        <Image src={Star} />
      </div>
      <p className="text-center text-[24px] mt-4 font-archivo sm:mt-8 md:mt-0 lg:mt-8 md:text-[64px]">CATEGORY</p>
      <div className="mx-auto grid grid-cols-[134px_124px] mt-8 grid-rows-[129px_114px] justify-items-center items-center md:w-fit md:px-[3rem] md:flex md:justify-center">
        <div
          className="min-w-[139px] w-1/4 rotate-[-5.95deg] self-end mr-[-15px] z-[5] cursor-pointer hover:scale-110 hover:z-[10] md:self-auto"
          onClick={() => router.push('competition/competitive-programming')}>
          <Image src={CPLogo} />
        </div>
        <div
          className="min-w-[116px] w-1/5 rotate-[16.1deg] z-[2] cursor-pointer hover:scale-110 hover:z-[10]"
          onClick={() => router.push('competition/uxvidia')}>
          <Image src={UXVidiaLogo} />
        </div>
        <div
          className="min-w-[123px] w-1/5 rotate-[-11.95deg] justify-self-start z-[6] cursor-pointer hover:scale-110 hover:z-[10] md:z-[1] md:justify-self-auto"
          onClick={() => router.push('competition/datavidia')}>
          <Image src={DatavidiaLogo} />
        </div>
        <div
          className="min-w-[165px] w-1/4 rotate-[3.63deg] ml-[-15px] z-[3] cursor-pointer hover:scale-110 hover:z-[10] md:z-[0]"
          onClick={() => router.push('competition/arkalogica')}>
          <Image src={ArkalogicaLogo} />
        </div>
      </div>
      <div className="absolute min-w-[69px] w-[8vw] max-w-[120px] top-20 right-[1%] rotate-[-25.43deg] z-40 md:rotate-[19.57deg] md:top-[40%] md:w-[120px]">
        <Image src={Star} />
      </div>
    </div>
  )
}

export default Category

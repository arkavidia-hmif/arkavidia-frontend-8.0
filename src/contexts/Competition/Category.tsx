import Image from 'next/image'
import { useRouter } from 'next/router'
import Star from '@src/assets/images/star.svg'
import ArkalogicaLogo from '@src/assets/images/LogoArkalogica.svg'
import CPLogo from '@src/assets/images/LogoCP.svg'
import DatavidiaLogo from '@src/assets/images/LogoDatavidia.svg'
import UXVidiaLogo from '@src/assets/images/LogoUXvidia.svg'

const Category = (): JSX.Element => {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full bg-gray400 relative pt-[10rem] pb-[5rem] z-0">
      <div className="absolute w-[120px] top-[55%] left-[4%] rotate-[19.57deg]">
        <Image src={Star} />
      </div>
      <p className="text-center text-[64px] mt-[5px] font-archivo">CATEGORY</p>
      <div className="flex justify-center items-center px-[3rem]">
        <div className="w-1/4 rotate-[-5.95deg] mr-[-15px] z-[5] cursor-pointer hover:scale-110 hover:z-[10]" onClick={() => router.push('competition/competitive-programming')}>
          <Image src={CPLogo} />
        </div>
        <div className="w-1/5 rotate-[16.1deg] mt-[50px] z-[2] cursor-pointer hover:scale-110 hover:z-[10]" onClick={() => router.push('competition/uxvidia')}>
          <Image src={UXVidiaLogo} />
        </div>
        <div className="w-1/5 rotate-[-11.95deg] z-[1] cursor-pointer hover:scale-110 hover:z-[10]" onClick={() => router.push('competition/datavidia')}>
          <Image src={DatavidiaLogo} />
        </div>
        <div className="w-1/4 rotate-[3.63deg] ml-[-15px] z-[0] cursor-pointer hover:scale-110 hover:z-[10]" onClick={() => router.push('competition/arkalogica')}>
          <Image src={ArkalogicaLogo} />
        </div>
      </div>
      <div className="absolute w-[120px] top-[40%] right-[1%] rotate-[19.57deg]">
        <Image src={Star} />
      </div>
    </div>
  )
}

export default Category

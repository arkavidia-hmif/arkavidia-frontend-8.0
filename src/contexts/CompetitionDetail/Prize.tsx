import Image from 'next/image'
import Trophy from '@src/assets/images/trophy.svg'
import Disk from '@src/assets/images/disks.svg'
import Star from '@src/assets/images/prize-stars.svg'
import clsx from 'clsx'

interface IPrizeContext {
  title: string;
  prize: string;
  bgColor: string;
}

const Prize = ({prizes} : {prizes:IPrizeContext[]}): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-center items-center px-12 py-[5rem] bg-blue400 relative">
      <div className="absolute top-[-15%]">
        <Image src={Disk} />
      </div>
      <div className="absolute top-5">
        <Image src={Star} />
      </div>
      <p className="text-center text-[64px] mb-[2rem] font-archivo text-white">PRIZE</p>
      <div className="flex justify-center gap-x-5 w-full">
      <div className="h-screen">
        <Image src={Trophy} />
      </div>
      <div className="flex flex-col gap-y-5 w-full">
        {prizes?.map((p, i) => (
        <div className={clsx("flex flex-col justify-center items-center text-white font-archivo bg-red400 border-solid border-8 border-grayblack pt-2", p.bgColor)} key={i}>
            <p className="text-[24px]">{p.title}</p>
            <p className="text-[48px]">{p.prize}</p>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Prize;

import Image from 'next/image'
import Star from '@src/assets/images/3star.svg'
import Gameboy from '@src/assets/images/gameboy.svg'
import CustomButton from '@src/components/CustomButton/CustomButton'
import { useRouter } from 'next/router'
import { store } from '@src/redux/store/index';

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;


interface IJumbotronCompe {
  logo: StaticImport
  title: string;
  description: string;
}

const Jumbotron = ({logo,title, description} :IJumbotronCompe) => {
  const router = useRouter();
  const isLogin = store.getState()?.auth?.token == null ? false : true;

  const handleRegister = () => {
    if(isLogin) router.push(router.pathname + '/registration');
    else router.push('sign-in');
  }

  return (
  <div className="flex flex-col w-full pt-[8rem] pb-[5rem] justify-center items-center bg-yellow300 relative"       
  style={{
    backgroundImage:
      'linear-gradient(90deg, #0B0A0A 2%, transparent 1%), linear-gradient(#0B0A0A 2%, transparent 1%)',
    backgroundSize: '80px 80px'
  }}>
    <div className="flex justify-center w-1/5">
      <Image src={logo} />
    </div>
    <div className="bg-white flex flex-col items-center justify-center p-8 w-1/2 mt-[-3rem] pt-[4rem]">
    <p
              className="text-center font-archivo text-white text-[54px]"
              style={{
                textShadow:
                '-2px -2px 0 #000, 2px -3px 0 #000, -2px 2px 0 #000, 3px 4px 0px #000'
              }}
            >
              {title}
            </p>
            <p className="text-center font-helvatica mt-5">
            {description}
            </p>
    <div className="flex gap-3 w-full items-center justify-center mt-8">
        <CustomButton bgColor='ghost' size='normal'>
          <a href="https://drive.google.com/file/d/112TOCLLWU_kwnToIdbDsRWs7a-Ed2851/view" style={{ textDecoration: 'none' }} target="_blank">
          <div className="py-[10px] px-[20px]">
            Download Guidebook
          </div>
          </a>
          </CustomButton>
        <CustomButton bgColor='primary' size='normal' onClick={handleRegister}>
          <div className="py-[10px] px-[50px]">
          Register Now
          </div>
          </CustomButton>
    </div>
    </div>
      <div className="absolute top-20 left-10 rotate-[19.57deg]">
        <Image src={Star} />
      </div>
      <div className="absolute bottom-20 right-[-15%] rotate-[-8.57deg]">
        <Image src={Gameboy} />
      </div>
  </div>
  )
}

export default Jumbotron;
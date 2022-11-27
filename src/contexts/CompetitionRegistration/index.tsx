import React, { useState } from 'react'
import Image from 'next/image'
import { competitionRegistration } from '@src/services/team'
import { useRouter } from 'next/router';
import Toast from '@src/components/Toast'

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

interface ICompetitionRegistration {
  image: string | StaticImport;
  title: string;
  params: string;
  desc: string
}

const CompetitionRegistration = ({image, title, params, desc}: ICompetitionRegistration) => {
  const router = useRouter();

  const [toastList, setToastList] = useState<JSX.Element[]>([]);

  const handleShowToast = (res : string) => {
    setToastList([...toastList, <Toast timer={3000} label={res == 'SUCCESS' ? 'Berhasil daftar kompetisi!' : 'Gagal mendaftar! Pastikan Anda tidak mendaftar lebih dari 1 kompetisi.' } type={res == 'SUCCESS' ? 'success' : 'danger'} position={'top'} />]);
  }

  const handleOnRegisterCompe = async () => {
    const response = await competitionRegistration(params);
    handleShowToast(response);
    if(response === 'SUCCESS') router.push('/dashboard')
  }




  return (
      <div className="pr-12 pl-12 pt-5 pb-3 bg-gray200">
        <div className="flex justify-center align-center pt-[5rem]">
          <div className="w-1/3 flex justify-center items-center pt-16">
            <Image src={image} />
          </div>
          <div className="w-1/2 pl-16">
            <div className="flex justify-center pb-8">
            <p
              className="text-center font-archivo text-white text-[48px] mt-[20px]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
            >
              Registration
            </p>
            </div>
            <div className="flex pl-8 pr-8 pt-2 pb-2 mb-5 font-archivo bg-black text-white text-[24px] text-center justify-center">
              {title}
          </div>
            <div className="p-8 bg-white rounded-xl drop-shadow">
              <p className="font-helvatica pb-2">{desc}</p>
            </div>
            <div className="flex justify-end mt-5">
            <button className="rounded-xl flex items-center justify-center mb-2 bg-blue300 hover:bg-blue200 hover:drop-shadow-xl active:bg-blue400 disabled:bg-gray300 disabled:opacity-50 w-1/3 h-12" onClick={handleOnRegisterCompe}>
              <div className="flex items-center justify-center font-helvatica font-bold text-base text-white px-8">
                <div className="text-white">Daftar</div>
              </div>
            </button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default CompetitionRegistration

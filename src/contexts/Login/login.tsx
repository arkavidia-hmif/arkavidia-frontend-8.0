import CustomButton from '@src/components/CustomButton/CustomButton'
import Layout from '@src/components/Navigation/Layout'
import { TextField } from '@src/components/TextField'
import kolaborasi from '@src/assets/images/carousel-image/kolaborasi.svg'
import piala from '@src/assets/images/carousel-image/piala.svg'
import roket from '@src/assets/images/carousel-image/roket.svg'
import buttonFilled from '@src/assets/button-radio/radio-filled.svg'
import buttonUnfill from '@src/assets/button-radio/radio-unfill.svg'
import Image from 'next/image'
import React, { useState } from 'react'
import Fox from '@src/assets/images/sign-in/fox.png'


interface ILoginContext {}
const Login: React.FC<ILoginContext> = () => {
  const [pos, setPos] = useState(0)

  let autoLoop = setInterval(() => {
    setPos(pos + 1)
    if (pos == 2) {
      setPos(0)
    }
  }, 4000)
  return (
    <Layout title="Sign In" description="Sign In">
      <div className="flex flex-row justify-between w-full">
        {/* Sisi Kiri */}

        {/* <div className="container hidden md:flex flex-col justify-center items-center gap-[3.75rem] w-1/2 bg-yellow300 pt-[5rem]">
          // Image Container
          <div className="h-[360px] w-[300px] lg:h-[480px] lg:w-[400px]">
            <Image src={Rocket} />
          </div>

          // Text
          <div className="flex flex-col gap-4">
            <h1 className="font-archivo font-black text-6xl text-center">
              Eksplorasi
            </h1>
            <p className="font-archivo font-black text-5xl text-center">Kemampuanmu!</p>
          </div>

          // Dots Container
          <div className="h-[12px] w-[120px] " />
        </div> */}
        <div className="box-border border-solid w-[50%] bg-yellow300 items-center inline-flex justify-center">
            <div
              id="default-carousel"
              className="relative"
              data-carousel="slide"
            >
              <div className="relative h-auto overflow-hidden">
                <div
                  className={`content duration-1000 ease-in-out ${
                    pos === 0 ? 'content' : 'hidden'
                  }`}
                  data-carousel-item
                >
                  <div className="flex justify-center">
                    <Image src={roket} />
                  </div>
                  <div className="flex justify-center w-[422px] items-center mt-[62px]">
                    <h2 className="font-archivo font-black text-[36px] text-center leading-10">
                      Explorasi Kemampuanmu!
                    </h2>
                  </div>
                </div>

                <div
                  className={`content duration-1000 ease-in-out ${
                    pos === 1 ? 'content' : 'hidden'
                  }`}
                  data-carousel-item
                >
                  <div className="flex justify-center">
                    <Image src={kolaborasi} />
                  </div>
                  <div className="flex justify-center w-[422px] items-center mt-[62px]">
                    <h2 className="font-archivo font-black text-[36px] text-center leading-10">
                      Berkolaborasi Untuk Masa Depan!
                    </h2>
                  </div>
                </div>

                <div
                  className={`content duration-1000 ease-in-out ${
                    pos === 2 ? 'content' : 'hidden'
                  }`}
                  data-carousel-item
                >
                  <div className="flex justify-center">
                    <Image src={piala} />
                  </div>
                  <div className="flex justify-center w-[422px] items-center mt-[62px]">
                    <h2 className="font-archivo font-black text-[36px] text-center leading-10">
                      Raih Peluang Menjadi Juara!
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-[62px]">
                <div className="cursor-pointer pl-1 pr-1">
                  <Image
                    src={pos === 0 ? buttonFilled : buttonUnfill}
                    onClick={() => {
                      setPos(0)
                      clearInterval(autoLoop)
                    }}
                  />
                </div>
                <div className="cursor-pointer pl-1 pr-1">
                  <Image
                    src={pos === 1 ? buttonFilled : buttonUnfill}
                    onClick={() => {
                      setPos(1)
                      clearInterval(autoLoop)
                    }}
                  />
                </div>
                <div className="cursor-pointer pl-1 pr-1">
                  <Image
                    src={pos === 2 ? buttonFilled : buttonUnfill}
                    onClick={() => {
                      setPos(2)
                      clearInterval(autoLoop)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        {/* Sisi Kanan */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 px-5 md:px-[80px] container py-[5rem]">
          {/* Image Container */}
          <div className="h-[167px] w-[167px]">
            <Image src={Fox} />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="z-10 font-archivo text-2xl md:text-4xl text-center md:w-[200px] font-black text-white py-1 px-6 md:py-2 md:px-10 bg-black rotate-[7deg] -mb-[0.125rem]">
              Hello
            </h1>
            <h1 className="z-0 font-archivo text-2xl md:text-4xl text-center md:w-[336px] font-black text-white py-1 px-6 md:py-2 md:px-6 bg-black">
              Arkavidians!
            </h1>
          </div>
          {/* Login Container */}
          <h1 className="font-archivo font-black text-4xl md:text-6xl">
            Sign - In
          </h1>
          <div className="flex flex-col w-full gap-3">
            <label className="font-helvatica font-bold text-base">
              Username
            </label>
            <TextField externalState="" setExternalState={() => null} />
            <div />
            <label className="font-helvatica font-bold text-base">
              Password
            </label>
            <TextField
              ftype="show"
              externalState=""
              setExternalState={() => null}
            />
            <p className="font-helvatica font-bold text-red300 text-[14px]">
              Lupa password?
            </p>
            <CustomButton bgColor="primary" size="normal">
              Login
            </CustomButton>
            <p className="font-helvatica font-normal text-[14px] text-center">
              Belum punya akun?{' '}
              <a href='/sign-up'><span className="text-red300 font-bold">Daftar sekarang!</span></a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login

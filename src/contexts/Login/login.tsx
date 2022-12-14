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
import Fox from '@src/assets/images/sign-in/fox.svg'
import { TeamLoginReq } from '@src/types/team'
import { login } from '@src/services/auth'
import Toast from '@src/components/Toast'
// import { useRouter } from 'next/router'

// interface ILoginContext {}
const Login = () => {
  const [pos, setPos] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toastList, setToastList] = useState<JSX.Element[]>([])
  const [loading, setLoading] = useState(false)

  const handleShowToast = (res: string) => {
    setToastList([
      ...toastList,
      <Toast
        timer={3000}
        label={
          res == 'SUCCESS'
            ? 'Berhasil masuk!'
            : 'Gagal masuk! Mohon cek username dan password Anda.'
        }
        type={res == 'SUCCESS' ? 'success' : 'danger'}
        position={'top'}
        key={Math.random()}
      />
    ])
  }

  // const router = useRouter();

  const handleOnLogin = async () => {
    setLoading(true)
    const payload = {
      username: username,
      password: password
    } as TeamLoginReq
    const response = await login(payload)
    handleShowToast(response)
    setInterval(() => {
      setLoading(false)
      if (response === 'SUCCESS') window.location.href = '/competition'
    }, 1000)
  }

  const autoLoop = setTimeout(() => {
    if (pos == 2) {
      setPos(0)
    } else {
      setPos(pos + 1)
    }
  }, 4000)

  return (
    <>
      {toastList}
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
              data-carousel="slide">
              <div className="relative h-auto overflow-hidden">
                <div
                  className={`content duration-1000 ease-in-out ${
                    pos === 0 ? 'content' : 'hidden'
                  }`}
                  data-carousel-item>
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
                  data-carousel-item>
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
                  data-carousel-item>
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
                      clearTimeout(autoLoop)
                    }}
                  />
                </div>
                <div className="cursor-pointer pl-1 pr-1">
                  <Image
                    src={pos === 1 ? buttonFilled : buttonUnfill}
                    onClick={() => {
                      setPos(1)
                      clearTimeout(autoLoop)
                    }}
                  />
                </div>
                <div className="cursor-pointer pl-1 pr-1">
                  <Image
                    src={pos === 2 ? buttonFilled : buttonUnfill}
                    onClick={() => {
                      setPos(2)
                      clearTimeout(autoLoop)
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
              <TextField
                width={'w-full'}
                externalState={username}
                setExternalState={setUsername}
                placeholder="Username"
              />
              <div />
              <label className="font-helvatica font-bold text-base">
                Password
              </label>
              <TextField
                ftype="show"
                width={'w-full'}
                externalState={password}
                setExternalState={setPassword}
                placeholder="Password"
              />
              {/* <p className="font-helvatica font-bold text-red300 text-[14px]">
              Lupa password?
            </p> */}
              <div className="mt-[30px]" />
              <CustomButton
                bgColor="primary"
                size="full"
                onClick={handleOnLogin}>
                <div className="flex items-center">
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    <div className="w-[470px]">Login</div>
                  )}
                </div>
              </CustomButton>
              <p className="font-helvatica font-normal text-[14px] text-center">
                Belum punya akun?{' '}
                <a href="/sign-up">
                  <span className="text-red300 font-bold">
                    Daftar sekarang!
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Login

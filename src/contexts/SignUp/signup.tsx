import React, { useState } from 'react'
import { TextField } from '@src/components/TextField/index'
import CustomButton from '@src/components/CustomButton/CustomButton'
import kolaborasi from '@src/assets/images/carousel-image/kolaborasi.svg'
import piala from '@src/assets/images/carousel-image/piala.svg'
import roket from '@src/assets/images/carousel-image/roket.svg'
import buttonFilled from '@src/assets/button-radio/radio-filled.svg'
import buttonUnfill from '@src/assets/button-radio/radio-unfill.svg'
import Image from 'next/image'
import Toast from '@src/components/Toast'
import { TeamRegisterReq } from '@src/types/team'
import { MemberList } from '@src/types/participant'
import { register } from '@src/services/auth'
// import { useRouter } from 'next/router'

const SignUp = (): JSX.Element => {
  const [pos, setPos] = useState(0)
  const [username, setUsername] = useState('')
  const [teamName, setTeamName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [teamLeader, setTeamLeader] = useState('')
  const [leaderEmail, setLeaderEmail] = useState('')
  const [member1, setMember1] = useState('')
  const [member1Email, setMember1Email] = useState('')
  const [member2, setMember2] = useState('')
  const [member2Email, setMember2Email] = useState('')
  const [loading, setLoading] = useState(false)

  const [toastList, setToastList] = useState<JSX.Element[]>([])

  // const router = useRouter();

  const validation = () => {
    if (
      !username ||
      !teamName ||
      !password ||
      !confirmPass ||
      !teamLeader ||
      !leaderEmail ||
      !member1 ||
      !member1Email
    ) {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Mohon lengkapi form!'}
          type={'danger'}
          position={'top'}
          key={'toast1'}
        />
      ])
      return false
    }
    if ((member2 && !member2Email) || (member2 && !member2Email)) {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Mohon lengkapi form!'}
          type={'danger'}
          position={'top'}
          key={'toast2'}
        />
      ])
      return false
    }
    if (password !== confirmPass) {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Password tidak sesuai dengan konfirmasi!'}
          type={'danger'}
          position={'top'}
          key={'toast3'}
        />
      ])
      return false
    }
    return true
  }

  const handleOnRegister = async () => {
    if (validation()) {
      setLoading(true)
      const memberList = [
        {
          name: teamLeader,
          email: leaderEmail,
          career_interest: [],
          role: 'leader'
        },
        {
          name: member1,
          email: member1Email,
          career_interest: [],
          role: 'member'
        }
      ] as MemberList[]
      if (member2 && member2Email) {
        memberList.push({
          name: member2,
          email: member2Email,
          career_interest: [],
          role: 'member'
        })
      }
      const payload = {
        username: username,
        password: password,
        team_name: teamName,
        member_list: memberList
      } as TeamRegisterReq
      const res = await register(payload)
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={
            res === 'SUCCESS' ? (
              'Berhasil daftar!'
            ) : (
              <>
                Please fill this form for alternative signup/registration if you
                are experiencing issues:{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTii0F2iEsHCObkS1FVdUi1uewwrDopTD9e7StxYE4o7Owdw/viewform"
                  target="_blank"
                  style={{ textDecoration: 'underline' }}>
                  bit.ly/TemporaryFormArkavidia
                </a>
              </>
            )
          }
          type={res === 'SUCCESS' ? 'success' : 'danger'}
          position={'top'}
          key={'toast5'}
        />
      ])
      setInterval(() => {
        setLoading(false)
        if (res === 'SUCCESS') window.location.href = '/competition'
      }, 1000)
    }
  }

  const autoLoop = setTimeout(() => {
    setPos(pos + 1)
    if (pos === 2) {
      setPos(0)
    }
  }, 4000)

  return (
    <>
      {toastList}
      <div className="flex justify-center">
        <div className="container xl-auto box-border flex max-w-[100vw] h-auto md:h-[1080px] m-0 bg-gray200">
          <div className="hidden md:inline-flex box-border border-solid w-[50%] bg-yellow300 items-center justify-center">
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
          </div>{' '}
          {/* HERE */}
          <div className="box-border border-solid md:w-[50%] h-auto font-helvatica pt-40 pb-20 md:mt-0">
            <div className="w-[100%] flex justify-center mb-5 ">
              <h1 className="font-archivo text-6xl">Sign Up</h1>
            </div>

            {/* FIELDS */}

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Username</h2>
                <div className="">
                  <TextField
                    externalState={username}
                    setExternalState={setUsername}
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="m-2">
                <h2>Nama Tim</h2>
                <div>
                  <TextField
                    externalState={teamName}
                    setExternalState={setTeamName}
                    placeholder="Nama Tim"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Password</h2>
                <div>
                  <TextField
                    ftype="show"
                    externalState={password}
                    setExternalState={setPassword}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="m-2">
                <h2>Konfirmasi Password</h2>
                <div>
                  <TextField
                    ftype="show"
                    externalState={confirmPass}
                    setExternalState={setConfirmPass}
                    placeholder="Konfirmasi Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Nama Ketua Tim</h2>
                <div>
                  <TextField
                    externalState={teamLeader}
                    setExternalState={setTeamLeader}
                    placeholder="Nama Ketua Tim"
                  />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Ketua Tim</h2>
                <div>
                  <TextField
                    externalState={leaderEmail}
                    setExternalState={setLeaderEmail}
                    placeholder="Email Ketua Tim"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Nama Anggota 1</h2>
                <div>
                  <TextField
                    externalState={member1}
                    setExternalState={setMember1}
                    placeholder="Nama Anggota 1"
                  />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Anggota 1</h2>
                <div>
                  <TextField
                    externalState={member1Email}
                    setExternalState={setMember1Email}
                    placeholder="Email Anggota 1"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Nama Anggota 2</h2>
                <div>
                  <TextField
                    externalState={member2}
                    setExternalState={setMember2}
                    placeholder="Nama Anggota 2"
                  />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Anggota 2</h2>
                <div>
                  <TextField
                    externalState={member2Email}
                    setExternalState={setMember2Email}
                    placeholder="Email Anggota 2"
                  />
                </div>
              </div>
            </div>

            {/* END FIELDS */}

            <div className="flex justify-center px-14 md:px-12 text-[12px]">
              <p className="text-red300 font-helvatica font-bold">
                *Anggota 2 bersifat opsional, khusus untuk lomba Arkalogica, 1
                tim hanya boleh berisi 2 orang
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <CustomButton
                bgColor="primary"
                icon={false}
                size="normal"
                onClick={handleOnRegister}>
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
                    <div className="w-[210px] md:w-[470px]">Sign Up</div>
                  )}
                </div>
              </CustomButton>
            </div>

            <div className="flex justify-center text-sm font-helvatica mt-1">
              <h2>
                Sudah punya akun?{' '}
                <a href="/sign-in" className="text-red300 font-bold">
                  Login!
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp

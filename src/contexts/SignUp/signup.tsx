import React, { FC, useState } from 'react'
import { TextField } from '@src/components/TextField/index'
import CustomButton from '@src/components/CustomButton/CustomButton'
import kolaborasi from '@src/assets/images/carousel-image/kolaborasi.svg'
import piala from '@src/assets/images/carousel-image/piala.svg'
import roket from '@src/assets/images/carousel-image/roket.svg'
import buttonFilled from '@src/assets/button-radio/radio-filled.svg'
import buttonUnfill from '@src/assets/button-radio/radio-unfill.svg'
import Image from 'next/image'
import Toast from '@src/components/Toast'
import { TeamRegisterReq } from '@src/types/team';
import { MemberList } from '@src/types/participant'
import { register } from '@src/services/auth';
import { useRouter } from 'next/router'

const SignUp = (): JSX.Element => {
  const [pos, setPos] = useState(0);
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [member1, setMember1] = useState("");
  const [member1Email, setMember1Email] = useState("");
  const [member2, setMember2] = useState("");
  const [member2Email, setMember2Email] = useState("");

  const [toastList, setToastList] = useState<JSX.Element[]>([]);

  const router = useRouter();


  const validation = () => {
    if (!username || !teamName || !password || !confirmPass || !teamLeader || !leaderEmail || !member1 || !member1Email) {
      setToastList([...toastList, <Toast timer={3000} label={'Mohon lengkapi form!'} type={'danger'} position={'top'} />]);
      return false;
    }
    if ((member2 && !member2Email) || (member2 && !member2Email)) {
      setToastList([...toastList, <Toast timer={3000} label={'Mohon lengkapi form!'} type={'danger'} position={'top'} />]);
      return false;
    }
    if (password !== confirmPass) {
      setToastList([...toastList, <Toast timer={3000} label={'Password tidak sesuai dengan konfirmasi!'} type={'danger'} position={'top'} />]);
      return false;
    }
    return true;
  }

  const handleOnRegister = async () => {
    if (validation()) {
      const memberList = [
        {
          name: teamLeader,
          email: leaderEmail,
          career_interest: [],
          role: "leader"
        },
        {
          name: member1,
          email: member1Email,
          career_interest: [],
          role: "member"
        }
      ] as MemberList[];
      if (member2 && member2Email) memberList.push({ name: member2, email: member2Email, career_interest: [], role: "member" })
      const payload = {
        username: username,
        password: password,
        team_name: teamName,
        member_list: memberList,
      } as TeamRegisterReq
      const res = await register(payload);
      console.log(res)
      setToastList([...toastList, <Toast timer={3000} label={res == 'SUCCESS' ? 'Berhasil daftar!' : res ?? 'Gagal!'} type={res == 'SUCCESS' ? 'success' : 'danger'} position={'top'} />]);
      setInterval(() => {
        if (res === 'SUCCESS') router.push('/competition')
      }, 1000);
    }
  }

  let autoLoop = setTimeout(() => {
    setPos(pos + 1)
    if (pos == 2) {
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
              data-carousel="slide"
            >
              <div className="relative h-auto overflow-hidden">
                <div
                  className={`content duration-1000 ease-in-out ${pos === 0 ? 'content' : 'hidden'
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
                  className={`content duration-1000 ease-in-out ${pos === 1 ? 'content' : 'hidden'
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
                  className={`content duration-1000 ease-in-out ${pos === 2 ? 'content' : 'hidden'
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
          </div> {/* HERE */}
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
                    placeholder="Username" />
                </div>
              </div>
              <div className="m-2">
                <h2>Nama Tim</h2>
                <div>
                  <TextField
                    externalState={teamName}
                    setExternalState={setTeamName}
                    placeholder="Nama Tim" />
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
                    placeholder="Nama Ketua Tim" />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Ketua Tim</h2>
                <div>
                  <TextField
                    externalState={leaderEmail}
                    setExternalState={setLeaderEmail}
                    placeholder="Email Ketua Tim" />
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
                    placeholder="Nama Anggota 1" />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Anggota 1</h2>
                <div>
                  <TextField
                    externalState={member1Email}
                    setExternalState={setMember1Email}
                    placeholder="Email Anggota 1" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center font-bold text-base">
              <div className="m-2">
                <h2>Nama Anggota 2</h2>
                <div>
                  <TextField externalState={member2} setExternalState={setMember2} placeholder="Nama Anggota 2" />
                </div>
              </div>
              <div className="m-2">
                <h2>Email Anggota 2</h2>
                <div>
                  <TextField externalState={member2Email} setExternalState={setMember2Email} placeholder="Email Anggota 2" />
                </div>
              </div>
            </div>

           

            {/* END FIELDS */}

            <div className="flex justify-center px-14 md:px-12 text-[12px]">
                <p className="text-red300 font-helvatica font-bold">*Anggota 2 bersifat opsional, khusus untuk lomba Arkalogica, 1 tim hanya boleh berisi 2 orang</p>
            </div>

            <div className="flex justify-center mt-6">
              <CustomButton bgColor="primary" icon={false} size="normal" onClick={handleOnRegister}>
                <div className="w-[210px] md:w-[470px]">Sign Up</div>
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

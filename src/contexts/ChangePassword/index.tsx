import React, { useState } from 'react'
import Layout from '@src/components/Navigation/Layout'
import { TextField } from '@src/components/TextField'
import { changePass } from '@src/services/auth'
import Toast from '@src/components/Toast'
import { ChangePassReq } from '@src/types/team'
import { useRouter } from 'next/router'

const ProfilePage = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [toastList, setToastList] = useState<JSX.Element[]>([]);
  var idx = 0;

  const router = useRouter();

  const validation = () => {
    if(password === '' || confirmPass === ''){
      idx += 1;
      setToastList([...toastList, <Toast key={idx+1} timer={3000} label={'Mohon lengkapi form!' } type={'danger'} position={'top'} />]);
      return false;
    }
    if(password !== confirmPass){
      idx += 1;
      setToastList([...toastList, <Toast key={idx+1} timer={3000} label={'Password tidak sesuai dengan konfirmasi!' } type={'danger'} position={'top'} />]);
      return false;
    }
    return true;
  }
  const handleOnSaveChange = async () => {
    if (validation()){
      const payload = { password: password } as ChangePassReq;
      const res = await changePass(payload);
      idx += 1;
      setToastList([...toastList, <Toast key={idx+1} timer={3000} label={res == 'SUCCESS' ? 'Berhasil mengubah password!' : 'Gagal! Mohon cek kembali password Anda.' } type={res == 'SUCCESS' ? 'success' : 'danger'} position={'top'} />]);
      setInterval(() => {
        if(res === 'SUCCESS') router.push('/profile')
      }, 1000);
    }
  }

  return (
    <>
    {toastList}
    <Layout>
      <div className="p-12 bg-gray200">
        <div className="flex justify-center align-center pt-[5rem]">
          <div className="w-3/4 pl-16">
            <div className="flex pb-8">
            <p
              className="text-center font-archivo text-white text-[48px] mt-[20px]"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
              }}
            >
              Ubah Password
            </p>
            </div>
            <div className="p-8 bg-white rounded-xl drop-shadow">
              <p className="font-helvatica font-bold pb-2">Password Baru</p>
              <TextField
                externalState={password}
                setExternalState={setPassword}
                placeholder=''
                ftype="show"
                variant="default"
                width="w-full"
              />
              <p className="font-helvatica font-bold py-2">Konfirmasi Password Baru</p>
              <TextField
                externalState={confirmPass}
                setExternalState={setConfirmPass}
                placeholder=''
                ftype="show"
                variant="default"
                width="w-full"
              />
            </div>
            <div className="flex w-full pt-8 justify-end">
              <button className="rounded-xl flex items-center justify-center mb-2 bg-blue300 hover:bg-blue200 hover:drop-shadow-xl active:bg-blue400 disabled:bg-gray300 disabled:opacity-50 w-auto h-12" onClick={handleOnSaveChange}>
                <div className="flex items-center justify-center font-helvatica font-bold text-base text-white px-8">
                  <div className="text-white">Save Change</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default ProfilePage

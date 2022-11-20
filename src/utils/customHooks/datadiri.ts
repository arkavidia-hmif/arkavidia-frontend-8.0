import { Dispatch, SetStateAction, useState } from 'react'

export type IUseDataDiriInitial = {
  initialNama?: string
  initialEmail?: string
  initialNomor?: string
  initialMinat?: string[]
}

export type DataDiriState = {
  nama: string
  email: string
  nomor: string
  minat: string[]
}

export type DataDiriSetter = {
  setNama: Dispatch<SetStateAction<string>>
  setNomor: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  removeOrAddMinat: (m: string) => void
}

export type DataDiriHookRet = [DataDiriState, DataDiriSetter]

function useDataDiri({
  initialNama,
  initialEmail,
  initialMinat,
  initialNomor
}: IUseDataDiriInitial) {
  const [nama, setNama] = useState((initialNama ?? '') as string)
  const [email, setEmail] = useState((initialEmail ?? '') as string)
  const [nomor, setNomor] = useState((initialNomor ?? '') as string)
  const [minat, setMinat] = useState((initialMinat ?? []) as string[])

  function appendMinat(newMinat: string) {
    setMinat([...minat, newMinat])
  }

  function removeMinat(removedMinat: string) {
    setMinat(minat.filter(m => m != removedMinat))
  }

  function removeOrAddMinat(m: string) {
    if (minat.includes(m)) {
      removeMinat(m)
    } else {
      appendMinat(m)
    }
  }

  return [
    {
      nama,
      email,
      nomor,
      minat
    },
    { setNama, setEmail, setNomor, removeOrAddMinat }
  ] as DataDiriHookRet
}

export {}
export default useDataDiri

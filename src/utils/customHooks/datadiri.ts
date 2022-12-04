import { Dispatch, SetStateAction, useState } from 'react'

export interface IUseDataDiriInitial {
  initialNama?: string
  initialEmail?: string
  initialNomor?: string
  initialMinat?: string[]
}

export interface DataDiriState {
  nama: string
  email: string
  nomor: string
  minat: string[]
}

export interface DataDiriSetter {
  setNama: Dispatch<SetStateAction<string>>
  setNomor: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setMinat: Dispatch<SetStateAction<string[]>>
  removeOrAddMinat: (m: string) => void,
  setAll: (all: DataDiriState) => void,

}

export type DataDiriHookRet = [DataDiriState, DataDiriSetter]

function useDataDiri({
  initialNama,
  initialEmail,
  initialMinat,
  initialNomor
}: IUseDataDiriInitial) {
  const [nama, setNama] = useState(initialNama ?? '')
  const [email, setEmail] = useState(initialEmail ?? '')
  const [nomor, setNomor] = useState(initialNomor ?? '')
  const [minat, setMinat] = useState(initialMinat ?? [])

  function appendMinat(newMinat: string) {
    setMinat([...minat, newMinat])
  }

  function removeMinat(removedMinat: string) {
    setMinat(minat.filter(m => m !== removedMinat))
  }

  function removeOrAddMinat(m: string) {
    if (minat.includes(m)) {
      removeMinat(m)
    } else {
      appendMinat(m)
    }
  }

  function setAll({email, minat, nama, nomor}: DataDiriState) {
    setNama(nama);
    setEmail(email);
    setMinat(minat);
    setNomor(nomor);
  }

  return [
    {
      nama,
      email,
      nomor,
      minat
    },
    { setNama, setEmail, setNomor, removeOrAddMinat, setAll, setMinat }
  ] as DataDiriHookRet
}

export {}
export default useDataDiri

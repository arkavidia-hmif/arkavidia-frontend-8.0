import { Dispatch, SetStateAction, useState } from 'react'

export type FileType =
  | 'pribadi'
  | 'kartu-pelajar'
  | 'bukti-mahasiswa-aktif'
  | 'bukti-pembayaran'

export interface FileIndividu {
  status?: string
  type: FileType
  file?: Blob | File | null | string
}
export interface IUseDataDiriInitial {
  initialId?: number
  initialNama?: string
  initialEmail?: string
  initialNomor?: string
  initialMinat?: string[]
  initialFileIndividu?: FileIndividu[]
}

export interface DataDiriState {
  id: number | null
  nama: string
  email: string
  nomor: string
  minat: string[]
  fileIndividu: FileIndividu[]
}

export interface DataDiriSetter {
  setNama: Dispatch<SetStateAction<string>>
  setNomor: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setMinat: Dispatch<SetStateAction<string[]>>
  removeOrAddMinat: (m: string) => void
  setFile: (file: File | Blob, type: FileType) => void
  setAll: (all: DataDiriState) => void
}

export type DataDiriHookRet = [DataDiriState, DataDiriSetter]

function useDataDiri({
  initialId,
  initialNama,
  initialEmail,
  initialMinat,
  initialNomor,
  initialFileIndividu
}: IUseDataDiriInitial) {
  const [nama, setNama] = useState(initialNama ?? '')
  const [email, setEmail] = useState(initialEmail ?? '')
  const [nomor, setNomor] = useState(initialNomor ?? '')
  const [minat, setMinat] = useState(initialMinat ?? [])
  const [id, setID] = useState(initialId ?? null)
  const [fileIndividu, setFileIndividu] = useState(initialFileIndividu ?? [])

  function appendMinat(newMinat: string) {
    setMinat([...minat, newMinat])
  }

  function appendFile(newFile: FileIndividu) {
    setFileIndividu([...fileIndividu, newFile])
  }

  function changeFile(newFile: FileIndividu) {
    const newFileIndividu = fileIndividu.map(f =>
      f.type === newFile.type ? newFile : f
    )
    setFileIndividu(newFileIndividu)
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

  function setFile(file: File | Blob, type: FileType) {
    if (!fileIndividu?.find(e => e.type === type)) {
      appendFile({ file: file, type: type })
    } else {
      changeFile({ file: file, type: type })
    }
  }

  function setAll({
    id,
    email,
    minat,
    nama,
    nomor,
    fileIndividu
  }: DataDiriState) {
    setID(id)
    setNama(nama)
    setEmail(email)
    setMinat(minat)
    setNomor(nomor)
    setFileIndividu(fileIndividu)
  }

  return [
    {
      id,
      nama,
      email,
      nomor,
      minat,
      fileIndividu
    },
    { setNama, setEmail, setNomor, removeOrAddMinat, setAll, setMinat, setFile }
  ] as DataDiriHookRet
}

export {}
export default useDataDiri

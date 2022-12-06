/* eslint-disable multiline-ternary */
import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'
import ArrowTopIcon from '../../components/Icon/ArrowTopIcon'
import UploadFileIndividu from './UploadFileIndividu'
import { useState, Dispatch, SetStateAction } from 'react'
import { TextField } from '@src/components/TextField'
import CheckBoxButton from '@src/components/CheckBoxButton/CheckBoxButton'
import {
  DataDiriSetter,
  DataDiriState,
  FileType
} from '@src/utils/customHooks/datadiri'

interface DataDiriIndividuProps {
  subject: string
  dataState: DataDiriState
  dataSetter: DataDiriSetter
  index: number
  opened: number
  setOpened: Dispatch<SetStateAction<number>>
}

export default function DataDiriIndividu({
  subject,
  dataState: { nama, nomor, email, minat, fileIndividu },
  dataSetter: { setEmail, setNama, setNomor, removeOrAddMinat, setFile },
  index,
  opened,
  setOpened
}: DataDiriIndividuProps): JSX.Element {
  const [open, setOpen] = useState(false)

  const findPhotoStatus = (type: string) => {
    if (!fileIndividu || fileIndividu.length === 0) return null
    else {
      const status = fileIndividu.find(p => p.type === type)
      return status?.status ?? null
    }
  }

  const kebabCaseConverter = (content: string) => {
    return content
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  }

  const checkBoxContent = [
    'Software Engineering',
    'Product Management',
    'UI Designer',
    'UX Designer',
    'UX Researcher',
    'IT Consultant',
    'Game Developer',
    'Cyber Security',
    'Business Analyst',
    'Business Intelligence',
    'Data Scientist',
    'Data Analyst'
  ]

  const fileTypeUpload = [
    {
      title: 'Upload Foto Pribadi',
      helper:
        'Upload file foto pribadi dengan ukuran maksimal 2MB dengan format .png/.jpeg',
      type: 'pribadi' as FileType,
      accept: 'image' as 'image' | 'pdf',
      maxSize: 2
    },
    {
      title: 'Upload Foto Kartu Pelajar',
      helper:
        'Upload file foto kartu pelajar dengan maksimal 2MB dengan format .png/.jpeg',
      type: 'kartu-pelajar' as FileType,
      accept: 'image' as 'image' | 'pdf',
      maxSize: 2
    },
    {
      title: 'Upload File Bukti Mahasiswa Aktif',
      helper: 'Upload file bukti mahasiswa aktif dengan format .pdf',
      type: 'bukti-mahasiswa-aktif' as FileType,
      accept: 'pdf' as 'image' | 'pdf',
      maxSize: 2
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-md p-3 rounded-lg w-full select-none">
      <div
        onClick={() => {
          setOpened(index)
          setOpen(prevOpen => !prevOpen)
        }}
        className="flex flex-row items-center justify-between cursor-pointer w-full">
        <h6 className="font-black capitalize text-2xl">Data Diri {subject}</h6>
        <div className="flex-grow"></div>
        <button>
          {open && opened === index ? (
            <ArrowTopIcon size={28} />
          ) : (
            <ArrowDownIcon size={28} />
          )}
        </button>
      </div>
      {open && opened === index && (
        <div className="w-full flex flex-col items-center justify-start gap-4 m-1">
          <div className="w-full flex flex-col items-start justify-center">
            <p className="font-helvatica font-bold text-base">Nama {subject}</p>
            <TextField
              width="w-full"
              placeholder={`Nama ${subject}`}
              externalState={nama}
              setExternalState={setNama}
              isDisable={true}
              variant="disabled"
            />
          </div>
          <div className="w-full flex items-start justify-center gap-6">
            <div className="w-full flex flex-col items-start justify-center">
              <p className="font-helvatica font-bold text-base">
                Email {subject}
              </p>
              <TextField
                width="w-full"
                placeholder={`Email ${subject}`}
                externalState={email}
                setExternalState={setEmail}
                isDisable={true}
                variant="disabled"
              />
            </div>
            {/* <div className="w-1/2 flex flex-col items-start justify-center">
              <p className="font-helvatica font-bold text-base">
                Nomor Telepon {subject}
              </p>
              <TextField
                width="w-full"
                placeholder={`Nomor Telepon ${subject}`}
                externalState={nomor}
                setExternalState={setNomor}
                ftype="default"
              />
            </div> */}
          </div>
          <div className="flex flex-col w-full items-start justify-center gap-3">
            <p className="font-helvatica text-base font-bold">Minat Karir</p>
            <p className="font-helvatica text-xs text-gray600">
              Pilih bidang karir yang kamu minati
            </p>
            <div className="grid grid-cols-2 grid-rows-6  gap-y-3 gap-x-2">
              {checkBoxContent.map(content => {
                return (
                  <CheckBoxButton
                    checked={minat.includes(kebabCaseConverter(content))}
                    groupName={`Minat ${subject}`}
                    toggleFunction={() => removeOrAddMinat(content)}
                    value={content}
                    key={`${content} ${subject}`}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            {fileTypeUpload.map(content => {
              return (
                <UploadFileIndividu
                  title={content.title}
                  helper={content.helper}
                  type={content.type}
                  accept={content.accept}
                  maxSize={content.maxSize}
                  status={findPhotoStatus(content.type)}
                  setFileIndividu={(file: Blob, type: FileType) =>
                    setFile(file, type)
                  }
                  key={`upload-${content.type}`}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'
import ArrowTopIcon from '../../components/Icon/ArrowTopIcon'

import { useState } from 'react'
import { TextField } from '@src/components/TextField'
import CheckBoxButton from '@src/components/CheckBoxButton/CheckBoxButton'
import { DataDiriSetter, DataDiriState } from '@src/utils/customHooks/datadiri'

type DataDiriIndividuProps = {
  subject: string
  dataState: DataDiriState
  dataSetter: DataDiriSetter
}

export default function DataDiriIndividu({
  subject,
  dataState: { nama, nomor, email, minat },
  dataSetter: { setEmail, setNama, setNomor, removeOrAddMinat }
}: DataDiriIndividuProps): JSX.Element {
  const [open, setOpen] = useState(false)

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

  return (
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-md p-3 rounded-lg w-full select-none">
      <div
        onClick={() => {
          setOpen(prevOpen => !prevOpen)
        }}
        className="flex flex-row items-center justify-between cursor-pointer w-full">
        <h6 className="font-black capitalize text-2xl">Data Diri {subject}</h6>
        <div className="flex-grow"></div>
        <button>
          {open ? <ArrowTopIcon size={28} /> : <ArrowDownIcon size={28} />}
        </button>
      </div>
      {open && (
        <div className="w-full flex flex-col items-center justify-start gap-4 m-1">
          <div className="w-full flex flex-col items-start justify-center">
            <p className="font-helvatica font-bold text-base">Nama {subject}</p>
            <TextField
              width="w-full"
              placeholder={`Nama ${subject}`}
              externalState={nama}
              setExternalState={setNama}
              ftype="default"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
              <p className="font-helvatica font-bold text-base">
                Email {subject}
              </p>
              <TextField
                width="w-full"
                placeholder={`Email ${subject}`}
                externalState={email}
                setExternalState={setEmail}
                ftype="default"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
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
            </div>
          </div>
          <div className="flex flex-col w-full items-start justify-center gap-3">
            <p className="font-helvatica text-base font-bold">Minat Karir</p>
            <p className="font-helvatica text-xs text-gray600">
              Pilih bidang karir yang kamu minati
            </p>
            <div className="flex flex-col items-start justify-center lg:grid lg:grid-cols-2 lg:grid-rows-6 gap-y-3 gap-x-2">
              {checkBoxContent.map(content => {
                return (
                  <CheckBoxButton
                    checked={minat.includes(content)}
                    groupName={`Minat ${subject}`}
                    toggleFunction={() => removeOrAddMinat(content)}
                    value={content}
                    key={`${content} ${subject}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

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
  dataSetter: { setEmail, setMinat, setNama, setNomor }
}: DataDiriIndividuProps): JSX.Element {
  const [open, setOpen] = useState(false)

  const checkBoxContent = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']

  function checkBoxGenerator(): JSX.Element[] {
    return checkBoxContent.map(content => {
      return (
        <CheckBoxButton
          checked={state.includes(content)}
          groupName={`Minat ${subject}`}
          toggleFunction={checkBoxToggle}
          value={content}
          key={`${content} ${state}`}
        />
      )
    })
  }
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
            <TextField width="w-full" />
          </div>
          <div className="w-full flex items-start justify-center gap-6">
            <div className="w-1/2 flex flex-col items-start justify-center">
              <p className="font-helvatica font-bold text-base">
                Email {subject}
              </p>
              <TextField width="w-full" />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center">
              <p className="font-helvatica font-bold text-base">
                Nomor Telepon {subject}
              </p>
              <TextField width="w-full" />
            </div>
          </div>
          <div className="flex flex-col w-full items-start justify-center gap-3">
            <p className="font-helvatica text-base font-bold">Minat Karir</p>
            <p className="font-helvatica text-xs text-gray600">
              Pilih bidang karir yang kamu minati
            </p>
            <div className="grid grid-cols-2 grid-rows-6  gap-y-3 gap-x-2">
              {checkBoxGenerator()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* eslint-disable multiline-ternary */
import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'
import ArrowTopIcon from '../../components/Icon/ArrowTopIcon'
import UploadFileIndividu from './UploadFileIndividu'
import { useState, useEffect } from 'react'
import { FileIndividu } from '@src/utils/customHooks/datadiri'
import { getTeamData } from '@src/services/team'
import { TeamData } from '@src/types/team'

interface BuktiPembayaranProps {
  fileIndividu: FileIndividu[]
  setFile: (file: Blob) => void
  index: number
  opened: number
  setOpened: (index: number) => void
}

export default function BuktiPembayaran({
  fileIndividu,
  setFile,
  index,
  opened,
  setOpened
}: BuktiPembayaranProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const [teamData, setTeamData] = useState<TeamData | null>()

  const fetchTeamData = async () => {
    const response = await getTeamData()
    setTeamData(response.Data)
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  const findPhotoStatus = (type: string) => {
    if (!fileIndividu || fileIndividu.length === 0) return null
    else {
      const status = fileIndividu.find((p: FileIndividu) => p.type === type)
      return status?.status ?? null
    }
  }

  const pascalCaseConverter = (text: string) => {
    return text.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase()
    })
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-md p-3 rounded-lg w-full select-none">
      <div
        onClick={() => {
          setOpened(index)
          setOpen(prevOpen => !prevOpen)
        }}
        className="flex flex-row items-center justify-between cursor-pointer w-full">
        <h6 className="font-black capitalize text-2xl">Bukti Pembayaran</h6>
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
          <UploadFileIndividu
            title={'Upload Bukti Pembayaran'}
            helper={
              <>
                Biaya pendaftaran sebesar{' '}
                {teamData?.team_category === 'arkalogica'
                  ? 'Rp60.000'
                  : 'Rp90.000'}{' '}
                untuk{' '}
                {pascalCaseConverter(
                  teamData?.team_category?.replace('-', ' ') ?? ''
                )}{' '}
                dapat dibayar melalui: <br />
                Jenius
                <br /> 90290257032
                <br /> $leoniantoinette
                <br /> an Flavia Beatrix Leoni
                <br />
                <br />
                Silakan upload file bukti pembayaran dengan format .png/.jpeg
              </>
            }
            type={'bukti-pembayaran'}
            accept={'image'}
            maxSize={5}
            status={findPhotoStatus('bukti-pembayaran')}
            setFileIndividu={(file: Blob) => setFile(file)}
          />
        </div>
      )}
    </div>
  )
}

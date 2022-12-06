import Upload from '@src/components/Upload'
import CustomChip, { Variants } from '@src/components/Chip'
import { FileType } from '@src/utils/customHooks/datadiri'

interface IUploadFileIndividu {
  title: string
  helper: string | JSX.Element
  type: FileType
  accept: 'image' | 'pdf'
  maxSize: number
  status: string | null
  setFileIndividu: (file: Blob, type: FileType) => void
}

const UploadFileIndividu = ({
  title,
  type,
  helper,
  accept,
  maxSize,
  status,
  setFileIndividu
}: IUploadFileIndividu) => {
  const handleUploadFile = (file: Blob) => {
    setFileIndividu(file, type)
  }
  let _variant = 'redVerifikasi' as Variants
  if (status) {
    if (status === 'verified') _variant = 'greenVerifikasi'
    else if (status === 'declined') _variant = 'redVerifikasi'
    else _variant = 'orangeVerifikasi'
  } else {
    _variant = 'redVerifikasi'
  }

  return (
    <div className="flex flex-col w-full gap-1">
      <h2 className="font-bold text-[16px]">{title}</h2>
      <p className="text-[13px]">{helper}</p>
      <div className="flex items-center gap-4 my-2">
        <div className="font-bold text-[14px]">Status :</div>
        <CustomChip
          shadow={false}
          variant={_variant}
          className="w-[160px] h-[24px] flex justify-center items-center xl:text-[12px] lg:text-[9px] cursor-default">
          {`${
            !status
              ? 'Belum diunggah'
              : status === 'verified'
              ? 'Verifikasi Berhasil'
              : status === 'waiting-for-verification'
              ? 'Menunggu Verifikasi'
              : 'Verifikasi Gagal'
          }`}
        </CustomChip>
      </div>
      <Upload
        onFileUploaded={handleUploadFile}
        type={accept}
        maxSize={maxSize}
      />
    </div>
  )
}

export default UploadFileIndividu

import CustomButton from '@src/components/CustomButton/CustomButton'
import CustomChip, { Variants } from '@src/components/Chip'
import { changePhotoStatus } from '@src/services/admin'
import Toast from '@src/components/Toast'
import { useState } from 'react'
export interface ParticipantCMSProps {
  id: number
  name: string
  email: string
  photos?: Photos[]
}

export interface Photos {
  id: number
  url: string
  type: string
  status: string
}

const Field = ({
  fieldContent,
  fieldName
}: {
  fieldName: string
  fieldContent: string
}): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <p className="text-lg">{fieldName}</p>
      <p className="text-sm font-bold">{fieldContent}</p>
    </div>
  )
}

const FieldChip = ({ status }: { status: string }): JSX.Element => {
  const getChipVariant = (status: string): Variants => {
    if (status === 'approved') return 'greenVerifikasi'
    else if (status === 'waiting-for-approval') return 'orangeVerifikasi'
    else return 'redVerifikasi'
  }

  const getChipText = (status: string) => {
    if (status === 'approved') return 'Terverifikasi'
    else if (status === 'waiting-for-approval') return 'Menunggu Verifikasi'
    else if (status === 'denied') return 'Ditolak'
    else return 'Belum Diunggah'
  }
  return (
    <CustomChip
      variant={getChipVariant(status)}
      shadow={false}
      className={`${'cursor-default'}`}>
      {getChipText(status)}
    </CustomChip>
  )
}

const FieldImage = ({
  id,
  fieldName,
  fieldLink,
  status = 'not-uploaded'
}: {
  id: string | number
  fieldName: string
  fieldLink: string | undefined
  status: string | undefined
}): JSX.Element => {
  const [toastList, setToastList] = useState<JSX.Element[]>([])

  const handleChangePhotoStatus = async (
    photo_id: number | string,
    status: string
  ) => {
    const resChangeStatus = await changePhotoStatus(photo_id, status)
    if (resChangeStatus === 'SUCCESS') {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Berhasil mengupdate status file'}
          type={'success'}
          position={'top'}
          key={Math.random()}
        />
      ])
    } else {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Kesalahan pada server'}
          type={'danger'}
          position={'top'}
          key={Math.random()}
        />
      ])
    }
  }
  return (
    <>
      {toastList}
      <div className="flex w-full items-start justify-start">
        <p
          className={fieldLink ? 'text-lg cursor-pointer underline' : 'text-lg'}
          onClick={() => {
            if (fieldLink) {
              window.open(fieldLink, '__blank')
            }
          }}>
          {fieldName}
        </p>
        <div className="flex-grow" />
        {status === 'waiting-for-approval' ? (
          <div className="flex items-center gap-2">
            <CustomButton
              bgColor="secondary"
              size="xs"
              onClick={() => handleChangePhotoStatus(id, 'denied')}>
              <div className="text-[12px]">Decline</div>
            </CustomButton>
            <CustomButton
              bgColor="primary"
              size="xs"
              onClick={() => handleChangePhotoStatus(id, 'approved')}>
              <div className="text-[12px]">Accept</div>
            </CustomButton>
          </div>
        ) : (
          <FieldChip status={status} />
        )}
      </div>
    </>
  )
}

const ParticipantCMS = ({
  id,
  email,
  name,
  photos = []
}: ParticipantCMSProps): JSX.Element => {
  const findPhoto = (type: string) => {
    return photos?.find(e => e.type === type)
  }

  return (
    <div className="flex flex-col items-start justify-center bg-gray200 p-6 rounded-2xl shadow-md gap-5 w-96">
      <Field fieldContent={name} fieldName="Nama" />
      <Field fieldContent={email} fieldName="Email" />
      {/* <Field fieldContent={number} fieldName="Nomor Handphone" /> */}
      <FieldImage
        id={findPhoto('pribadi')?.id ?? -999}
        fieldLink={findPhoto('pribadi')?.url ?? ''}
        status={findPhoto('pribadi')?.status ?? ''}
        fieldName="Foto Pribadi"
      />
      <FieldImage
        id={findPhoto('kartu-pelajar')?.id ?? -999}
        fieldLink={findPhoto('kartu-pelajar')?.url ?? ''}
        status={findPhoto('kartu-pelajar')?.status ?? ''}
        fieldName="Kartu Pelajar"
      />
      <FieldImage
        id={findPhoto('bukti-mahasiswa-aktif')?.id ?? -999}
        fieldLink={findPhoto('bukti-mahasiswa-aktif')?.url ?? ''}
        status={findPhoto('bukti-mahasiswa-aktif')?.status ?? ''}
        fieldName="Bukti Mahasiswa"
      />
    </div>
  )
}
export default ParticipantCMS

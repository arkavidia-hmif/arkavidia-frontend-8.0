import CustomButton from '@src/components/CustomButton/CustomButton'

export interface ParticipantCMSProps {
  name: string
  email: string
  number: string
  photoLink?: string
  cardLink?: string
  proofLink?: string
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
      <p className="text-2xl">{fieldName}</p>
      <p className="text-xl font-bold">{fieldContent}</p>
    </div>
  )
}

const FieldImage = ({
  fieldName,
  fieldLink
}: {
  fieldName: string
  fieldLink: string | undefined
}): JSX.Element => {
  return (
    <div className="flex w-full items-start justify-start">
      <p className="text-2xl">{fieldName}</p>
      <div className="flex-grow" />
      <CustomButton
        bgColor="ghost"
        size="small"
        onClick={() => {
          if (fieldLink !== undefined) {
            window.open(`https://${fieldLink}`, '__blank')
          }
        }}>
        View
      </CustomButton>
    </div>
  )
}

const ParticipantCMS = ({
  email,
  name,
  number,
  cardLink = undefined,
  photoLink = undefined,
  proofLink = undefined
}: ParticipantCMSProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-center bg-gray200 p-6 rounded-2xl shadow-md gap-5 w-96">
      <Field fieldContent={name} fieldName="Nama" />
      <Field fieldContent={email} fieldName="Email" />
      <Field fieldContent={number} fieldName="Nomor Handphone" />
      <FieldImage fieldLink={photoLink} fieldName="Foto Pribadi" />
      <FieldImage fieldLink={cardLink} fieldName="Kartu Pelajar" />
      <FieldImage fieldLink={proofLink} fieldName="Bukti Mahasiswa" />
    </div>
  )
}
export default ParticipantCMS

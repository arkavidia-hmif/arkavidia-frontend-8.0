// import CustomButton from '@src/components/CustomButton/CustomButton'
import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import ArrowTopIcon from '@src/components/Icon/ArrowTopIcon'
import { useState, useEffect } from 'react'
import ParticipantCMS, { ParticipantCMSProps } from '../Participant'
import CustomChip, { Variants } from '@src/components/Chip'
import { getParticipantsTeam } from '@src/services/admin'
import { getPhotoParticipant } from '@src/services/photo'

type TeamStatus = 'pass' | 'denied' | 'verification'

export interface TeamCMSProps {
  team_name: string
  id: string | number
  status: TeamStatus
}

export interface PhotosData {
  id: number
  file_name: string
  file_extension: string
  type: string
  status: string
}

const BASE_STORAGE_URL =
  'https://storage.googleapis.com/arkavidia-8/competition/photo/'

const TeamCMS = ({ team_name, id, status }: TeamCMSProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [participantList, setParticipantList] = useState<
    ParticipantCMSProps[] | []
  >([])
  const [loading, setLoading] = useState<boolean>(true)

  const getChipVariant = (status: string): Variants => {
    if (status === 'passed') return 'greenVerifikasi'
    else if (status === 'eliminated') return 'redVerifikasi'
    else return 'orangeVerifikasi'
  }

  const getChipText = (status: string) => {
    if (status === 'passed') return 'Lolos'
    else if (status === 'eliminated') return 'Tidak Lolos'
    else return 'Menunggu Penilaian'
  }

  const fetchParticipants = async () => {
    const response = await getParticipantsTeam(id)
    if (response.message === 'SUCCESS') {
      const tempParticipantsData = response.data
      const participantData = await Promise.all(
        tempParticipantsData?.map(async (d: ParticipantCMSProps) => {
          const photo = await fetchParticipantPhotos(d.id)
          return { ...d, photos: photo }
        })
      )
      setParticipantList(participantData)
      setLoading(false)
    }
  }

  const fetchParticipantPhotos = async (participant_id: string | number) => {
    const response = await getPhotoParticipant(participant_id)
    if (response.message === 'SUCCESS' && response.data) {
      const data = response.data.map((d: PhotosData) => {
        return {
          ...d,
          url: `${BASE_STORAGE_URL}${d.file_name}${d.file_extension}`
        }
      })
      return data
    }
  }

  useEffect(() => {
    open && fetchParticipants()
  }, [open])

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full">
      <div className="flex items-center justify-between rounded-3xl w-full px-6 py-5 border-2 border-black">
        <section className="flex flex-col text-left gap-2">
          <p className="font-black text-4xl">{team_name}</p>
          <p className="text-2xl">{id}</p>
        </section>
        <div className="flex-grow" />
        <section className="flex items-center justify-center text-left gap-12">
          <div className="flex items-center gap-12">
            <p className="font-black">Status Penyisihan</p>
            <CustomChip
              variant={getChipVariant(status)}
              shadow={false}
              className={`${'w-[160px] h-[24px] flex justify-center items-center xl:text-[12px] lg:text-[9px] cursor-default'}`}>
              {getChipText(status)}
            </CustomChip>
          </div>
          <button onClick={() => setOpen(prevOpen => !prevOpen)}>
            {open ? <ArrowTopIcon size={42} /> : <ArrowDownIcon size={42} />}
          </button>
        </section>
      </div>
      {!open ? null : loading ? (
        <div className="flex w-full justify-center items-center">
          <svg
            aria-hidden="true"
            className="w-[50px] h-[50px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-start gap-12 w-full rounded-3xl border-2 border-black py-11 px-8">
          <section className="flex items-center justify-around w-full gap-3">
            {participantList?.map(({ id, email, name, photos }) => {
              return (
                <ParticipantCMS
                  key={name}
                  id={id}
                  email={email}
                  name={name}
                  photos={photos}
                />
              )
            })}
          </section>
          {/* <section className="flex items-center justify-start gap-4">
            <CustomButton
              size="small"
              onClick={() => window.open(`https://${proposalLink}`, '_blank')}
              bgColor="ghost">
              Download Proposal
            </CustomButton>
            <CustomButton
              size="small"
              onClick={() => window.open(`https://${paymentLink}`, '_blank')}
              bgColor="ghost">
              Download Bukti Pembayaran
            </CustomButton>
          </section> */}
        </div>
      )}
    </div>
  )
}

export default TeamCMS

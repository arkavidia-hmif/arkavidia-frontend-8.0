import CustomButton from '@src/components/CustomButton/CustomButton'
import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import ArrowTopIcon from '@src/components/Icon/ArrowTopIcon'
import { useState } from 'react'
import ParticipantCMS, { ParticipantCMSProps } from '../Participant'

type TeamStatus = 'pass' | 'denied' | 'verification'

interface TeamCMSProps {
  teamName: string
  teamID: string
  status: TeamStatus
  members: ParticipantCMSProps[]
  proposalLink: string
  paymentLink: string
}

const TeamCMS = ({
  teamName,
  teamID,
  status,
  proposalLink,
  paymentLink,
  members
}: TeamCMSProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full">
      <div className="flex items-center justify-between rounded-3xl w-full px-6 py-5 border-2 border-black">
        <section className="flex flex-col text-left gap-2">
          <p className="font-black text-4xl">{teamName}</p>
          <p className="text-2xl">{teamID}</p>
        </section>
        <div className="flex-grow" />
        <section className="flex items-center justify-center text-left gap-12">
          <CustomButton size="small" bgColor="primary">
            kmklmm
          </CustomButton>
          <CustomButton size="small" bgColor="primary">
            klmklmklm
          </CustomButton>
          <button onClick={() => setOpen(prevOpen => !prevOpen)}>
            {open ? <ArrowTopIcon size={42} /> : <ArrowDownIcon size={42} />}
          </button>
        </section>
      </div>
      {!open ? null : (
        <div className="flex flex-col items-center justify-center gap-12 w-full rounded-3xl border-2 border-black py-11">
          <section className="flex items-center justify-around w-full">
            {members.map(
              ({ email, name, number, cardLink, photoLink, proofLink }) => {
                return (
                  <ParticipantCMS
                    key={name}
                    email={email}
                    name={name}
                    number={number}
                    cardLink={cardLink}
                    photoLink={photoLink}
                    proofLink={proofLink}
                  />
                )
              }
            )}
          </section>
          <section className="flex items-center justify-center gap-4">
            <CustomButton
              size="small"
              onClick={() => window.open(`https://${proposalLink}`, '_blank')}
              bgColor="primary">
              Download Proposal
            </CustomButton>
            <CustomButton
              size="small"
              onClick={() => window.open(`https://${paymentLink}`, '_blank')}
              bgColor="primary">
              Download Bukti Pembayaran
            </CustomButton>
          </section>
        </div>
      )}
    </div>
  )
}

export default TeamCMS

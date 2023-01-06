import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomButton from '@src/components/CustomButton/CustomButton'
import CustomChip from '@src/components/Chip'
import DashboardCountdown from '@src/components/CountdownCard/dashboardCountdown'
import FoxImage from '@src/assets/images/fox.svg'
import NoAnnouncement from '@src/assets/images/noAnnouncement.svg'
import NotRegistered from '@src/assets/images/StatusNotRegistered.svg'
import Dashboard from '@src/components/Navigation/Dashboard'
import { getTeamData } from '@src/services/team'
import { getTeamMembersData } from '@src/services/participant'
import { getPhotoParticipant } from '@src/services/photo'
import { TeamData } from '@src/types/team'
import { ParticipantData, ParticipantPhoto } from '@src/types/participant'
import {
  TIMELINE_ARKALOGICA,
  TIMELINE_CP,
  TIMELINE_DATAVIDIA,
  TIMELINE_UXVIDIA
} from '@src/const/CompetitionDetail'
import CircleLoading from '@src/components/Loading/Circle'
// import Toast from '@src/components/Toast'
import { useRouter } from 'next/router'
// How to use: <DashboardInfo isEmpty ='true'/>
// isEmpty can be set to 'true' or 'false'

const CapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

interface TimelineDetail {
  title: string
  startDate: Date
  endDate: Date
}

// const Section = () => {
//   const space = 'mb-[10px]'
//   const font = 'font-helvatica'
//   return (
//     <div className="bg-gray200 pl-[10px] pt-[10px] mb-[13px]">
//       <p className={`${space} ${font} font-normal text-[12px]`}>
//         DD/MM/YYYY, HH:MM WIB
//       </p>
//       <p className={`${space} ${font} font-bold text-[16px]`}>
//         Judul Informasi
//       </p>
//       <p className={`${space} ${font} font-normal text-[12px] pb-[10px]`}>
//         &lt;&lt;Jangan lupa untuk melengkapi dokumen pendaftaran karena h-3
//         pendaftaran akan ditutup&gt;&gt;
//       </p>
//     </div>
//   )
// }

const TextChipVerifikasi = (props: any) => {
  const { text, variant, textSize, unggah } = props
  const chipStyle =
    'w-[160px] h-[24px] flex justify-center items-center xl:text-[9px] lg:text-[7px] cursor-default'
  const _variant = 'greenVerifikasi'
  // if (unggah) {
  //   if (unggah.status === 'verified') _variant = 'greenVerifikasi'
  //   else if (unggah.status === 'declined') _variant = 'redVerifikasi'
  //   else _variant = 'orangeVerifikasi'
  // } else {
  //   _variant = 'redVerifikasi'
  // }
  return (
    <div className="grid grid-cols-2 mb-[10px]">
      <div
        className={`font-helvatica font-bold text-[${textSize}] col-span-1 flex items-center`}>
        {text}
      </div>
      <div className="flex justify-end items-center pr-[5px]">
        <CustomChip
          variant={_variant}
          shadow={false}
          className={`${chipStyle}`}>
          {/* {`${
            !unggah
              ? 'Belum diunggah'
              : unggah.status === 'verified'
              ? 'Verifikasi Berhasil'
              : unggah.status === 'waiting-for-verification'
              ? 'Menunggu Verifikasi'
              : 'Verifikasi Gagal'
          }`} */}
          Verifikasi Berhasil
        </CustomChip>
      </div>
    </div>
  )
}

const Anggota = (props: any) => {
  const { Jabatan, Nama, Photo } = props
  const findPhotoStatus = (type: string) => {
    if (!Photo || Photo.length === 0) return null
    else {
      const status = Photo.find((p: ParticipantPhoto) => p.type === type)
      return status
    }
  }
  return (
    <div className="bg-gray200 py-[10px] mb-[12px] pl-[10px]">
      <div className="font-helvatica font-bold text-[16px] ">{Jabatan}</div>
      <div className="font-helvatica text-400 text-[12px] mb-[10px] mt-[2px]">
        {Nama}
      </div>
      <TextChipVerifikasi
        text="Foto Profil"
        textSize="12px"
        unggah={findPhotoStatus('pribadi')}
      />
      <TextChipVerifikasi
        text="Foto Kartu Pelajar"
        textSize="12px"
        unggah={findPhotoStatus('kartu-pelajar')}
      />
      <TextChipVerifikasi
        text="File Bukti Mahasiswa"
        textSize="12px"
        unggah={findPhotoStatus('bukti-mahasiswa-aktif')}
      />
    </div>
  )
}

const TextDate = (props: any) => {
  const text1 = props.text1
  const text2 = props.text2
  return (
    <div className="flex justify-between pb-[18px]">
      <div className="flex pl-[12px] font-bold text-[12px] leading-[13.8px] justify-center items-center">
        {text1}
      </div>
      <div className="flex bg-black text-white font-helvatica font-bold text-[12px] items-center justify-center px-2 py-1 mr-6 lg:mr-3">
        {text2}
      </div>
    </div>
  )
}

const Timeline = (competition: any) => {
  switch (competition.competition) {
    case 'competitive-programming':
      /* Adjust lg:min-h-[] to adjust timeline box height, 505px for full size box */
      return (
        <div className="bg-white rounded-[8px] lg:min-h-[505px] min-h-[100px]">
          <p
            className={`font-archivo font-black text-[24px] mt-[24px] pl-[12px] mb-[14px] pt-[10px]`}>
            Timeline
          </p>
          {TIMELINE_CP.map((event, index) => (
            <TextDate
              text1={event.title}
              text2={`${event.startDate.getDate()}/${
                event.startDate.getMonth() + 1
              }/${event.startDate.getFullYear()}`}
              key={index}
            />
          ))}
        </div>
      )
    case 'datavidia':
      return (
        <div className="bg-white rounded-[8px] lg:min-h-[505px] min-h-[100px]">
          <p
            className={`font-archivo font-black text-[24px] mt-[24px] pl-[12px] mb-[14px] pt-[10px]`}>
            Timeline
          </p>
          {TIMELINE_DATAVIDIA.map((event, index) => (
            <TextDate
              text1={event.title}
              text2={`${event.startDate.getDate()}/${
                event.startDate.getMonth() + 1
              }/${event.startDate.getFullYear()}`}
              key={index}
            />
          ))}
        </div>
      )
    case 'arkalogica':
      return (
        <div className="bg-white rounded-[8px] lg:min-h-[505px] min-h-[100px]">
          <p
            className={`font-archivo font-black text-[24px] mt-[24px] pl-[12px] mb-[14px] pt-[10px]`}>
            Timeline
          </p>
          {TIMELINE_ARKALOGICA.map((event, index) => (
            <TextDate
              text1={event.title}
              text2={`${event.startDate.getDate()}/${
                event.startDate.getMonth() + 1
              }/${event.startDate.getFullYear()}`}
              key={index}
            />
          ))}
        </div>
      )
    case 'uxvidia':
      return (
        <div className="bg-white rounded-[8px] lg:min-h-[505px] min-h-[100px]">
          <p
            className={`font-archivo font-black text-[24px] mt-[24px] pl-[12px] mb-[14px] pt-[10px]`}>
            Timeline
          </p>
          {TIMELINE_UXVIDIA.map((event, index) => (
            <TextDate
              text1={event.title}
              text2={`${event.startDate.getDate()}/${
                event.startDate.getMonth() + 1
              }/${event.startDate.getFullYear()}`}
              key={index}
            />
          ))}
        </div>
      )
    default:
      return (
        <div className="bg-white rounded-[8px] lg:min-h-[505px] min-h-[200px]">
          <p
            className={`font-archivo font-black text-[24px] mt-[24px] pl-[12px] mb-[14px] pt-[10px]`}>
            Timeline
          </p>
        </div>
      )
  }
}

const LatestCountdown = (competition: any) => {
  const dateTimeline = [] as TimelineDetail[]
  switch (competition.competition) {
    case 'competitive-programming':
      TIMELINE_CP.map(time => dateTimeline.push(time))
      break
    case 'datavidia':
      TIMELINE_DATAVIDIA.map(time => dateTimeline.push(time))
      break
    case 'arkalogica':
      TIMELINE_ARKALOGICA.map(time => dateTimeline.push(time))
      break
    case 'uxvidia':
      TIMELINE_UXVIDIA.map(time => dateTimeline.push(time))
      break
    default:
      dateTimeline.push({
        title: '',
        startDate: new Date(),
        endDate: new Date()
      })
  }
  const toShow = { title: '', startDate: new Date() }
  for (const date of dateTimeline) {
    if (date.startDate.getTime() - Date.now() >= 0) {
      toShow.title = date.title
      toShow.startDate = date.startDate
      break
    }
  }

  return (
    <>
      <div className="mb-[12px] pl-[2px]">
        <TextDate
          text1={toShow.title}
          text2={`${toShow.startDate.getDate()}/${
            toShow.startDate.getMonth() + 1
          }/${toShow.startDate.getFullYear()}`}
        />
      </div>
      <DashboardCountdown date={toShow.startDate.toString()} />
    </>
  )
}

const DashboardInfo = (props: any) => {
  const router = useRouter()
  const [teamData, setTeamData] = useState<TeamData | null>()
  const [membersData, setMembersData] = useState<ParticipantData[] | null>()
  const [isEmpty, setIsEmpty] = useState(false)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchTeamData = async () => {
    const [teamResponse, membersResponse] = await Promise.all([
      getTeamData(),
      getTeamMembersData()
    ])
    const teamData = teamResponse.data
    const tempMembersData = membersResponse.data
    const membersData = await Promise.all(
      tempMembersData.map(async (m: ParticipantData) => {
        const photo = await getPhotoParticipant(m.ID)
        return { ...m, photos: photo?.data }
      })
    )
    setTeamData(teamData)
    setMembersData(membersData)
    setIsEmpty(!teamData.team_category)
    setLoading(false)
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  const subHeader1Style =
    'font-archivo font-black text-[24px] mt-[24px] pl-[10px]'
  const textStyle = 'font-helvatica font-normal text-[12px] pl-[10px] mr-[3px]'

  return loading ? (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <CircleLoading />
    </div>
  ) : (
    <div className="bg-[rgb(236,236,236)] relative">
      {/* <Toast
        timer={6000}
        label={
          <>
            Please fill this form for alternative signup/registration if you are
            experiencing issues:{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTii0F2iEsHCObkS1FVdUi1uewwrDopTD9e7StxYE4o7Owdw/viewform"
              target="_blank"
              style={{ textDecoration: 'underline' }}
              rel="noreferrer">
              bit.ly/TemporaryFormArkavidia
            </a>
          </>
        }
        type={'danger'}
        position={'bottom'}
        key={'toast1'}
      /> */}
      <div className="pt-[60px] lg:pt-[58px]">
        <Dashboard>
          <div className="w-full">
            <div className="w-full mr-[116px] ml-[5px]">
              <div className="lg:ml-[11px] mb-[30px] lg:text-left text-center">
                <div className="font-archivo text-900 text-[36px] lg:text-[48px]  ml-[2px] text-white text-stroke-black text-shadow">
                  Informasi
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-3 lg:gap-[12px] z-[20]">
                {!isEmpty ? (
                  <>
                    <div className="lg:grid lg:grid-row-2 lg:pl-[4%]  lg:rounded-[8px]">
                      <div className="rounded-[8px] bg-white pl-[12px]">
                        <div>
                          <h5
                            className={`${subHeader1Style} pt-[22px] lg:pt-0`}>
                            Penyisihan
                          </h5>
                        </div>
                        <div>
                          <p className={`${textStyle} mt-2 mb-2`}>
                            Masuk untuk memulai perlombaan di babak penyisihan
                          </p>
                        </div>
                        <div className="flex justify-center pt-[12px] pb-[30px]">
                          <CustomButton
                            bgColor="primary"
                            size="normal"
                            onClick={() =>
                              router.push('/dashboard/submission')
                            }>
                            Mulai Perlombaan
                          </CustomButton>
                        </div>
                      </div>
                      <div className="rounded-[8px] bg-white mt-[10px] pr-[20px] pl-[12px] z-[10] pb-10 lg:pb-0">
                        <p
                          className={`${subHeader1Style} mb-[22px] pt-[22px] lg:pt-0`}>
                          Pengumuman
                        </p>
                        {/* <Section />
                        <Section />
                        <Section />
                        <Section /> */}
                        <div className="flex justify-center mt-[100px]">
                          <Image src={NoAnnouncement} className="" />
                        </div>
                        <div>
                          <p className="font-varela font-normal text-[20px] text-center mx-[22px] my-[22px] capitalize">
                            Belum ada pengumuman nih. Tetap stay tune ya!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-[12px] rounded-[8px]">
                      <h6
                        className={`${subHeader1Style} mb-[22px] pt-[22px] lg:pt-0`}>
                        Status Profil
                      </h6>
                      <div className="pt-[13px] pb-[3px] pl-[10px]">
                        <TextChipVerifikasi text="Status Tim" textSize="16px" />
                      </div>
                      <h6 className={`${subHeader1Style}`}>Dokumen Peserta</h6>
                      <p className={`${textStyle} mb-[10px]`}>
                        Harap melengkapi dokumen sebelum 31/12/2022 23:59 WIB
                      </p>
                      <div className="pt-[13px] pb-[3px] pl-[10px] bg-gray200">
                        <TextChipVerifikasi
                          text="Bukti Pembayaran"
                          textSize="16px"
                          unggah={membersData
                            ?.find(m => m.memberships[0].role === 'leader')
                            ?.photos?.find(p => p.type === 'bukti-pembayaran')}
                        />
                      </div>
                      <div className="pt-[10px] ">
                        {membersData?.map((member, key) => (
                          <Anggota
                            key={key}
                            Jabatan={CapitalizeFirstLetter(
                              member.memberships[0].role
                            )}
                            Nama={member.name}
                            Photo={member.photos}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid lg:pl-[4%] rounded-[8px] flex-col">
                      <div className="rounded-[8px] bg-white pr-[20px] pl-[12px] ">
                        <p className={`${subHeader1Style} mb-[22px]`}>
                          Pengumuman
                        </p>
                        <div className="flex justify-center mt-[180px]">
                          <Image src={NoAnnouncement} className="" />
                        </div>
                        <div>
                          <p className="font-varela font-normal text-[20px] text-center mx-[22px] my-[22px] capitalize">
                            Belum ada pengumuman nih. Tetap stay tune ya!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-[12px] rounded-[8px] lg:mb-0 mb-[24px]">
                      <p
                        className={`${subHeader1Style} mb-[22px] lg:pt-0 pt-[24px]`}>
                        Status Profil
                      </p>
                      <div className="flex justify-center items-center mt-[130px]">
                        <Image src={NotRegistered} />
                      </div>
                      <p className="capitalize font-varela font-normal text-[20px] text-center mx-[32px] mt-[16px] mb-[10px]">
                        Kamu belum mendaftar perlombaan. Yuk, segera daftarkan
                        tim!
                      </p>
                      <div className="flex justify-center pb-6">
                        <CustomButton bgColor="primary" size="normal">
                          <a href="https://bit.ly/TemporaryFormArkavidia">
                            Register Now
                          </a>
                        </CustomButton>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex-col">
                  <div className="bg-white mb-[12px] rounded-[8px] max-h-[320px] pb-[15px]">
                    <div
                      className={`${subHeader1Style} mb-[10px] mt-[0px] pl-[12px] pt-[24px]`}>
                      Countdown
                    </div>
                    <LatestCountdown competition={teamData?.team_category} />
                  </div>
                  <Timeline competition={teamData?.team_category} />
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
      <div className="invisible lg:visible absolute z-0 bottom-0 mb-[-5rem] ml-[-1rem]">
        <Image src={FoxImage} />
      </div>
    </div>
  )
}

export default DashboardInfo

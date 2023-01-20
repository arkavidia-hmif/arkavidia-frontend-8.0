import React from 'react'
import Image from 'next/image'
import academyaLogo from '@src/assets/images/academya.svg'
import AFILogo from '@src/assets/images/afi.svg'
import AGTSLogo from '@src/assets/images/agts.svg'
import arkavtalkLogo from '@src/assets/images/arkavtalk.svg'
import arkavperson from '@src/assets/images/arkavperson.png'
import stars from '@src/assets/images/3star.svg'
import fox from '@src/assets/images/fox.png'
import warning from '@src/assets/images/warning.svg'

// How to use : <DetailEventJumbotron eventName='Academya' />
// eventName can be replaced with 'AFI' or 'AGTS' or 'Arkavtalks to change the logo and description

const EventDetail = (props: any) => {
  const { eventName } = props
  let Title = ''
  let Desc = ''
  const eventTitle = [
    'ARKAVTALKS',
    'ARKAVIDIA FOR INDONESIA',
    'ARKAVIDIA GOES TO SCHOOL',
    'ACADEMYA'
  ]
  const eventDesc = [
    'Merupakan acara seminar yang akan mengundang pembicara-pembicara profesional dalam bidang teknologi informasi. Arkavidia Talks akan terdiri dari dua sesi dengan fokus berbeda dalam bentuk Public Talks dan Advanced Talks. Public talks mencakup topik general untuk masyarakat umum. Sedangkan advanced talks, membawakan topik yang lebih dalam terkait',
    'Merupakan acara pengabdian masyarakat dengan aksi mengajarkan anak-anak panti asuhan di sekitar Bandung mengenai computational thinking. Selain itu, AFI juga akan mengadakan donor darah bersama di tempat dan waktu yang berbeda dengan acara pengabdian masyarakat sebelumnya.',
    'Merupakan acara mengenalkan teknologi kepada siswa-siswa SMA di sekitar Bandung dengan cara melakukan presentasi dan mengadakan group-based project di akhir sebagai wadah praktik dari materi yang telah diberikan.',
    'Arkavidia Academya merupakan bootcamp interaktif dan menyenangkan dengan berbagai macam career path yang bertujuan untuk memperkenalkan dan membimbing para peserta agar dapat mendalami bidang-bidang dalam dunia teknologi yang berhubungan dengan tema utama Arkavidia tahun ini, yaitu “Adaptive Collaboration to Encounter Digital Disruption”.'
  ]
  if (eventName === 'Arkavtalks') {
    Title = eventTitle[0]
    Desc = eventDesc[0]
  } else if (eventName === 'AFI') {
    Title = eventTitle[1]
    Desc = eventDesc[1]
  } else if (eventName === 'AGTS') {
    Title = eventTitle[2]
    Desc = eventDesc[2]
  } else {
    Title = eventTitle[3]
    Desc = eventDesc[3]
  }

  return (
    <div>
      <div
        className="mt-[-100px] relative"
        style={{
          backgroundColor: '#1F307C',
          borderRadius: '50% 50% 0 0',
          width: '100%',
          height: '100%'
        }}>
        <div className="relative">
          <div className="font-bold font-archivo flex justify-center mx-[72px] md:mx-[180px] lg:mx-[300px] text-center text-white text-[24px] md:text-[42px] lg:text-[60px] pt-[40px] md:pt-[75px] lg:pt-[130px] pb-[3px] left-text-shadow-3 md:left-text-shadow-4 lg:left-text-shadow-5">
            {Title}
          </div>
          <div className="font-helvatica lg:font-varela mx-[72px] md:mx-[144px] lg:mx-[360px] mt-[12px] lg:mt-[20px] pb-[50px] md:pb-[80px] lg:pb-[120px] text-justify text-[12px] md:text-[15px] lg:text-[20px] text-white flex justify-center">
            {Desc}
          </div>
          <div className="flex justify-between invisible lg:visible">
            <div className="absolute bottom-0 right-0 z-50 mt-0">
              <Image src={arkavperson} />
            </div>
            <div className="absolute bottom-0 mt-0 z-50 order-first">
              <Image src={fox} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DetailEventJumbotron = (props: any) => {
  const { eventName } = props
  let EventLogo = academyaLogo
  let isPublic = true
  eventName === 'AFI'
    ? (EventLogo = AFILogo)
    : eventName === 'Arkavtalks'
    ? (EventLogo = arkavtalkLogo)
    : eventName === 'AGTS'
    ? (EventLogo = AGTSLogo)
    : (EventLogo = academyaLogo)
  if (eventName === 'AFI' || eventName === 'AGTS') {
    isPublic = false
  } else {
    isPublic = true
  }
  return (
    <div>
      <div
        className="bg-yellow300 pt-[30px] md:pt-[50px] lg:pt-[100px]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #DF9800 25%, transparent 25%), linear-gradient(135deg, #DF9800 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #DF9800 75%),linear-gradient(135deg, transparent 75%, #DF9800 75%)',
          backgroundSize: '180px 180px',
          backgroundPosition: '0 0, 90px 0, 90px -90px, 0px 90px'
        }}>
        <div className="relative">
          <div className="relative flex justify-center z-10 mt-[15px] lg:pt-[15px] scale-[0.5] md:scale-[0.7] lg:scale-[1]">
            <Image src={EventLogo} />
            <div className="absolute z-0 -scale-x-[0.8] scale-y-[0.8] md:-scale-x-[0.9] md:scale-y-[0.9] lg:-scale-x-[1.0] lg:scale-y-[1.0] top-[120px] left-[-200px] md:top-[100px] md:left-[-50px] lg:top-[110px] lg:left-[150px]">
              <Image src={stars} />
            </div>
          </div>
          <div className="">
            <EventDetail eventName={eventName} />
          </div>
        </div>
        {isPublic ? (
          <>
            <div className="bg-white text-[24px] truncate text-clip overflow-hidden font-archivo font-bold whitespace-pre py-[8px] border-y-[2px] border-solid border-black tracking-wide">
              {eventName === 'Arkavtalks'
                ? 'CHOOSE YOUR TOPIC!       CHOOSE YOUR TOPIC!       CHOOSE YOUR TOPIC!      CHOOSE YOUR TOPIC!      CHOOSE YOUR TOPIC!       CHOOSE YOUR TOPIC!'
                : 'CHOOSE YOUR PATH!       CHOOSE YOUR PATH!       CHOOSE YOUR PATH!      CHOOSE YOUR PATH!       CHOOSE YOUR PATH!       CHOOSE YOUR PATH!'}
            </div>
          </>
        ) : (
          <>
            <div className="bg-red300 flex justify-center gap-2 md:gap-6 lg:gap-10 items-center">
              <div className="flex w-[20px] h-[20px] lg:w-[55px] md:w-[35px] md:h-[35px] lg:h-[55px] lg:pt-[5px]">
                <Image src={warning} />
              </div>
              <div className="flex text-yellow200 font-archivo font-bold text-[24px] md:text-[42px] lg:text-[60px] gap-2 lg:gap-5 pt-[3px] blue200-text-shadow-2 md:blue200-text-shadow-3 lg:blue200-text-shadow-5">
                NOT FOR PUBLIC
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DetailEventJumbotron

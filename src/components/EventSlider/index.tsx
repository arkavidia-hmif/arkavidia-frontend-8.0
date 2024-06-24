import Image from 'next/image'
import { useRouter } from 'next/router'
import Arkavtalks from '@src/assets/images/arkavtalk.png'
import AFI from '@src/assets/images/afi.png'
import AGTS from '@src/assets/images/agts.png'
import Academya from '@src/assets/images/academya-logo.png'
import ITFest from '@src/assets/images/itfest.png'
import GalDin from '@src/assets/images/galdin.png'
import { useState, useEffect } from 'react'

/////////////////////////////////////////////////
{
  /* HOW TO USE
 <EventSlider type="pre" /> for Pre-Event Slider
 <EventSlider type="main" /> for Main Event Slider
*/
}
/////////////////////////////////////////////////

interface content {
  name: string
  desc: string
  status: string
  path: string
}

type ContentList = Array<content>

const PreEvent = [
  {
    name: 'Arkavidia Talks',
    desc: 'Merupakan acara seminar yang akan mengundang pembicara-pembicara profesional dalam bidang teknologi informasi. Arkavidia Talks akan terdiri dari dua sesi dengan fokus berbeda dalam bentuk Public Talks dan Advanced Talks. Public talks mencakup topik general untuk masyarakat umum. Sedangkan advanced talks, membawakan topik yang lebih dalam terkait',
    status: 'Terbuka unruk publik',
    path: 'event/talks'
  },
  {
    name: 'Arkavidia For Indonesia',
    desc: 'Merupakan acara pengabdian masyarakat dengan aksi mengajarkan anak-anak panti asuhan di sekitar Bandung mengenai computational thinking. Selain itu, AFI juga akan mengadakan donor darah bersama di tempat dan waktu yang berbeda dengan acara pengabdian masyarakat sebelumnya.',
    status: 'Tidak untuk publik',
    path: 'event/afi'
  },
  {
    name: 'Arkavidia Goes To School',
    desc: 'Merupakan acara mengenalkan teknologi kepada siswa-siswa SMA di sekitar Bandung dengan cara melakukan presentasi dan mengadakan group-based project di akhir sebagai wadah praktik dari materi yang telah diberikan.',
    status: 'Tidak untuk publik',
    path: 'event/agts'
  }
]

const MainEvent = [
  {
    name: 'Arkavidia Academya',
    desc: 'Arkavidia Academya merupakan bootcamp interaktif dan menyenangkan dengan berbagai macam career path yang bertujuan untuk memperkenalkan dan membimbing para peserta agar dapat mendalami bidang-bidang dalam dunia teknologi yang berhubungan dengan tema utama Arkavidia tahun ini, yaitu “Adaptive Collaboration to Encounter Digital Disruption',
    status: 'Terbuka untuk mahasiswa',
    path: 'event/academya'
  },
  {
    name: 'IT Fest',
    desc: 'Merupakan pameran yang akan diisi oleh berbagai perusahaan/startup. Melalui acara ini, perusahaan-perusahaan memiliki kesempatan untuk mengenalkan teknologi produk mereka ke khalayak umum serta membuka kesempatan bagi para pengunjung untuk turut berpartisipasi dalam perusahaan sebagai seorang intern.',
    status: 'Terbuka untuk publik',
    path: 'event/itfest'
  },
  {
    name: 'Gala Dinner',
    desc: 'Merupakan acara terakhir sekaligus penutup dari rangkaian acara dan kompetisi Arkavidia 8.0. Acara ini akan berisi awarding nights sebagai bentuk apresiasi bagi finalis lomba Arkavidia 8.0 dan sponsor. Pemenang dari tiap lomba juga akan diumumkan di Gala Dinner.',
    status: 'Ekslusif untuk peserta',
    // BELUM ADA PATH NYA
    path: 'event/itfest'
  }
]

const EventSlider = ({ type }: { type: string }) => {
  const router = useRouter()

  const slides = type === 'pre' ? PreEvent : MainEvent

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [slides.length])

  const handleNextClick = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
  }

  const handlePreviousClick = () => {
    setCurrentSlide(
      prevSlide => (prevSlide - 1 + slides.length) % slides.length
    )
  }

  const handleSlideClick = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  let logos
  if (type === 'pre') {
    logos = (
      <div className="md:pl-[60px] flex items-center gap-[60px] mr-gap absolute -top-[10%] md:-top-[20%]">
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(0)}>
          <Image
            src={Arkavtalks}
            height={'180px'}
            width={'120px'}
            objectFit="contain"
            className={
              currentSlide === 0
                ? 'hover:grayscale-0'
                : 'grayscale hover:grayscale-0'
            }
          />
        </div>
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(1)}>
          <Image
            src={AFI}
            height={'180px'}
            width={'200px'}
            objectFit="contain"
            className={
              currentSlide === 1
                ? 'hover:grayscale-0'
                : 'grayscale hover:grayscale-0'
            }
          />
        </div>
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(2)}>
          <Image
            src={AGTS}
            height={'180px'}
            width={'180px'}
            objectFit="contain"
            className={
              currentSlide === 2
                ? 'hover:grayscale-0'
                : 'hover:grayscale-0 grayscale'
            }
          />
        </div>
      </div>
    )
  } else {
    logos = (
      <div className="flex items-center gap-[60px] absolute -top-[5%] md:-top-[20%]">
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(0)}>
          <Image
            src={Academya}
            height={'180px'}
            objectFit="contain"
            className={
              currentSlide === 0
                ? 'hover:grayscale-0 '
                : 'grayscale hover:grayscale-0 '
            }
          />
        </div>
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(1)}>
          <Image
            src={ITFest}
            height={'180px'}
            objectFit="contain"
            className={
              currentSlide === 1
                ? 'hover:grayscale-0'
                : 'grayscale hover:grayscale-0'
            }
          />
        </div>
        <div
          className="cursor-pointer h-[180px] hover:scale-110"
          onClick={() => handleSlideClick(2)}>
          <Image
            src={GalDin}
            height={'180px'}
            objectFit="contain"
            className={
              currentSlide === 2
                ? 'hover:grayscale-0'
                : 'grayscale hover:grayscale-0'
            }
          />
        </div>
      </div>
    )
  }

  let status
  if (slides[currentSlide].status.slice(0, 5).toLowerCase() === 'tidak') {
    status = (
      <p className="text-[#F43518] text-[12px] md:text-[14px] px-[12px] font-helvatica rounded-[15px] border-solid border-[#F43518] border-2 mt-20 mb-8">
        {slides[currentSlide].status}
      </p>
    )
  } else {
    status = (
      <p className="text-[#069154] text-[12px] md:text-[14px] px-[12px] font-helvatica bg-[#E6FEED] rounded-[15px] border-solid border-[#069154] border-2 mt-20 mb-8">
        {slides[currentSlide].status}
      </p>
    )
  }

  return (
    <div className="mt-32 bg-[#FFEADF] max-w-[74vw] flex flex-col items-center px-[80px] py-[30px]  md:px-[100px] md:py-[43px] rounded-[24px] relative">
      {logos}
      {/* <p className="text-[#069154] text-[12px] px-[12px] font-helvatica bg-[#E6FEED] rounded-[15px] border-solid border-[#069154] border-2 mt-20 mb-8">
        {slides[currentSlide].status}
      </p> */}
      {status}
      <p className="font-archivo text-[24px] md:text-[48px] text-center leading-tight min-h-[80px]">
        {slides[currentSlide].name}
      </p>
      <p className="font-helvatica text-[12px] md:text-[16px] text-justify mb-8 min-h-[200px] md:min-h-[100px]">
        {slides[currentSlide].desc}
      </p>
      <button className="bg-[#1F307C] py-[10px] px-[16px] md:py-[15px] md:px-[125px] rounded-[12px] text-white text-[12px] md:text-[16px] font-helvatica md:text-[16px]" onClick={() => router.push(slides[currentSlide].path)}>
        Lihat Selengkapnya
      </button>
      <div className="absolute top-1/2 left-0 p-4">
        <button
          className="bg-[#F43518] text-white py-2 px-4 rounded-[50%] font-archivo"
          onClick={handlePreviousClick}>{`<`}</button>
      </div>
      <div className="absolute top-1/2 right-0 p-4">
        <button
          className="bg-[#F43518] text-white py-2 px-4 rounded-[50%] font-archivo"
          onClick={handleNextClick}>{`>`}</button>
      </div>
    </div>
  )
}

export default EventSlider

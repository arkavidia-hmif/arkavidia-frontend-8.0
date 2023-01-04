import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import CompeIcon from 'src/assets/images/compe_icon.png'
import CompeImage from 'src/assets/images/compe_img.png'
import Clock from 'src/assets/images/clock.svg'
import TimelineItem from './TimelineItem'
import { timeline } from '@src/const/TimelineLanding'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'

const datas = [
  {
    title: 'COMPETITION',
    value:
      'Competition merupakan salah satu main event yang diselenggarakan untuk menguji kemampuan peserta dalam memecahkan persoalan yang ada pada berbagai bidang teknologi informasi. Dengan adanya perlombaan ini, diharapkan peserta pada khususnya dapat melatih kemampuan pemecahan masalah yang ada sebagai bentuk persiapan dalam memecahkan masalah-masalah yang ditemukan di dunia nyata. Terdapat empat cabang perlombaan yang diselenggarakan dalam Arkavidia 8.0, yakni Competitive Programming, Datavidia, UXvidia, dan Arkalogica.'
  },
  {
    title: 'AGTS',
    value:
      'Arkavidia Goes To School merupakan salah satu pre-event yang berupa kunjungan ke Sekolah Menengah Atas (SMA) atau sederajat di Bandung dan sekitarnya. Kegiatan ini bertujuan untuk memperkenalkan dan juga menyadarkan adik-adik SMA terhadap tema utama Arkavidia tahun ini, yaitu Adaptive Collaboration to Encounter Digital Disruption, secara interaktif dan menyenangkan agar dapat dimengerti oleh adik-adik SMA. Untuk penyampaiannya, akan dilakukan seminar beserta kegiatan group-based project. Hal ini bertujuan agar ilmu yang disampaikan melalui seminar dapat langsung diimplementasikan melalui project tersebut.'
  },
  {
    title: 'ACADEMYA',
    value:
      'Arkavidia Academya merupakan salah satu pre-event yang bertujuan untuk meningkatkan kemampuan mahasiswa dan siswa SMA/sederajat dalam bidang informatika. Dalam pelaksanaannya, Arkavidia Academya bekerjasama dengan perusahaan atau startup di Indonesia yang bergerak dalam bidang teknologi untuk mengadakan bootcamp dengan topik keinformatikaan. Kegiatan bootcamp ini mencakup pembahasan teori, praktik, dan pengerjaan tugas. Setelah mengikuti Arkavidia Academya, peserta diharapkan memiliki pengetahuan dan kemampuan yang bermanfaat untuk bisa bersaing di era digital ini.'
  },
  {
    title: 'AFI',
    value:
      'Arkavidia For Indonesia (AFI) merupakan salah satu main event yang bertujuan untuk mengaplikasikan ilmu-ilmu yang didapat dari perkuliahan melalui pengabdian masyarakat. AFI berfokus untuk membantu masyarakat di bidang pendidikan, khususnya dengan mengadakan pelatihan khusus mengenai penggunaan Google Workspace kepada pendidik di beberapa sekolah dan membantu pengadaan pendukung keberlangsungan sekolah (baik barang fisik maupun tidak fisik) sehingga proses pembelajaran lebih efektif dan efisien terutama untuk kegiatan yang berhubungan langsung dengan Kegiatan Belajar Mengajar (KBM).'
  },
  {
    title: 'TALKS',
    value:
      'Arkavidia Talks merupakan salah satu main event berupa seminar yang mengundang praktisi dan profesional dalam industri teknologi informasi. Tujuan kegiatan ini adalah sebagai media pertukaran ide dari berbagai disiplin yang terkait IT guna menambah wawasan mengenai perkembangan teknologi dan membuka kesempatan untuk kolaborasi. Arkavidia Talks akan terdiri dari dua sesi dengan fokus berbeda dalam bentuk Public Talks (untuk memperkenalkan inovasi teknologi informasi secara general) dan Advanced Talks (untuk memperkaya wawasan masyarakat akan teknologi yang berhubungan dengan perkembangan di industri IT). Selain itu, terdapat pula podcast yang akan diisi oleh pembicara dengan tema yang berhubungan dengan dunia IT serta dikemas secara semiformal.'
  },
  {
    title: 'IT Fest',
    value:
      'IT Festival merupakan pameran yang diisi oleh berbagai perusahaan dan startup di bidang teknologi informasi. Selain itu, startup/perusahaan juga dapat membuka kesempatan bagi para pengunjung untuk turut berpartisipasi dalam perusahaan sebagai seorang intern. Kegiatan ini diharapkan dapat mencerdaskan sekaligus merangkul pengunjung yang hadir. Dengan metode penyampaian yang menarik dan interaktif, diharapkan pengunjung dapat mengenal dan dapat ikut membantu mengedukasi masyarakat luas dengan pengetahuan mengenai startup dan teknologi yang bersangkutan.'
  }
]

export default function Timeline() {
  return (
    <>
      <div className="absolute">
        <div className="relative top-[0px] left-[0px]">
          <Image src={Clock} />
        </div>
      </div>
      <div className="container mx-auto w-3/4 pt-[20px]">
        <h1 className="text-center text-[60px] font-archivo font-[900] mb-[60px]">
          TIMELINE
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-28 text-center">
          <div className="col-span-2">
            <div className="grid-rows-2">
              <div className="grid grid-cols-11 gap-2 box-border overflow-hidden ">
                <div className=" col-span-5 border-2 border-black bg-green300 overflow-hidden">
                  <Image src={CompeIcon} />
                </div>
                <div className="col-span-6 relative">
                  <Image src={CompeImage} layout="fill" />
                </div>
              </div>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true
                }}
                modules={[Autoplay, Pagination]}>
                {datas.map((data, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="flex flex-col gap-6 bg-cream300 w-full mt-2 mb-8 p-4 border-2 border-black">
                        <div className="text-4xl font-['Archivo']">
                          {data.title}
                        </div>
                        <div className="text-base leading-4 font-helvetica text-justify">
                          {data.value}
                        </div>
                        <button
                          className={`bg-[#1F307C] h-fitcontent text-white font-bold btn py-2 px-4 rounded-lg w-full`}>
                          Lihat Selengkapnya
                        </button>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 h-min relative">
            <div className="w-[2px] h-[90%] bg-black t-0 l-0 absolute z-10" />
            {timeline.map((item, idx) => (
              <TimelineItem
                key={idx}
                dateStart={item.dateStart}
                dateEnd={item.dateEnd}
                title={item.title}
                dateString={item.dateString}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import CompeIcon from 'src/assets/images/compe_icon.png'
import CompeImage from 'src/assets/images/compe_img.png'
import Clock from 'src/assets/images/clock.png'
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
      'Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'ACADEMY',
    value:
      'Academy adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'COMPETITION',
    value:
      'Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'COMPETITION',
    value:
      'Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'COMPETITION',
    value:
      'Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]

export default function Timeline() {
  return (
    <div className="container mx-auto pt-20 w-3/4">
      <div className="absolute top-0 left-0">
        <Image src={Clock} />
      </div>
      <h1 className="text-center text-[60px] font-archivo font-[900] mb-[60px]">
        TIMELINE
      </h1>
      <div className="grid grid-cols-5 gap-28 text-center ">
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
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
              {datas.map((data, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col gap-6 bg-cream300 w-full h-[375px] mt-2 p-4 border-2 border-black">
                      <div className="text-4xl font-['Archivo']">{data.title}</div>
                      <div className="text-base leading-4 text-left font-helvetica">
                        {data.value}
                      </div>
                      <button
                        className={`bg-[#1F307C] h-12 text-white font-bold btn py-2 px-4 rounded-lg w-full`}>
                        Lihat Selengkapnya
                      </button>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <div className="col-span-3 h-min relative">
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
  )
}

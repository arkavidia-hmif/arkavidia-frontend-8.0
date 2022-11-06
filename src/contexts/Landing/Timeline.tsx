import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Logo from "src/assets/images/logo_arkav.png";
import colours from "@src/utils/colors";
import TimelineItem from "./TimelineItem";
import { timeline } from "@src/const/TimelineLanding";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const data = [
    {
        title: "COMPETITION",
        value: "Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        title: "ACADEMY",
        value: "Academy adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function Timeline() {
    return(
        <div className="container mx-auto pt-20 w-3/4">
            <div className="grid grid-cols-5 gap-4 text-center">
                <div className="col-span-2">
                    <div className="grid-rows-2">
                        <div className="grid grid-cols-11 gap-2 h-80">
                            <div className="col-span-5 border-2 border-black">
                                <Image src={Logo} />
                            </div>
                            <div className="col-span-6 border-2 border-black">
                                <Image src={Logo} />
                            </div>
                        </div>
                        <div className={`bg-[#FFEADF] h-80 w-full mt-2 p-4 border-2 border-black`}>
                            <div className="text-4xl font-['Archivo'] mx-2">
                                COMPETITION
                            </div>
                            <div className="text-base leading-4 text-left font-['Helvetica'] mt-4">
                                Competition adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <button className={`bg-[#1F307C] h-12 text-white font-bold btn py-2 px-4 rounded-lg w-full mt-2`}>Lihat Selengkapnya</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    {timeline.map(item => (
                        <TimelineItem
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
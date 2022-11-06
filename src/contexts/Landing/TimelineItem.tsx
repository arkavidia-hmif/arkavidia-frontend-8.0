import { useState } from "react";
import colours from "@src/utils/colors";
import Image from "next/image";
import Logo from "src/assets/images/logo_arkav.png";

type timelineProps = {
    dateStart: Date
    dateEnd: Date
    title: string
    dateString: string
}

const TimelineItem = ({ dateStart, dateEnd, title, dateString }: timelineProps) => {
    const currentDate = new Date();

    return (
        <div className="container inline-flex">
            <div className="h-full">
                <Image src={Logo} height={"50px"} width={"50px"}/>
            </div>
            <div className={`${(dateStart.getTime() <= currentDate.getTime() && currentDate.getTime() <= dateEnd.getTime()) 
                ? 
                'bg-[#FEB20E] border-black' : 'border-white'} border-2 mb-2 py-1 w-full`}>
                <div className="text-left mx-8 text-2xl font-['Archivo']">
                    {title}
                </div>
                <div className="text-left mx-8 text-l font-['Varela-Round']">
                    {dateString}
                </div>
            </div>  
        </div>
    )
}

export default TimelineItem;
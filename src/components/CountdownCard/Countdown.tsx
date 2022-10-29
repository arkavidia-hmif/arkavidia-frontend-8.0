import React, { useEffect, useState } from 'react';

interface CountdownProps {
    date: string;
    dateString: string;
    title: string;
}

const Countdown = ({date, dateString, title} : CountdownProps) => {
    const [habis, setHabis] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const target = new Date(date);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
            const s = Math.floor(difference % (1000 * 60) / (1000));

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0 ){
                setHabis(1);
            }
        }, 1000)
        return(() => clearInterval(interval))
    },[])

    // Pembagian 6 Digit
    const d1 = Math.floor(days/10);
    const d2 = days % 10;
    const h1 = Math.floor(hours/10);
    const h2 = hours % 10;
    const m1 = Math.floor(minutes/10);
    const m2 = minutes % 10;
    const s1 = Math.floor(seconds/10);
    const s2 = seconds % 10;

    const PrintWaktu = (w1: number, w2: number, str: string) => {
        return(
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex bg-white rounded-md drop-shadow-md border-2 border-black ml-0.5 mr-0.5">
                        <span className="font-archivo text-lg p-2">{w1}</span>
                    </div>
                    <div className="flex bg-white rounded-md drop-shadow-md border-2 border-black ml-0.5 mr-0.5">
                        <span className="font-archivo text-lg p-2">{w2}</span>
                    </div>
                </div>
                <span className="label font-helvetica text-[10px] md:text-sm font-bold text-white ml-0.5 mt-0.5">{str}</span>
            </div>
        );
    };

    return (
        <>
    {habis ? (
        <div className="flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center space-y-2 bg-orange-400 pt-1 justify-center overflow-hidden">
            {/* Bagian title */}
            <div className="w-40 bg-black rounded-md font-archivo text-white text-center text-sm">{title}</div>
            {/* Bagian tanggal */}
            <div className="font-varela text-center md:text-sm">{dateString}</div>
            {/* Bagian countdown */}
            <div className="grid grid-rows-2 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4">
                <div className="flex flex-row items-baseline pb-1">
                    {PrintWaktu(0, 0, "DAYS")}
                    <div className="flex font-archivo text-lg p-2">:</div>
                    {PrintWaktu(0, 0, "HOURS")}
                </div>
                <div className="flex flex-row items-baseline pb-1">
                    {PrintWaktu(0, 0, "MINUTES")}
                    <div className="font-archivo text-lg p-2">:</div>
                    {PrintWaktu(0, 0, "SECONDS")}
                </div>
            </div>
        </div>
    </div>

    ) 
    : 
    (
    <div className="flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center space-y-2 bg-orange-400 pt-1 justify-center overflow-hidden">
            {/* Bagian title */}
            <div className="w-40 bg-black rounded-md font-archivo text-white text-center text-sm">{title}</div>
            {/* Bagian tanggal */}
            <div className="font-varela text-center text-sm">{dateString}</div>
            {/* Bagian countdown */}
            <div className="grid grid-rows-2 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4">
                <div className="flex flex-row items-baseline pb-1">
                    {PrintWaktu(d1, d2, "DAYS")}
                    <div className="flex font-archivo text-lg p-2">:</div>
                    {PrintWaktu(h1, h2, "HOURS")}
                </div>
                <div className="flex flex-row items-baseline pb-1">
                    {PrintWaktu(m1, m2, "MINUTES")}
                    <div className="font-archivo text-lg p-2">:</div>
                    {PrintWaktu(s1, s2, "SECONDS")}
                </div>
            </div>
        </div>
    </div>
    )}
    </>
  );
};

export default Countdown;
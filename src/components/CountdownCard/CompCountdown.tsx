import React, { useEffect, useState } from 'react'

interface CountdownProps {
  date: string
  title: string
}

const PrintWaktu = (w1: number, w2: number, str: string) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <div className="flex bg-white rounded-2xl drop-shadow-md border-2 border-black ml-2 mr-2">
          <span className="font-archivo text-2xl font-black py-8 px-5">
            {w1}
          </span>
        </div>
        <div className="flex bg-white rounded-2xl drop-shadow-md border-2 border-black ml-2 mr-2">
          <span className="font-archivo text-2xl font-black py-8 px-5">
            {w2}
          </span>
        </div>
      </div>
      <span className="label font-helvetica text-[10px] md:text-sm font-bold text-white ml-2 mt-2">
        {str}
      </span>
    </div>
  )
}

const PrintCountdown = (
  d1: number,
  d2: number,
  h1: number,
  h2: number,
  m1: number,
  m2: number,
  s1: number,
  s2: number
) => {
  // Enabling window object, by using useEffect
  let isSmallScreen
  useEffect(() => {
    if (window !== undefined) {
      window.matchMedia('(max-width: 768px)').matches
      isSmallScreen = window.matchMedia('(max-width: 1024px)').matches
    }
  }, [])

  // Check if the screen is lg.

  return isSmallScreen ? (
    <div className="flex flex-row items-baseline pb-1">
      {PrintWaktu(d1, d2, 'DAYS')}
      <div className="flex font-archivo text-6xl p-2">:</div>
      {PrintWaktu(h1, h2, 'HOURS')}
      <div className="font-archivo text-6xl p-2">:</div>
      {PrintWaktu(m1, m2, 'MINUTES')}
    </div>
  ) : (
    <div className="flex flex-row items-baseline pb-1">
      {PrintWaktu(d1, d2, 'DAYS')}
      <div className="flex font-archivo text-6xl p-2">:</div>
      {PrintWaktu(h1, h2, 'HOURS')}
      <div className="font-archivo text-6xl p-2">:</div>
      {PrintWaktu(m1, m2, 'MINUTES')}
    </div>
  )
}

const Countdown = ({ date, title }: CountdownProps) => {
  const [habis, setHabis] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const target = new Date(date)

  console.log(habis)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setHabis(true)
      }else setHabis(false)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Pembagian 6 Digit
  const d1 = Math.floor(days / 10)
  const d2 = days % 10
  const h1 = Math.floor(hours / 10)
  const h2 = hours % 10
  const m1 = Math.floor(minutes / 10)
  const m2 = minutes % 10
  const s1 = Math.floor(seconds / 10)
  const s2 = seconds % 10

  return (
    <>
      {/* Box */}
      <div className="flex flex-col items-center space-y-2 bg-brownblack pt-1 justify-center overflow-hidden">
        {/* Bagian title */}
        <div className="p-2.5 uppercase mb-6 font-archivo text-black text-center text-sm lg:bg-black lg:text-white lg:text-4xl">
          {title}
        </div>
        {/* Bagian countdown */}
        {habis
          ? PrintCountdown(0, 0, 0, 0, 0, 0, 0, 0)
          : PrintCountdown(d1, d2, h1, h2, m1, m2, s1, s2)}
      </div>
    </>
  )
}

export default Countdown

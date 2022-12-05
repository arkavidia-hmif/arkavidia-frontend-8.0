import React, { useEffect, useState } from 'react'

interface CountdownProps {
  date: string
}

const PrintWaktu = (w1: number, w2: number, str: string) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-0.5">
        <div className="flex bg-white rounded-[10px] drop-shadow-md border-2 border-black ml-0.5 mr-0.5">
          <span className="font-archivo text-[24px] p-[10px]">{w1}</span>
        </div>
        <div className="flex bg-white rounded-[10px] drop-shadow-md border-2 border-black ml-0.5 mr-0.5">
          <span className="font-archivo text-[24px] p-[10px]">{w2}</span>
        </div>
      </div>
      <span className="label font-helvatica text-[12px] md:text-sm font-bold text-black ml-0.5 mt-1">
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
  let isSmallScreen
  // Enabling window object, by using useEffect
  useEffect(() => {
    window.matchMedia('(max-width: 768px)').matches
    // Check if the screen is lg.
    isSmallScreen = window.matchMedia('(max-width: 1024px)').matches
  }, [])

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2">
      <div className="flex flex-row items-baseline">
        {PrintWaktu(d1, d2, 'DAYS')}
        <div className="font-archivo text-lg p-2">:</div>
        {PrintWaktu(h1, h2, 'HOURS')}
      </div>
      <div className="flex flex-row items-baseline">
        {PrintWaktu(m1, m2, 'MINUTES')}
        <div className="font-archivo text-lg p-2">:</div>
        {PrintWaktu(s1, s2, 'SECONDS')}
      </div>
    </div>
  )
}

const DashboardCountdown = ({ date }: CountdownProps) => {
  const [habis, setHabis] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const target = new Date(date)

  console.log(date)

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
      } else setHabis(false)
    }, 1000)
    return () => clearInterval(interval)
  }, [date])

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
      <div className="flex flex-col items-center space-y-2 bg-white pt-1 justify-center overflow-hidden">
        {/* Bagian countdown */}
        {habis
          ? PrintCountdown(0, 0, 0, 0, 0, 0, 0, 0)
          : PrintCountdown(d1, d2, h1, h2, m1, m2, s1, s2)}
      </div>
    </>
  )
}

export default DashboardCountdown

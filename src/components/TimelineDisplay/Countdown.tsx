import { useEffect, useState } from 'react'

function dateDifference(date1: Date, date2: Date) {
  const dateDifference = date2.getTime() - date1.getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24

  const dayDifference = Math.floor(dateDifference / day)
  const hourDifference = Math.floor(
    (dateDifference - Math.floor(dateDifference / day) * day) / hour
  )
  const minuteDifference = Math.floor(
    (dateDifference - Math.floor(dateDifference / hour) * hour) / minute
  )

  return {
    day: dayDifference,
    hour: hourDifference,
    minute: minuteDifference
  }
}

export default function Countdown({ targetDate }: { targetDate: Date }) {
  const [currentDate, setCurrentDate] = useState(
    dateDifference(new Date(), targetDate)
  )
  useEffect(() => {
    setInterval(
      () => setCurrentDate(dateDifference(new Date(), targetDate)),
      1000
    )
  }, [])

  return (
    <div className="flex flex-row items-center justify-center">
      <TimeCountdown timeFrame="Days" remaining={currentDate.day} />
      <p className="text-6xl font-black">:</p>
      <TimeCountdown timeFrame="Hours" remaining={currentDate.hour} />
      <p className="text-6xl font-black">:</p>
      <TimeCountdown timeFrame="Minutes" remaining={currentDate.minute} />
    </div>
  )
}

function TimeCountdown({
  remaining,
  timeFrame
}: {
  remaining: number
  timeFrame: string
}) {
  const stringRemaining = remaining.toString().padStart(2, '0')
  return (
    <section className="flex flex-col items-center px-8">
      <div className="flex gap-4 items-center justify-start">
        <NumberBar value={stringRemaining[0]} />
        <NumberBar value={stringRemaining[1]} />
      </div>
      <h4 className="text-base font-bold text-white py-3 w-full self-stretch text-center">
        {timeFrame.toUpperCase()}
      </h4>
    </section>
  )
}

function NumberBar({ value }: { value: string }) {
  return (
    <div className="pt-[2.125rem] pb-[1.9375rem] px-5 font-archivo font-black text-6xl shadow-lg shadow-black border-[3px] border-black rounded-[20px]">
      <p>{value}</p>
    </div>
  )
}

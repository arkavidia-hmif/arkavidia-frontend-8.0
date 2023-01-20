import EventCountdown from '@src/components/CountdownCard/CompDetailCountdown'
import EventTimeline from '@src/components/Timeline/EventTimeline'
import Image from 'next/image'
import Star from '@src/assets/images/3star.svg'

interface AppProps {
  dates: {
    title: string
    startDate: Date
    endDate: Date
  }[]
}

export default function Timeline({ dates }: AppProps) {
  const nearestDate = { title: '', startDate: new Date() }
  for (const date of dates) {
    if (date.startDate.getTime() - Date.now() >= 0) {
      nearestDate.title = date.title
      nearestDate.startDate = date.startDate
      break
    }
  }

  return (
    <section className="w-full flex flex-col items-center bg-[#1F307C] pt-[3rem] relative">
      <div className="hidden lg:block absolute left-5 top-10">
        <Image src={Star} />
      </div>
      <h3 className="text-white text-6xl text-center uppercase font-archivo mb-16">
        Timeline
      </h3>
      <EventCountdown
        date={nearestDate.startDate.toString()}
        title={nearestDate.title}
      />
      <EventTimeline dates={dates} />
    </section>
  )
}

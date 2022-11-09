import CompCountdown from '@src/components/CountdownCard/CompCountdown'
import CompTimeline from '@src/components/Timeline/CompTimeline'

interface AppProps {
  dates: {
    title: string
    startDate: Date
    endDate: Date
  }[]
}

export default function Timeline({ dates }: AppProps) {
  let nearestDate = { title: '', startDate: new Date() }
  for (const date of dates) {
    if (date.startDate.getTime() - Date.now() >= 0) {
      nearestDate.title = date.title
      nearestDate.startDate = date.startDate
      break
    }
  }

  return (
    <section className="w-full flex flex-col items-center bg-yellow300 pt-24 pb-8">
      <h3 className="font-black text-6xl text-center uppercase font-archivo mb-16">
        Timeline
      </h3>
      <CompCountdown
        date={nearestDate.startDate.toString()}
        title={nearestDate.title}
      />
      <CompTimeline dates={dates} />
    </section>
  )
}

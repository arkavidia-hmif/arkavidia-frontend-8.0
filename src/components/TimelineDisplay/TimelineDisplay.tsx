import Countdown from './Countdown'
import Timeline from './Timeline'

export interface TimelineEvent {
  name: string
  year: number
  month: number
  date: number
}

export default function TimelineDisplay({
  targetYear,
  targetDate,
  targetMonth,
  events,
  hideTimeline = false
}: {
  targetYear: number
  targetMonth: number
  targetDate: number
  events: TimelineEvent[]
  hideTimeline?: boolean
}) {
  return (
    <section className="flex flex-col items-center justify-start w-full gap-8">
      {!hideTimeline ? (
        <h2 className="text-white font-archivo text-2xl lg:text-6xl">
          TIMELINE
        </h2>
      ) : null}
      <section className="flex flex-col items-center justify-start w-full">
        <h3 className="text-white text-center bg-black p-1 lg:p-[0.625rem] font-archivo text-xs lg:text-4xl mb-3 lg:mb-7 inline-block w-fit">
          REGISTRATION
        </h3>
        <Countdown targetDate={new Date(targetYear, targetMonth, targetDate)} />
        <Timeline events={events} />
      </section>
    </section>
  )
}

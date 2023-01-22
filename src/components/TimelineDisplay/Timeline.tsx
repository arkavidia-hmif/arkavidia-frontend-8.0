import VinylRecord from 'src/assets/images/vinylRecord.svg'
import type { TimelineEvent } from './TimelineDisplay'
import Image from 'next/image'

function widthOnDuration(events: TimelineEvent[]) {
  const {
    year: lastYear,
    month: lastMonth,
    date: lastDate
  } = events[events.length - 1]
  const { year: firstYear, month: firstMonth, date: firstDate } = events[0]
  const latestDate = new Date(lastYear, lastMonth - 1, lastDate)
  const oldestDate = new Date(firstYear, firstMonth - 1, firstDate)
  const todayDate = new Date()
  const totalTimespan = latestDate.getTime() - oldestDate.getTime()
  const spentTimespan = todayDate.getTime() - oldestDate.getTime()
  const width =
    spentTimespan / totalTimespan < 1
      ? spentTimespan / totalTimespan >= 0
        ? spentTimespan / totalTimespan
        : 0
      : 1
  return width
}

function widthOnCompleted(events: TimelineEvent[]) {
  const todayDate = new Date()
  const nCompletedEvent = events.filter(event => {
    return (
      new Date(event.year, event.month - 1, event.date).getTime() <=
      todayDate.getTime()
    )
  }).length

  const width = nCompletedEvent / events.length
  return width
}

export default function Timeline({
  events,
  progressOnComplete = true
}: {
  events: TimelineEvent[]
  progressOnComplete?: boolean
}) {
  const progressBarWidth = progressOnComplete
    ? widthOnCompleted(events)
    : widthOnDuration(events)
  return (
    <div className="bg-gradient-to-t to-transparent from-red200 pt-[2.25rem] w-full max-w-7xl flex flex-col justify-start items-start pb-4">
      <div className="w-full overflow-x-auto max-w-7xl pb-4 snap-x snap-mandatory flex flex-row items-start justify-start">
        <div className="flex-grow"></div>
        <div className="w-fit flex flex-row items-center justify-center">
          {events.map((event, index) => {
            return (
              <TimelinePoint
                event={event}
                key={event.name}
                completed={
                  new Date(event.year, event.month - 1, event.date).getTime() <=
                  new Date().getTime()
                }
              />
            )
          })}
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="px-3 w-full self-start">
        <div className="w-full bg-yellow200 h-4 rounded-full relative">
          <div
            className={`absolute z-10 top-0 left-0 h-full bg-white rounded-full`}
            style={{ width: `${progressBarWidth * 100}%` }}></div>
        </div>
      </div>
    </div>
  )
}

function TimelinePoint({
  event,
  completed
}: {
  event: TimelineEvent
  completed: boolean
}) {
  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
  return (
    <article className="flex flex-col items-center justify-start font-archivo w-[16.25rem] snap-end">
      <div className="h-[4.5rem] w-full p-0 relative flex items-center justify-center">
        <div className="flex items-center justify-center w-full top-1/2 absolute">
          <div
            className={`${
              completed ? 'bg-white h-1' : 'bg-black h-[0.125rem]'
            } w-full`}></div>
        </div>
        <Image src={VinylRecord} alt="Vinyl Record" className="h-full" />
      </div>
      <h4 className="text-2xl font-black">{event.name}</h4>
      <p className="text-base font-bold">
        {event.date} {month[event.month - 1]} {event.year}
      </p>
    </article>
  )
}

import VinylRecord from 'src/assets/images/vinylRecord.svg'
import type { TimelineEvent } from './TimelineDisplay'
import Image from 'next/image'

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="bg-gradient-to-t to-transparent from-red200 pt-[2.25rem] mx-28">
      <div className="relative z-10 border-t-2 border-black flex flex-row">
        {events.map(event => {
          return <TimelinePoint event={event} key={event.name} />
        })}
      </div>
    </div>
  )
}

function TimelinePoint({ event }: { event: TimelineEvent }) {
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
    <article className="flex flex-col items-center justify-start font-archivo w-[16.25rem] -translate-y-[2.25rem]">
      <Image
        src={VinylRecord}
        alt="Vinyl Record"
        className="h-[4.5rem] aspect-auto p-0"
      />
      <h4 className="text-2xl font-black">{event.name}</h4>
      <p className="text-base font-bold">
        {event.date} {month[event.month]} {event.year}
      </p>
    </article>
  )
}

import Countdown from './Countdown'

export default function TimelineDisplay({
  targetYear,
  targetDate,
  targetMonth
}: {
  targetYear: number
  targetMonth: number
  targetDate: number
}) {
  return (
    <section className="flex flex-col items-center justify-start w-full gap-8">
      <h2 className="text-white font-archivo text-2xl lg:text-6xl">TIMELINE</h2>
      <section className="flex flex-col items-center justify-start">
        <h3 className="text-white text-center bg-black p-1 lg:p-[0.625rem] font-archivo text-4xl mb-7 inline-block w-fit">
          REGISTRATION
        </h3>
        <Countdown targetDate={new Date(targetYear, targetMonth, targetDate)} />
      </section>
    </section>
  )
}

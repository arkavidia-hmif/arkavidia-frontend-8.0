import CompCountdown from '@src/components/CountdownCard/CompCountdown'

interface AppProps {
  date: Date
}

export default function Timeline({ date }: AppProps) {
  return (
    <section className="w-full flex flex-col items-center bg-yellow300 pt-24">
      <h3 className="font-black text-6xl text-center uppercase font-archivo mb-16">
        Timeline
      </h3>
      <CompCountdown date={date.toString()} title="Registration" />
    </section>
  )
}

import PodcastCard, { CardProps } from '@src/components/Card/PodcastCard'

/** Podcast section properties */
interface SectionProps {
  podcasts: CardProps[]
}

/**
 * Podcast section
 * @param podcasts - List of Podcast
 */
export default function TemaTalks({ podcasts }: SectionProps): JSX.Element {
  return (
    <section className="w-full bg-[#FEB20E] relative pb-20">
      <h1 className="flex justify-center text-center text-4xl lg:text-6xl font-archivo py-10 mb-10">
        PODCAST
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {podcasts.map((cardProps, idx) => (
          <div key={idx}>
            <PodcastCard {...cardProps} />
          </div>
        ))}
      </div>
    </section>
  )
}

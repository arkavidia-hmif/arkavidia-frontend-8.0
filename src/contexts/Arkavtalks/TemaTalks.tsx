import TemaTalksCard, { CardProps } from '@src/components/Card/TemaTalksCard'

/** Tema talks section properties */
interface SectionProps {
  talks: CardProps[]
}

/**
 * Tema talks section
 * @param talks - List of talks
 */
export default function TemaTalks({ talks }: SectionProps): JSX.Element {
  return (
    <section className="bg-[#FEB20E] relative pt-10">
      <div
        className="absolute z-5 top-0"
        style={{
          backgroundColor: '#1F307C',
          borderRadius: '0 0 100% 100%',
          width: '100%',
          height: '15%'
        }}>
        .
      </div>
      <div className="min-w-[248px] w-[78.5vw] max-w-[568px] mx-auto py-20 lg:max-w-none">
        {talks.map((cardProps, idx) => (
          <div
            key={idx}
            className="group w-full flex gap-4 mt-6 first:mt-0 md:mt-16 lg:mt-20">
            <div className="lg:relative lg:w-[53px] lg:h-[50px] lg:mt-9 lg:rounded-full">
              <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-[53px] lg:h-[50px] lg:mt-9 lg:rounded-full lg:z-10 lg:bg-red300 lg:border lg:border-black"></div>
              <div className="lg:group-first:hidden lg:h-[570px] lg:w-[3px] lg:bg-black lg:absolute lg:bottom-6 lg:left-6"></div>
            </div>
            <TemaTalksCard {...cardProps} />
          </div>
        ))}
      </div>
    </section>
  )
}

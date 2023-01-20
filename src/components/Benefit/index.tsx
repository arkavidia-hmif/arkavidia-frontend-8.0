export default function Benefit({ benefits }: { benefits: string[] }) {
  return (
    <section className="flex flex-col justify-start items-center gap-7 w-full z-10">
      <h2 className="font-archivo font-bold text-white text-2xl lg:text-6xl">
        BENEFIT
      </h2>
      <div className="p-9 bg-white font-helvatica w-full max-w-[840px] rounded-3xl border-[3px] border-black gap-5 flex flex-col items-start justify-start">
        {benefits.map(benefit => {
          return (
            <div
              key={benefit}
              className="flex flex-row gap-4 items-center justify-start">
              <div className="bg-blue300 h-[25px] aspect-square w-auto rounded-full"></div>
              <p className="text-xs lg:text-base">{benefit}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

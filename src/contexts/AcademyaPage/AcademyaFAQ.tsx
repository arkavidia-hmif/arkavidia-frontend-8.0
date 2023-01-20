import FAQ from '@src/components/FAQ/FAQ'
import { FAQS_ACADEMYA } from '@src/const/EventDetail'
import Image from 'next/image'
import QMark from 'src/assets/images/qmark.png'
import QMark_Reversed from 'src/assets/images/qmark-reversed.svg'

const FAQSection = (): JSX.Element => {
  return (
    <div>
      <div className="w-full bg-yellow300 pb-[3rem] relative mt-[-10%]">
        <div className="hidden lg:block absolute top-0 left-0 z-10">
          <Image src={QMark} />
        </div>
        <div className="hidden lg:block absolute bottom-0 right-0 z-10">
          <Image src={QMark_Reversed} />
        </div>
        <div className="relative z-20">
          <FAQ faqs={FAQS_ACADEMYA} />
        </div>
      </div>
    </div>
  )
}

export default FAQSection

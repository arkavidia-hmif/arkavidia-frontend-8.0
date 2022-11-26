import CompFAQDropdown from '@src/components/Dropdown/CompFAQDropdown'
import Image from 'next/image'
import Tape from '@src/assets/images/compe-tapes.svg'
import ArkavStamp from 'src/assets/images/arkav-stamp-green.svg'
import QMark from "src/assets/images/qmark-full.svg";
import QMark_Reversed from "src/assets/images/qmark-reversed-full.png"
/** FAQ section properties */
interface AppProps {
  faqs: {
    title: string
    content: string
  }[]
}

/**
 * FAQ section
 * @param faqs - Array of faq
 */
export default function FAQ({ faqs }: AppProps): JSX.Element {
  // Renders the section
  return (
    <section className="bg-yellow300 w-full flex flex-col items-center pt-32 pb-40 relative">
      <h3 className="font-archivo font-black text-6xl text-center uppercase mb-12">
        F.A.Q.
      </h3>
      <div className="z-[10]">
      {faqs.map((faq, index) => (
        <CompFAQDropdown key={index} title={faq.title} content={faq.content} />
      ))}
      </div>
      <div className="absolute bottom-[-2rem] left-[23%] z-[20]">
        <Image src={Tape} />
      </div>
      <div className="absolute top-[75%] left-[-20%] z-0">
          <Image src={ArkavStamp} />
      </div>
                <div className="absolute top-0 left-[-10%] z-0">
                    <Image src={QMark_Reversed} />
                </div>
                <div className="absolute bottom-0 right-[-10%] z-0">
                    <Image src={QMark} />
                </div>
    </section>
  )
}

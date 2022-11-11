import CompFAQDropdown from '@src/components/Dropdown/CompFAQDropdown'

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
    <section className="bg-yellow300 w-full flex flex-col items-center pt-32 pb-40">
      <h3 className="font-archivo font-black text-6xl text-center uppercase mb-12">
        F.A.Q.
      </h3>
      {faqs.map((faq, index) => (
        <CompFAQDropdown key={index} title={faq.title} content={faq.content} />
      ))}
    </section>
  )
}

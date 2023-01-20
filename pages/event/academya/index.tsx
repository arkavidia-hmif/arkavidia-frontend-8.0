import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/EventDetail/Jumbotron'
import Timeline from '@src/contexts/AcademyaPage/AcademyaTimeline'
import BenefitSection from '@src/contexts/AcademyaPage/AcademyaBenefit'
import FAQ from '@src/contexts/AcademyaPage/AcademyaFAQ'
import Contact from '@src/contexts/AcademyaPage/AcademyaContact'

const Academya = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Academya">
      <Jumbotron />
      <Timeline />
      <BenefitSection />
      <FAQ />
      <Contact />
    </SEO>
  )
}

export default Academya

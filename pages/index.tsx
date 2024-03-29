import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/Homepage/Jumbotron'
import About from '@src/contexts/Homepage/About'
import Timeline from '@src/contexts/Homepage/Timeline'
import FAQ from '@src/contexts/Homepage/FAQPage'

const Home = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0">
      <Jumbotron />
      <About />
      <Timeline />
      <FAQ />
    </SEO>
  )
}

export default Home

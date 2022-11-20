import getConfig from 'next/config'
import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/Homepage/Jumbotron'
import About from '@src/contexts/Homepage/About'

const { publicRuntimeConfig } = getConfig()
const { name } = publicRuntimeConfig.site

const Home = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <Jumbotron />
      <About />
    </SEO>
  )
}

export default Home

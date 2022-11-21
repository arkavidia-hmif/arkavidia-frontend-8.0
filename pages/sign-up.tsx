import getConfig from 'next/config';
import SEO from '@src/components/SEO';
// import Jumbotron from '@src/contexts/Homepage/Jumbotron';
// import About from '@src/contexts/Homepage/About';
// import Timeline from '@src/contexts/Homepage/Timeline';
// import FAQ from '@src/contexts/Homepage/FAQ';
import SignUp from '@src/contexts/SignUp/signup';

const { publicRuntimeConfig } = getConfig()
const { name } = publicRuntimeConfig.site

const Home = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <SignUp text=''/>
      {/* <Jumbotron />
      <About />
      <Timeline />
      <FAQ /> */}
    </SEO>
  )
}

export default Home

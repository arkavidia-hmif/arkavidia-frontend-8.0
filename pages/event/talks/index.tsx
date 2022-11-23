import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import Maintenance from '@src/contexts/Maintenance/Maintenance';

const { publicRuntimeConfig } = getConfig()
const { name } = publicRuntimeConfig.site

const Home = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <Maintenance />
    </SEO>
  )
}

export default Home

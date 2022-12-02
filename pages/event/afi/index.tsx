import SEO from '@src/components/SEO';
import ComingSoon from '@src/contexts/ComingSoon/ComingSoon';

const Home = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0">
      <ComingSoon />
    </SEO>
  )
}

export default Home

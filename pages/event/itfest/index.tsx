import { useEffect } from 'react';
import SEO from '@src/components/SEO';
import ComingSoon from '@src/contexts/ComingSoon/ComingSoon';

const Home = (): JSX.Element => {
  useEffect(() => {
    window.location.href = 'https://itfest.arkavidia.com/u/home';
  }, [])

  return (
    <SEO title="Arkavidia 8.0">
      <ComingSoon />
    </SEO>
  )
}

export default Home

import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/Competition/Jumbotron'
import Prize from '@src/contexts/Competition/Prize'
import Category from '@src/contexts/Competition/Category'
import EventComingSoon from '@src/contexts/EventLanding/EventComingSoon'

const Competition = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Competition">
      <Jumbotron />
      <EventComingSoon />
      <Prize />
      <Category />
    </SEO>
  )
}

export default Competition

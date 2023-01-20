import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/Competition/Jumbotron'
import Prize from '@src/contexts/Competition/Prize'
import Category from '@src/contexts/Competition/Category'
import EventDocumentation from '@src/contexts/EventLanding/EventDocumentation';

const Competition = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Competition">
      <Jumbotron />
      <Prize/>
      <Category/>
      <EventDocumentation />
    </SEO>
  )
}

export default Competition

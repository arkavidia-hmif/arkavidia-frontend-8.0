import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/Event/JumbotronWithEvent'
import PreEvent from '@src/contexts/Event/PreEventComingSoon'
import EventComponent from '@src/contexts/Event/EventComingSoon'

const Event = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Event">
      <Jumbotron />
      <PreEvent />
      <EventComponent />
    </SEO>
  )
}

export default Event

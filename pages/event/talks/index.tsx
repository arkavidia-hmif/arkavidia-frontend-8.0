import SEO from '@src/components/SEO'
import { ARKAVTALKS, PODCAST } from '@src/const/EventDetail'
import Jumbotron from '@src/contexts/EventDetail/Jumbotron'
import TemaTalks from '@src/contexts/Arkavtalks/TemaTalks'
import Podcast from '@src/contexts/Arkavtalks/Podcast'

const Talks = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Arkavtalks">
      <Jumbotron eventName={'Arkavtalks'} />
      <TemaTalks talks={ARKAVTALKS} />
      <Podcast podcasts={PODCAST} />
    </SEO>
  )
}

export default Talks

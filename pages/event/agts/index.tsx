import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/EventDetail/Jumbotron'
import Timeline from '@src/contexts/EventDetail/Timeline'
import { TIMELINE_AGTS } from '@src/const/EventDetail'

const AGTS = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | AGTS">
      <Jumbotron eventName="AGTS" />
      <div className="flex flex-col justify-center items-center bg-[#1F307C] pt-[3rem] pb-[5rem] relative">
        <Timeline dates={TIMELINE_AGTS} />
      </div>
    </SEO>
  )
}

export default AGTS

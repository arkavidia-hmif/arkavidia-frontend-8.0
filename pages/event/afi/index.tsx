import SEO from '@src/components/SEO'
import Jumbotron from '@src/contexts/EventDetail/Jumbotron'
import Timeline from '@src/contexts/EventDetail/Timeline'
import { TIMELINE_AFI } from '@src/const/EventDetail'

const AFI = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | AFI">
      <Jumbotron eventName="AFI" />
      <div className="flex flex-col justify-center items-center bg-[#1F307C] pt-[3rem] pb-[5rem] relative">
        <Timeline dates={TIMELINE_AFI} />
      </div>
    </SEO>
  )
}

export default AFI

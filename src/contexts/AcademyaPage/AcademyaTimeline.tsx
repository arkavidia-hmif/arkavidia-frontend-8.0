import Timeline from '@src/contexts/EventDetail/Timeline'
import { TIMELINE_ACADEMYA } from '@src/const/EventDetail'

const TimelineSection = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1F307C] pt-[3rem] pb-[5rem] relative">
      <Timeline dates={TIMELINE_ACADEMYA} />
    </div>
  )
}

export default TimelineSection

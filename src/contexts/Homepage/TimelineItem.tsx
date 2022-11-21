import Image from 'next/image'
import Disk from 'src/assets/images/disk.png'

interface timelineProps {
  dateStart: Date
  dateEnd: Date
  title: string
  dateString: string
}

const TimelineItem = ({
  dateStart,
  dateEnd,
  title,
  dateString
}: timelineProps) => {
  const currentDate = new Date()

  return (
    <div className="container inline-flex">
      <div
        className={`flex items-center ${
          dateStart.getTime() <= currentDate.getTime() &&
          currentDate.getTime() <= dateEnd.getTime()
            ? 'bg-[#FEB20E] border-black border-l-transparent'
            : 'border-white'
        } border-2 mb-2 py-1 w-full`}>
        <div className="relative left-[-25px] z-20 min-h-[50px] min-w-[50px]">
          <Image className="" src={Disk} height={'50px'} width={'50px'} />
        </div>
        <div>
          <div className="text-left text-2xl font-['Archivo']">{title}</div>
          <div className="text-left text-l font-['Varela-Round']">{dateString}</div>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem

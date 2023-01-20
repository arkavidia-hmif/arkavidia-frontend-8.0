import Image, { StaticImageData } from 'next/image'

/** Date format option */
const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
}

/** Podcast card properties */
export interface CardProps {
  title: string
  date: Date
  thumbnail: string | StaticImageData
  detailLink: string
}

/**
 * Podcast card component
 * @param title - Podcast title
 * @param date - Podcast date
 * @param thumbnail - Podcast thumnail
 * @param detailLink - Podcast link
 */
export default function PodcastCard({
  title,
  date,
  thumbnail,
  detailLink
}: CardProps): JSX.Element {
  return (
    <div className="bg-white max-w-[350px] h-[420px] rounded-xl flex flex-col justify-center items-center px-[16px] py-[8px]">
      <div className="rounded-xl w-[268px] relative">
        <Image src={thumbnail} />
      </div>
      <h2 className="w-3/4 mt-[24px] mb-[8px] justify-center text-center font-archivo text-bold text-[#FEB20E] text-[18px]">
        {title}
      </h2>
      <p className="w-full justify-center text-center font-helvatica">
        {date.toLocaleDateString('id-ID', dateOptions)}
      </p>
      <a
        href={detailLink}
        target="_blank"
        rel="noopener"
        className="bg-blue300 hover:bg-blue200 rounded-xl w-full text-white py-3.5 px-4 font-helvatica font-bold text-center mt-5">
        Detail
      </a>
    </div>
  )
}

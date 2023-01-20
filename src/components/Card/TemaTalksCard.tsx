import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import TBA_IMAGE from '@src/assets/images/talks/TBA.svg'

/** Date format option */
const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
}

/** Tema talks speaker type */
interface Speaker {
  name: string
  picture?: StaticImageData
}

/** Tema talks card properties */
export interface CardProps {
  title: string
  date: Date
  speakers: Speaker[]
  documentationLink?: string
  signupLink?: string
}

/**
 * Tema talks card component
 * @param title - Tema talks title
 * @param date - Tema talks date
 * @param speakers - Tema talks speakers
 * @param documentationLink - Documentation link
 * @param signupLink - Tema talks registration link
 */
export default function TemaTalksCard({
  title,
  date,
  speakers,
  documentationLink,
  signupLink
}: CardProps): JSX.Element {
  return (
    <div
      className={clsx(
        'w-full rounded-3xl p-4 flex flex-col items-center lg:p-9 lg:pb-20 lg:relative lg:items-start',
        documentationLink ? 'bg-gray200 text-gray500' : 'bg-white text-black'
      )}>
      {/* Tema talks header */}
      <h3 className="w-full font-archivo text-2xl font-black capitalize md:text-3xl lg:text-5xl">
        {title}
      </h3>
      <p className="w-full font-varela text-xl lg:text-2xl">
        {date.toLocaleDateString('id-ID', dateOptions)}
      </p>

      {/* Tema talks speakers */}
      <div className="flex flex-col gap-7 mt-8 lg:mt-7 lg:flex-row">
        {speakers.map(({ name, picture }, idx) => (
          <div key={idx}>
            {picture ? (
              <Image src={picture} width={150} height={150} />
            ) : (
              <Image src={TBA_IMAGE} width={150} height={150} />
            )}
            <p
              className="font-helvatica text-xl text-center mt-1 lg:mt-2 lg:text-left"
              style={name === 'TBA' ? { fontWeight: 'bold' } : {}}>
              {name}
            </p>
          </div>
        ))}
      </div>

      {/* Registration/documentation button */}
      {documentationLink ? (
        <a
          href={documentationLink}
          target="_blank"
          rel="noopener"
          className="bg-red300 hover:bg-red400 text-white rounded-xl w-full py-3.5 px-4 font-helvatica font-bold text-center mt-8 lg:absolute lg:right-9 lg:bottom-9 lg:mt-0 lg:w-60 lg:bg-white lg:hover:bg-gray200 lg:text-blue300 lg:border-2 lg:border-blue300">
          Dokumentasi
        </a>
      ) : (
        <a
          href={signupLink}
          target="_blank"
          rel="noopener"
          className="bg-blue300 hover:bg-blue200 rounded-xl w-full text-white py-3.5 px-4 font-helvatica font-bold text-center mt-8 lg:absolute lg:right-9 lg:bottom-5 lg:mt-0 lg:w-60 xl:bottom-9">
          Daftar
        </a>
      )}
    </div>
  )
}

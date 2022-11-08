import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'
import ArrowTopIcon from '../../components/Icon/ArrowTopIcon'
import { useState } from 'react'

type DataDiriIndividuProps = {
  title: string
}

export default function DataDiriIndividu({
  title
}: DataDiriIndividuProps): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-md p-3 rounded-lg w-full select-none">
      <div
        onClick={() => {
          setOpen(prevOpen => !prevOpen)
        }}
        className="flex flex-row items-center justify-start cursor-pointer">
        <h6 className="font-black capitalize text-2xl">{title}</h6>
        <div className="flex-grow"></div>
        <button>
          {open ? <ArrowDownIcon size={28} /> : <ArrowTopIcon size={28} />}
        </button>
      </div>
      {open && <div></div>}
    </div>
  )
}

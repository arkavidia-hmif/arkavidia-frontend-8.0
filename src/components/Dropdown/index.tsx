import { useState } from 'react'

// Colors and Icon
import ArrowDownIcon from '../Icon/ArrowDownIcon'

type DropdownData = string

interface DropdownProps {
  data: DropdownData[]
  selectedData: DropdownData | undefined
  setSelectedData: (newSelectedData: DropdownData) => void
  noSelectedText: string
  isFull?: boolean
}

export default function Dropdown({
  data,
  selectedData = undefined,
  setSelectedData,
  isFull = false,
  noSelectedText
}: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${
        isFull ? 'w-full' : 'w-36 lg:max-w-sm'
      } relative font-normal text-blue300`}>
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={`bg-gray200 align-middle w-full h-10 font-bold text-xs leading-5 py-2 px-2 flex rounded-md border border-gray-300 cursor-pointer`}>
        {selectedData ?? noSelectedText}
        <ArrowDownIcon
          size={20}
          className="absolute right-0 mr-2 cursor-pointer"
          color="#445F6F"
        />
      </div>
      <ul
        className={`absolute z-10 bg-gray200 mt-2 w-full overflow-y-auto divide-y-2 divide-gray-300 rounded-md outline-1 outline-gray-300 ${
          open ? 'max-h-48 outline' : 'max-h-0'
        }`}>
        {data?.map((d, index) => (
          <li
            key={`${d} ${index}`}
            className={`cursor-pointer py-2 px-4 w-full h-10 text-xs leading-5 hover:bg-gray-300
              ${d === selectedData && 'bg-gray-300 font-bold'}`}
            onClick={() => {
              if (d !== selectedData) {
                setSelectedData(d)
                setOpen(false)
              }
            }}>
            <span className="inline-block align-middle">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

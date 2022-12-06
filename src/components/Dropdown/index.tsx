import { useState } from 'react'

// Colors and Icon
import ArrowDownIcon from '../Icon/ArrowDownIcon'
import colours from '@src/utils/colors'

type DropdownData = string

interface DropdownProps {
  data: DropdownData[]
}

export default function Dropdown({ data }: DropdownProps) {
  const [selectedData, setSelectedData] = useState<DropdownData | undefined>(
    undefined
  )
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`relative w-36 font-normal lg:max-w-sm text-[${colours.blue300}]`}>
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={`bg-[${colours.gray200}] align-middle w-full h-10 font-bold text-xs leading-5 py-2 px-2 flex rounded-md border border-gray-300 cursor-pointer`}>
        {selectedData ?? `${'\u00A0'}`}
        <ArrowDownIcon
          size={20}
          className="absolute right-0 mr-2 cursor-pointer"
          color="#445F6F"
        />
      </div>
      <ul
        className={`absolute z-10 bg-[${
          colours.gray200
        }] mt-2 w-full overflow-y-auto divide-y-2 divide-gray-300 rounded-md outline-1 outline-gray-300 ${
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

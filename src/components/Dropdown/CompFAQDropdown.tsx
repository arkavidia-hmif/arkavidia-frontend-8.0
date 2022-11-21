/* eslint-disable multiline-ternary */
import { useState, useRef, useEffect } from 'react'
import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import ArrowTopIcon from '@src/components/Icon/ArrowTopIcon'

/** FAQ dropdown component properties */
interface DropdownProps {
  title: string
  content: string
}

/**
 * FAQ dropdown component
 * @param title - FAQ title
 * @param content - FAQ content
 */
export default function DropdownComponent({
  title,
  content
}: DropdownProps): JSX.Element {
  // Component states and refs
  const [clicked, setClicked] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const dropdownHeaderEl = useRef<HTMLDivElement>(null)

  // Set dropdown header height on component mount
  useEffect(() => {
    if (dropdownHeaderEl.current?.clientHeight) {
      setHeaderHeight(dropdownHeaderEl.current?.clientHeight)
    }
  })

  // Renders the dropdown
  return (
    <div
      style={{ maxHeight: clicked ? 350 : headerHeight }}
      className="flex flex-col rounded-xl border-2 border-black overflow-hidden w-[70vw] transition-[max-height] duration-700 ease-out mb-6"
    >
      {/* Dropdown header */}
      <div
        ref={dropdownHeaderEl}
        onClick={() => setClicked(!clicked)}
        className="flex items-center justify-between bg-black text-white w-full px-6 py-4 cursor-pointer"
      >
        <h3 className=" font-varela capitalize text-3xl w-11/12">{title}</h3>
        {clicked ? (
          <ArrowTopIcon size={48} className="text-white cursor-pointer" />
        ) : (
          <ArrowDownIcon size={48} className="text-white cursor-pointer" />
        )}
      </div>

      {/* Dropdown content */}
      <div className="w-full px-6 py-3 shrink grow bg-white">
        <p className="font-helvatica leading-5">{content}</p>
      </div>
    </div>
  )
}

import { ReactPropTypes } from 'react'

export interface PaginationButtonTemplateProps extends ReactPropTypes {
  onClick: () => void
  disabled: boolean
}

const PaginationButtonTemplate = ({
  onClick,
  disabled = false
}: PaginationButtonTemplateProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-start w-7 h-28 p-1  ${
        disabled ? 'bg-[#F1F2F4]' : 'bg-white'
      } ${
        disabled ? 'text-gray-300' : 'text-black'
      } hover:bg-blue-200 hover:text-black active:bg-blue-300 active:text-white`}
    ></button>
  )
}

export default PaginationButtonTemplate

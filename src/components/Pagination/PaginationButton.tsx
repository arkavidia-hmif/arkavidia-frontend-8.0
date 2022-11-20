import ArrowLeftIcon from '../Icon/ArrowLeftIcon'
import ArrowRightIcon from '../Icon/ArrowRightIcon'

export interface PaginationButtonProps {
  isLeft: boolean
  onClick: () => void
  disabled: boolean
}

const PaginationButton = ({
  isLeft,
  onClick,
  disabled = false
}: PaginationButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-center w-7 h-7 p-1 rounded text-sm leading-4 ${
        disabled ? 'bg-[#F1F2F4]' : 'bg-white'
      } ${
        disabled ? 'text-gray-300' : 'text-black'
      } hover:bg-blue200 hover:text-black active:bg-blue300 active:text-white`}
    >
      {isLeft ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  )
}

export default PaginationButton

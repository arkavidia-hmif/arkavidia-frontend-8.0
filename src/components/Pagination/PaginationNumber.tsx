export interface PaginationNumberProps {
  onClick: () => void
  disabled: boolean
  number?: number
  dots?: boolean
}

const PaginationNumber = ({
  number,
  onClick,
  disabled = false,
  dots = false
}: PaginationNumberProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-start w-7 h-28 p-1 rounded  ${
        disabled ? 'bg-[#F1F2F4]' : 'bg-white'
      } ${
        disabled ? 'text-gray-300' : 'text-black'
      } hover:bg-blue-200 hover:text-black active:bg-blue-300 active:text-white`}>
      {dots ? '...' : number ?? 0}
    </button>
  )
}

export default PaginationNumber

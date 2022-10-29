export interface PaginationNumberProps {
  onClick?: () => void
  disabled?: boolean
  number?: number
  dots?: boolean
  active?: boolean
}

const PaginationNumber = ({
  number,
  onClick = () => {},
  disabled = false,
  dots = false,
  active = false
}: PaginationNumberProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={dots ? true : disabled}
      className={`flex flex-row items-center justify-center w-7 h-7 p-1 rounded text-sm leading-4 ${
        active ? 'bg-blue300 text-white' : ''
      } ${
        disabled ? 'bg-[#F1F2F4] text-gray-300' : 'bg-white text-black'
      } hover:bg-blue200 hover:text-black `}>
      {dots ? '...' : number ?? 0}
    </button>
  )
}

export default PaginationNumber

interface TabBorderedProps {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}

const TabBordered = ({
  children,
  selected,
  onClick
}: TabBorderedProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center gap-1`}>
      {children}
      <div
        className={`h-2 w-full max-w-[104px] rounded-lg ${
          selected ? 'bg-yellow300' : 'bg-blue400'
        }`}
      />
    </button>
  )
}
export default TabBordered

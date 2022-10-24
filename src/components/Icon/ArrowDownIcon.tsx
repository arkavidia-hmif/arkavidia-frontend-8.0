import Svg, { SvgProps } from './Svg'

const ArrowDownIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path d="M768.686 350.007l-205.471 193.251-205.472-193.251-63.119 59.495 268.591 253.17 268.59-253.17-63.119-59.495z" />
    </Svg>
  )
}

export default ArrowDownIcon

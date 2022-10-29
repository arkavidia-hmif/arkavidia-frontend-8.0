import Svg, { SvgProps } from './Svg'

const ArrowTopIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path d="M512 353.92l-256 256 60.16 60.16 195.84-195.413 195.84 195.413 60.16-60.16-256-256z" />
    </Svg>
  )
}

export default ArrowTopIcon

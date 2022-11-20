import Svg, { SvgProps } from './Svg'

const WarningIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <path
        d="M18 9.88L28.9527 29.0526H7.04727L18 9.88ZM18 4L2 32H34L18 4ZM19.4545 24.6316H16.5455V27.5789H19.4545V24.6316ZM19.4545 15.7895H16.5455V21.6842H19.4545V15.7895Z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default WarningIcon

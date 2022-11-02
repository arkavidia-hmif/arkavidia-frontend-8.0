import Svg, { SvgProps } from './Svg'

const SuccessIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"  {...props}>
      <path d="M15.0669 21.2214L11.3937 17.5482L11.2169 17.3715L11.0402 17.5482L9.75682 18.8316L9.58004 19.0083L9.75682 19.1851L14.8902 24.3184L15.0669 24.4952L15.2437 24.3184L26.2437 13.3184L26.4205 13.1417L26.2437 12.9649L24.9604 11.6816L24.7836 11.5048L24.6068 11.6816L15.0669 21.2214Z" fill="#3FB160" stroke="#3FB160" strokeWidth="0.5"/>
      <circle cx="18" cy="18" r="13.5" stroke="#3FB160" strokeWidth="3"/>
    </Svg>
  )
}

export default SuccessIcon

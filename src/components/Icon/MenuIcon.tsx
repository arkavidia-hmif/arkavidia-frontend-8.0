import Svg, { SvgProps } from './Svg'

const MenuIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path d="M860.16 148.395h-737.28v81.92h737.28v-81.92z" />
      <path d="M860.16 803.754h-737.28v81.92h737.28v-81.92z" />
      <path d="M860.16 476.074h-737.28v81.92h737.28v-81.92z" />
    </Svg>
  )
}

export default MenuIcon

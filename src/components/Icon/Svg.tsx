import { ComponentType, SVGAttributes } from 'react'

import colors from '@src/utils/colors'

export type SvgProps = SVGAttributes<SVGElement> & {
  size?: string | number
  title?: string
}

export type IconType = ComponentType<SvgProps>

const Icon = (props: SvgProps): JSX.Element => {
  const { size = 16, title, ...rest } = props

  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      height={size}
      width={size}
      color={colors.black}
      {...rest}
    >
      {!!title && <title>{title}</title>}
      {props.children}
    </svg>
  )
}

export default Icon

import React from 'react'
import HomeIcon from '../Icon/HomeIcon'
import clsx from 'clsx'

interface CustomButtonProps {
  bgColor?: colors
  icon?: boolean
  size?: sizes
  onClick?: () => void
  children?: React.ReactNode
  iconElement?: JSX.Element
  minPad?: boolean
}

type colors = 'primary' | 'secondary' | 'ghost'
type sizes = 'xs' | 'small' | 'normal' | 'full'
type textColors = 'primary' | 'secondary' | 'ghost'

const variantColor: { [key in colors]: string } = {
  primary:
    'bg-blue300 hover:bg-blue200 hover:drop-shadow-xl active:bg-blue400 disabled:bg-gray300 disabled:opacity-50',
  secondary:
    'bg-red300 hover:bg-red200 hover:drop-shadow-xl active:bg-red400 disabled:bg-gray300 disabled:opacity-50',
  ghost:
    'bg-transparent outline outline-blue300 hover:outline-blue200 hover:drop-shadow-2xl active:outline-blue400 disabled:outline-gray300 disabled:opacity-50'
}

const variantSize: { [key in sizes]: string } = {
  xs: 'w-auto px-3 py-1',
  small: 'w-auto px-6 py-2',
  normal: 'w-auto px-8 py-3',
  full: 'w-full h-12'
}

const variantTextColor: { [key in textColors]: string } = {
  primary: 'text-white',
  secondary: 'text-white',
  ghost: 'text-blue300'
}

const variantIconColor: { [key in textColors]: string } = {
  primary: 'fill-white',
  secondary: 'fill-white',
  ghost: 'fill-blue300'
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  icon,
  size,
  children,
  onClick,
  iconElement
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-xl flex items-center justify-center font-helvatica font-bold text-base text-white',
        variantColor[bgColor as colors],
        variantSize[size as sizes]
      )}>
      {icon && iconElement && (
        <HomeIcon
          className={clsx(
            'fill-white w-6 h-6 mr-2',
            variantIconColor[bgColor as colors]
          )}
        />
      )}
      <div className={clsx(variantTextColor[bgColor as textColors])}>
        {children}
      </div>
    </button>
  )
}

export default CustomButton

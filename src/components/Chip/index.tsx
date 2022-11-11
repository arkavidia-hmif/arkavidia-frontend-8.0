import React, { ButtonHTMLAttributes, FC, useState } from 'react'
import clsx from 'clsx'

// HOW TO USE //
// <CustomChip variant='greenContained' shadow={true}>Your Text/Component Here</CustomChip>

type Variants = 'redOutlined' | 'redContained' | 'blueOutlined' | 'blueContained' | 'greenContained' | 'greenOutlined' | 'yellowContained' | 'yellowOutlined'

type ChipProps = {
  variant: Variants
  shadow: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantStyle: { [key in Variants]: string } = {
  redContained: 'bg-red400 text-white border-2 border-transparent',
  redOutlined: 'border-2 border-red400 text-red400',
  blueContained : 'bg-blue400 text-white border-2 border-transparent',
  blueOutlined : 'border-2 border-blue400 text-blue400',
  greenContained : 'bg-green400 text-white border-2 border-transparent',
  greenOutlined : 'border-2 border-green400 text-green400',
  yellowContained : 'bg-yellow400 text-white border-2 border-transparent',
  yellowOutlined : 'border-2 border-yellow400 text-yellow400',
}

const CustomChip: FC<ChipProps> = (props) => {
  const [selected, setSelected] = useState(false)
  const { children, variant, shadow, className, ...rest } = props
  return selected ? (
    <button
      className='rounded-xl px-3 py-2 text-xs font-bold font-helvatica border-2 border-gray400 text-gray400' 
      onClick={()=> setSelected(!selected)}
    >
      {children}
    </button>
  ) :
  (
    <button
    className={clsx(`rounded-xl px-3 py-2 text-xs font-bold font-helvatica ${shadow ? 'shadow-[0_12px_16px_rgba(0,0,0,0.3)] hover:transition-all hover:mt-[6px] hover:shadow-none' : 'shadow-none'}`, variantStyle[variant], className)}
    {...rest}
    onClick={()=> setSelected(!selected)}
  >
    {children}
  </button>
  )
}

export default CustomChip
 

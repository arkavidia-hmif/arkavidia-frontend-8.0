/* eslint-disable react/prop-types */
import { useState } from 'react'

// Import Icons
import EyeHideIcon from '../Icon/EyeHideIcon'
import EyeShowIcon from '../Icon/EyeShowIcon'
import SearchIcon from '../Icon/SearchIcon'

interface ITextField {
  ftype?: 'show' | 'search' | 'default'
  description?: string
  variant?: 'default' | 'error' | 'success' | 'disabled'
}

type variants = 'default' | 'error' | 'success' | 'disabled'
const variantStyles: { [key in variants]: string } = {
  default:
    'border-gray300 bg-gray200 hover:border-blue200 focus:border-blue400',
  error: 'border-red300 bg-cream200 focus:ring-0 focus:border-red300',
  success: 'bg-green200 border-none focus:ring-0 focus:border-none',
  disabled:
    'border-none bg-gray400 placeholder-gray300 focus:ring-0 focus:border-none'
}

const TextField: React.FC<ITextField> = ({
  description,
  ftype = 'default',
  variant = 'default'
}): JSX.Element => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex items-center h-10 w-[260px]">
        <input
          type={visible ? 'text' : 'password'}
          id="text"
          disabled={variant === 'disabled'}
          placeholder="Text"
          className={`form-input
          w-full text-xs overflow-hidden ${
            ftype === 'show' ? 'pr-8' : ftype === 'search' ? 'pl-10' : ''
          }
          ${variantStyles[variant]}
         transition-colors rounded-md`}
        />
        {ftype?.toLowerCase() === 'show' &&
          (visible
            ? (
            <EyeHideIcon
              onClick={() => setVisible(false)}
              size={16}
              className="absolute right-0 mr-4 h-full cursor-pointer"
            />
              )
            : (
            <EyeShowIcon
              onClick={() => setVisible(true)}
              size={16}
              className="absolute right-0 mr-4 h-full cursor-pointer"
            />
              ))}

        {ftype?.toLowerCase() === 'search' && (
          <SearchIcon size={16} className="absolute left-0 ml-4 h-full " />
        )}
      </div>
      {description && <label className="text-xs w-64">{description}</label>}
    </div>
  )
}

const TextArea: React.FC<ITextField> = ({
  description,
  variant = 'default'
}): JSX.Element => {
  const [countChar, setCountChar] = useState(0)

  return (
    <div className="flex flex-col w-64 gap-1">
      <textarea
        id="text"
        placeholder="Text"
        maxLength={200}
        onChange={e => setCountChar(e.target.value.length)}
        className={`form-textarea py-3 px-4 text-xs resize-none
        rounded-md
        h-32
        ${variantStyles[variant]}}`}
      />
      <div className="flex flex-row justify-between">
        {description && <label className="text-xs">{description}</label>}
        <label className="text-xs text-right w-64 px-4">{countChar}/200</label>
      </div>
    </div>
  )
}

export { TextField, TextArea }

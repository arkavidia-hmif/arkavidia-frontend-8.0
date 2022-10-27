import { useState } from 'react'

// Import Icons
import EyeHideIcon from '../Icon/EyeHideIcon'
import EyeShowIcon from '../Icon/EyeShowIcon'
import SearchIcon from '../Icon/SearchIcon'

interface ITextField {
  ftype?: 'show' | 'search' | 'default'
  description?: string
}

const TextField: React.FC<ITextField> = ({
  description = 'default',
  ftype,
}): JSX.Element => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex items-center h-10 w-[260px]">
        <input
          type="text"
          id="text"
          placeholder="Text"
          className={`form-input
          w-full text-xs overflow-hidden ${
            ftype === 'show' ? 'pr-8' : ftype === 'search' ? 'pl-10' : ''
          }
        border-gray300 bg-gray200 transition-colors hover:border-blue200 focus:border-blue400
          rounded-md`}
        />
        {ftype?.toLowerCase() === 'show' &&
          (visible ? (
            <EyeHideIcon
              onClick={() => setVisible(false)}
              size={16}
              className="absolute right-0 mr-4 h-full cursor-pointer"
            />
          ) : (
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

const TextArea: React.FC<ITextField> = (): JSX.Element => {
  const [countChar, setCountChar] = useState(0)

  return (
    <div className="flex flex-col ">
      <textarea
        id="text"
        placeholder="Text"
        maxLength={200}
        onChange={e => setCountChar(e.target.value.length)}
        className={`form-textarea py-3 px-4 text-xs resize-none
        border-gray300
        bg-gray200
        rounded-md
        h-32 w-64
        hover:border-blue200 
        focus:border-blue400 `}
      />
      <label className="text-xs text-right w-64 px-4">{countChar}/200</label>
    </div>
  )
}

export { TextField, TextArea }

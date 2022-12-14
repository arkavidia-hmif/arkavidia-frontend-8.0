import React from 'react'

export type IRadioButton = {
  value: string
  groupName: string
  setExternalState: (arg0: any) => void
  defaultState: string
  externalState: string
  disabled?: boolean
}

export default function RadioButton<T>({
  groupName,
  value,
  setExternalState,
  disabled = false,
  externalState,
  defaultState
}: IRadioButton): JSX.Element {
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="radio"
        value={value}
        id={`${value}${groupName}`}
        onChange={() => {
          setExternalState(externalState === value ? defaultState : value)
        }}
        checked={externalState === value}
        disabled={disabled}
      />
      <label
        className="text-base font-medium"
        htmlFor={`${value} ${groupName}`}
      >
        {value}
      </label>
    </div>
  )
}

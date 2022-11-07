import React from 'react'

export interface IRadioButton {
  value: string
  groupName: string
  setExternalState: (arg0: any) => void
}

export default function RadioButton({
  groupName,
  value,
  setExternalState
}: IRadioButton) {
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="radio"
        value={value}
        id={`${value}${groupName}`}
        onChange={() => setExternalState(value)}
      />
      <label
        className="text-base font-medium"
        htmlFor={`${value} ${groupName}`}>
        {value}
      </label>
    </div>
  )
}

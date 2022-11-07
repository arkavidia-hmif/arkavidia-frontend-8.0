import React from 'react'

export interface ICheckBoxButton {
  value: string
  groupName: string
  toggleFunction: (arg0: any) => void
}

export default function CheckBoxButton({
  groupName,
  value,
  toggleFunction
}: ICheckBoxButton) {
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="radio"
        value={value}
        id={`${value}${groupName}`}
        onChange={() => toggleFunction(value)}
      />
      <label
        className="text-base font-medium"
        htmlFor={`${value} ${groupName}`}>
        {value}
      </label>
    </div>
  )
}

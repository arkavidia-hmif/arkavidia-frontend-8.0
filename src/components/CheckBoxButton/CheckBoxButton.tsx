import React from 'react'

export interface ICheckBoxButton {
  value: string
  groupName: string
  toggleFunction: (arg0: any) => void
  checked: boolean
  disabled?: boolean
}

// Direkomendasikan untuk checkbox button menggunakan array sebagai state parent-nya
export default function CheckBoxButton({
  groupName,
  value,
  toggleFunction,
  checked,
  disabled = false
}: ICheckBoxButton): JSX.Element {
  return (
    <div className="flex justify-start items-center gap-2">
      <input
        type="checkbox"
        value={value}
        id={`${value}${groupName}`}
        onChange={() => toggleFunction(value)}
        checked={checked}
        disabled={disabled}
      />
      <label
        className="text-base font-medium"
        htmlFor={`${value} ${groupName}`}>
        {value}
      </label>
    </div>
  )
}

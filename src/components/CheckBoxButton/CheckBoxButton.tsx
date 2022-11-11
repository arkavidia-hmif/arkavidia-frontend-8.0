import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

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
      <Checkbox.Root
        value={value}
        name={value}
        onCheckedChange={toggleFunction}
        checked={checked}
        disabled={disabled}
        className="w-4 h-4 bg-yellow300 rounded flex justify-center items-center"
        id={`${groupName} ${value}`}
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="text-base font-normal"
        htmlFor={`${groupName} ${value}`}
      >
        {value}
      </label>
    </div>
  )
}

import { z } from 'zod'

interface DatePickerProps {
  externalState: Date | null
  setExternalState: (arg0: Date | null) => void
  minimumDate: string
  maximumDate: string
}

function DatePicker({
  externalState,
  setExternalState,
  maximumDate,
  minimumDate
}: DatePickerProps) {
  const dateValidatorSchema = z
    .date()
    .min(new Date(minimumDate))
    .max(new Date(maximumDate))
  return (
    <input
      value={
        externalState === null
          ? ''
          : `${externalState.getFullYear()}-${externalState
              .getMonth()
              .toString()
              .padStart(2, '0')}-${externalState
              .getDate()
              .toString()
              .padStart(2, '0')}`
      }
      className="border-gray300 bg-gray200 hover:border-blue200 focus:border-blue400"
      type="date"
      min={minimumDate}
      max={maximumDate}
      onChange={e => {
        if (dateValidatorSchema.safeParse(e.target.valueAsDate).success) {
          setExternalState(e.target.valueAsDate)
        }
      }}></input>
  )
}

export default DatePicker

import { PengumumanDatesSetter } from '@src/utils/customHooks/pengumuman'
import { z } from 'zod'

interface DatePickerProps {
  dateState: Date | null
  setDateState: PengumumanDatesSetter
  minimumDate: string
  maximumDate: string
}

function DatePicker({
  dateState,
  setDateState,
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
        dateState === null
          ? ''
          : `${dateState.getFullYear()}-${(dateState.getMonth() + 1)
              .toString()
              .padStart(2, '0')}-${dateState
              .getDate()
              .toString()
              .padStart(2, '0')}`
      }
      className="border-gray300 bg-gray200 hover:border-blue200 focus:border-blue400"
      type="date"
      min={minimumDate}
      max={maximumDate}
      onChange={e => {
        const newDate = e.target.valueAsDate
        if (newDate && dateValidatorSchema.safeParse(newDate).success) {
          setDateState(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate()
          )
        }
      }}></input>
  )
}

export default DatePicker

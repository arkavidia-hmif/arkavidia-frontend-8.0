import { PengumumanTimeSetter } from '@src/utils/customHooks/pengumuman'

interface TimePickerProps {
  timeState: Date | null
  setTimeState: PengumumanTimeSetter
}

function TimePicker({ timeState, setTimeState }: TimePickerProps) {
  return (
    <input
      value={
        timeState === null
          ? ''
          : `${timeState.getHours().toString().padStart(2, '0')}:${timeState
              .getMinutes()
              .toString()
              .padStart(2, '0')}`
      }
      className="border-gray300 bg-gray200 hover:border-blue200 focus:border-blue400"
      type="time"
      onChange={e => {
        const newDate = e.target.valueAsDate
        if (newDate) {
          setTimeState(newDate.getUTCHours(), newDate.getUTCMinutes())
        }
      }}></input>
  )
}

export default TimePicker

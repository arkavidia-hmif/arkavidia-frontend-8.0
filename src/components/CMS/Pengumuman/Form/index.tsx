import CustomButton from '@src/components/CustomButton/CustomButton'
import DatePicker from '@src/components/DatePicker'
import Dropdown from '@src/components/Dropdown'
import { TextArea, TextField } from '@src/components/TextField'
import TimePicker from '@src/components/TimePicker'
import usePengumuman, {
  PengumumanState
} from '@src/utils/customHooks/pengumuman'

interface FormPengumumanProps {
  publishFunction: (arg0: PengumumanState) => void
  saveFunction: (arg0: PengumumanState) => void
  cancelFunction: () => void
}

function FormPengumuman({
  publishFunction,
  cancelFunction,
  saveFunction
}: FormPengumumanProps) {
  const [
    { category, information, title, publicationDate },
    { setCategory, setInformation, setTitle, setDates, setTime }
  ] = usePengumuman({})

  return (
    <section className="flex flex-col items-start p-6 gap-10 text-black w-full max-w-3xl bg-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <h2 className=" font-black capitalize text-5xl font-archivo">
        Pengumuman
      </h2>
      <section className="w-full flex flex-col items-start font-helvatica gap-2">
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="font-bold text-base">Kategori Lomba</p>
          <Dropdown
            data={['dfvddfvb', 'dfgdfdfgdfg'] as string[]}
            selectedData={category}
            noSelectedText={'Pilih Kategori'}
            isFull={true}
            setSelectedData={setCategory}
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="font-bold text-base">Judul</p>
          <TextField
            externalState={title}
            setExternalState={setTitle}
            placeholder={'Masukkan judul'}
            width={'w-full'}
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="font-bold text-base">Informasi</p>
          <TextArea
            externalState={information}
            setExternalState={setInformation}
            placeholder={'Masukkan informasi'}
            width="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="font-bold text-base">Waktu Publikasi</p>
          <div className="flex gap-2 justify-start">
            <DatePicker
              minimumDate="19-11-2003"
              maximumDate="01-01-2025"
              dateState={publicationDate}
              setDateState={setDates}
            />
            <TimePicker timeState={publicationDate} setTimeState={setTime} />
          </div>
        </div>
      </section>
      <section className="w-full flex gap-3">
        <CustomButton
          bgColor="secondary"
          onClick={cancelFunction}
          size="normal">
          Cancel
        </CustomButton>
        <div className="flex-grow" />
        {/* Ini belum diganti pakai fungsi save dan submit betulannya */}
        <CustomButton bgColor="ghost" onClick={() => {}} size="normal">
          Save
        </CustomButton>
        <CustomButton bgColor="primary" onClick={() => {}} size="normal">
          Publish
        </CustomButton>
      </section>
    </section>
  )
}

export default FormPengumuman

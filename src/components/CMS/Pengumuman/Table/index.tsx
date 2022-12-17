import CustomButton from '@src/components/CustomButton/CustomButton'
import { PengumumanState } from '@src/utils/customHooks/pengumuman'

// Ini tipe sementara doang.
type PengumumanFetched = PengumumanState & { isDraft: boolean }

function TabelFirstRow({ text }: { text: string }) {
  return (
    <div className="w-full text-base font-bold p-[10px] border-[1px] text-center bg-yellow300 border-black">
      {text}
    </div>
  )
}

function TabelPengumuman({
  pengumumanList
}: {
  pengumumanList: PengumumanFetched[]
}) {
  return (
    <section className="grid grid-cols-5 auto-rows-auto border-[1px] border-black font-helvatica">
      <TabelFirstRow text="Pengumuman" />
      <TabelFirstRow text="Kategori" />
      <TabelFirstRow text="Hasil" />
      <TabelFirstRow text="Edit" />
      <TabelFirstRow text="Hapus" />

      {pengumumanList.map(({ category, information, title, isDraft }) => {
        return (
          <>
            <div
              key={`${title}${isDraft}${category}`}
              className="flex flex-col gap-[10px] p-[10px] border-[1px] border-black">
              {isDraft && <p className="text-red200">DRAFT</p>}
              <p className="font-helvatica font-bold capitalize">{title}</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black">
              <p className={'text-center font-bold'}>{category}</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4">
              <CustomButton bgColor="ghost" onClick={() => {}} size="normal">
                Publish Pengumuman
              </CustomButton>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4">
              <CustomButton bgColor="ghost" onClick={() => {}} size="normal">
                Edit Pengumuman
              </CustomButton>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4">
              <CustomButton
                bgColor="secondary"
                onClick={() => {}}
                size="normal">
                Hapus Pengumuman
              </CustomButton>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default TabelPengumuman

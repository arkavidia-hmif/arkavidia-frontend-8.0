import CustomButton from '@src/components/CustomButton/CustomButton'
import ArrowTopIcon from '@src/components/Icon/ArrowTopIcon'
import DeleteIcon from '@src/components/Icon/DeleteIcon'
import EditIcon from '@src/components/Icon/EditIcon'
import { PengumumanState } from '@src/utils/customHooks/pengumuman'
import React from 'react'

// Ini tipe sementara doang.
export type PengumumanFetched = PengumumanState & { isDraft: boolean }

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
    <section className="grid grid-cols-3 auto-rows-auto border-[1px] border-black font-helvatica w-full">
      <TabelFirstRow text="Pengumuman" />
      <TabelFirstRow text="Kategori" />
      <TabelFirstRow text="Aksi" />

      {pengumumanList.map(
        ({ category, information, title, isDraft, publicationDate }) => {
          return (
            <React.Fragment key={`${title}${category}${isDraft}`}>
              <div className="flex flex-col gap-[10px] p-[10px] border-[1px] border-black">
                {isDraft && <p className="text-red200">DRAFT</p>}
                {publicationDate ? (
                  <p className="font-helvatica capitalize">
                    {`${publicationDate?.toLocaleString('id-ID')} WIB`}
                  </p>
                ) : null}
                <p className="font-helvatica font-bold capitalize">{title}</p>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black">
                <p className={'text-center font-bold'}>{category}</p>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4 gap-4">
                <CustomButton bgColor="ghost" onClick={() => {}} size="full">
                  Publish
                </CustomButton>
                <CustomButton bgColor="ghost" onClick={() => {}} size="full">
                  Edit
                </CustomButton>
                <CustomButton
                  bgColor="secondary"
                  onClick={() => {}}
                  size="full">
                  Delete
                </CustomButton>
              </div>
              {/* <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4"></div>
              <div className="w-full h-full flex flex-col justify-center items-center border-[1px] border-black p-4"></div> */}
            </React.Fragment>
          )
        }
      )}
    </section>
  )
}

export default TabelPengumuman

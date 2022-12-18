import TabelPengumuman, {
  PengumumanFetched
} from '@src/components/CMS/Pengumuman/Table'
import CustomButton from '@src/components/CustomButton/CustomButton'
import EmptyAnnouncement from '@src/assets/images/EmptyAnnouncement.svg'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import FormPengumuman from '@src/components/CMS/Pengumuman/Form'

function CMSPengumuman({
  pengumumanList
}: {
  pengumumanList: PengumumanFetched[]
}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <section className="w-full flex flex-col justify-start items-center gap-10">
      {showModal &&
        createPortal(
          <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/50 flex flex-col justify-center items-center">
            <FormPengumuman
              cancelFunction={() => setShowModal(false)}
              publishFunction={bruh => {}}
              saveFunction={bruh => {}}
            />
          </div>,
          document.body
        )}
      <div className="w-full flex justify-center items-start">
        <div className="flex-grow" />
        <CustomButton
          bgColor="primary"
          size="normal"
          onClick={() => setShowModal(true)}>
          Tambah Pengumuman
        </CustomButton>
      </div>
      {pengumumanList.length <= 0 ? (
        <div className="text-center flex flex-col items-center justify-start flex-grow gap-6">
          <Image src={EmptyAnnouncement} />
          <p className="font-varela text-xl">
            Belum Ada Pengumuman Nih. <br />
            Tetap Stay Tune Ya!
          </p>
        </div>
      ) : (
        <TabelPengumuman pengumumanList={pengumumanList} />
      )}
    </section>
  )
}

export default CMSPengumuman

import TabelPengumuman, {
  PengumumanFetched
} from '@src/components/CMS/Pengumuman/Table'
import CustomButton from '@src/components/CustomButton/CustomButton'
import EmptyAnnouncement from '@src/assets/images/EmptyAnnouncement.svg'
import Image from 'next/image'

function CMSPengumuman({
  pengumumanList
}: {
  pengumumanList: PengumumanFetched[]
}) {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-10">
      <div className="w-full flex justify-center items-start">
        <div className="flex-grow" />
        <CustomButton bgColor="primary" size="normal" onClick={() => {}}>
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

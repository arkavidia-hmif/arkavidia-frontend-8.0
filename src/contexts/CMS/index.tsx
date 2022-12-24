import { useState } from 'react'
import CMSPengumuman from './Pengumuman'
import CMSSubmisi from './Submisi'

type OpenedCMSPage = 'pengumuman' | 'submisi'

function CMS() {
  const [openedPage, setOpenedPage] = useState('submisi' as OpenedCMSPage)
  return (
    <section className="flex flex-col items-center justify-start w-full gap-8 px-20 py-[10rem]">
      <div className="flex flex-row justify-between items-start w-1/4 max-w-sm font-varela">
        <button
          onClick={() => setOpenedPage('submisi')}
          className="flex flex-col gap-1 justify-start items-center cursor-pointer">
          <p className={`block rounded-sm  text-lg `}>Submisi</p>
          <div
            className={`h-1 rounded-md ${
              openedPage === 'submisi' ? 'bg-yellow300' : 'bg-blue300'
            }  w-full max-w-[104px]`}
          />
        </button>
        <button
          onClick={() => setOpenedPage('pengumuman')}
          className="flex flex-col gap-1 justify-start items-center cursor-pointer">
          <p className={`block rounded-sm  text-lg `}>Pengumuman</p>
          <div
            className={`h-1 rounded-md ${
              openedPage === 'pengumuman' ? 'bg-yellow300' : 'bg-blue300'
            }  w-full max-w-[104px]`}
          />
        </button>
      </div>
      {openedPage === 'submisi' ? (
        <CMSSubmisi
          teamList={[
            {
              members: [],
              paymentLink: 'klvfdv',
              proposalLink: 'klfmdl',
              status: 'pass',
              teamID: '54',
              teamName: 'dfjkvdfnvk'
            }
          ]}></CMSSubmisi>
      ) : (
        <CMSPengumuman
          pengumumanList={[
            {
              title: 'fjkldfnvmd',
              information: 'dflkvmdfklvm',
              category: 'fdklvmdfm',
              publicationDate: new Date(),
              isDraft: true
            }
          ]}></CMSPengumuman>
      )}
    </section>
  )
}

export default CMS

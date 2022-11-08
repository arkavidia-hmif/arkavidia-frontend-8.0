import { useState } from 'react'
import DataDiriIndividu from './DataDiriIndividu'

export default function DashboardDataDiri(): JSX.Element {
  const [mKetua, setMKetua] = useState([] as string[])
  return (
    <div className="flex flex-col justify-start items-center gap-6">
      <h3 className="text-black stroke-1 font-black text-6xl drop-shadow-[13px_13px_0_rgba(255,255,255,1)]">
        Data Peserta
      </h3>
      {['Ketua Tim', 'Anggota 1', 'Anggota 2'].map(subject => (
        <DataDiriIndividu
          subject={subject}
          key={subject}
          state={mKetua}
          setExternalState={setMKetua}
        />
      ))}
    </div>
  )
}

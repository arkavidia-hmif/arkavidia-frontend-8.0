import Dashboard from '@src/layout/Dashboard'
import { useState } from 'react'
import DataDiriIndividu from './DataDiriIndividu'
import CustomButton from '@src/components/CustomButton/CustomButton'
import useDataDiri from '@src/utils/customHooks/datadiri'

function DataDiri(): JSX.Element {
  const [dataKetua, setDataKetua] = useDataDiri({})
  const [dataAnggota1, setDataAnggota1] = useDataDiri({})
  const [dataAnggota2, setDataAnggota2] = useDataDiri({})

  return (
    <Dashboard>
      <h3 className="font-archivo text-5xl text-shadow text-white">
        Data Peserta
      </h3>
      <DataDiriIndividu
        subject="Ketua"
        dataSetter={setDataKetua}
        dataState={dataKetua}
      />
      <DataDiriIndividu
        subject="Anggota 1"
        dataSetter={setDataAnggota1}
        dataState={dataAnggota1}
      />
      <DataDiriIndividu
        subject="Anggota 2"
        dataSetter={setDataAnggota2}
        dataState={dataAnggota2}
      />
      <div className="w-full flex items-center justify-center">
        <CustomButton bgColor="primary" size="normal">
          Submit
        </CustomButton>
      </div>
    </Dashboard>
  )
}

export default DataDiri

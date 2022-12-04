import Dashboard from '@src/components/Navigation/Dashboard'
import DataDiriIndividu from './DataDiriIndividu'
import CustomButton from '@src/components/CustomButton/CustomButton'
import useDataDiri from '@src/utils/customHooks/datadiri'
import { getMemberData } from '@src/services/team'
import { useEffect } from 'react'
import { MembershipParticipant } from '@src/types/participant'

function DataDiri(): JSX.Element {
  const [dataKetua, setDataKetua] = useDataDiri({})
  const [dataAnggota1, setDataAnggota1] = useDataDiri({})
  const [dataAnggota2, setDataAnggota2] = useDataDiri({})

  const syncTeamData = async () => {
    const { setAll: setAllDataKetua } = setDataKetua
    const { setAll: setAllDataAnggota1 } = setDataAnggota1
    const { setAll: setAllDataAnggota2 } = setDataAnggota2

    const rawData = (await getMemberData()) as { Data: MembershipParticipant[] }
    const teamMemberData = rawData?.Data

    // Tidy this up later!

    const [
      { name: namaKetuaF, email: emailKetuaF, career_interest: minatKetuaF },
      {
        name: namaAnggota1F,
        email: emailAnggota1F,
        career_interest: minatAnggota1F
      },
      {
        name: namaAnggota2F,
        email: emailAnggota2F,
        career_interest: minatAnggota2F
      }
    ] = teamMemberData

    setAllDataKetua({
      nama: namaKetuaF,
      email: emailKetuaF,
      minat: minatKetuaF ?? [],
      nomor: ''
    })

    setAllDataAnggota1({
      nama: namaAnggota1F,
      email: emailAnggota1F,
      minat: minatAnggota1F ?? [],
      nomor: ''
    })

    setAllDataAnggota2({
      nama: namaAnggota2F,
      email: emailAnggota2F,
      minat: minatAnggota2F ?? [],
      nomor: ''
    })
  }

  useEffect(() => {
    syncTeamData()
  }, [])

  function handleSubmit() {}

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
        <CustomButton bgColor="primary" size="normal" onClick={handleSubmit}>
          Submit
        </CustomButton>
      </div>
    </Dashboard>
  )
}

export default DataDiri

import Dashboard from '@src/components/Navigation/Dashboard'
import DataDiriIndividu from './DataDiriIndividu'
// import BuktiPembayaran from './BuktiPembayaran'
import CustomButton from '@src/components/CustomButton/CustomButton'
import useDataDiri from '@src/utils/customHooks/datadiri'
import { getMemberData } from '@src/services/team'
import { changeCareerInterest } from '@src/services/participant'
import { getPhotoParticipant, addPhoto } from '@src/services/photo'
import { useEffect, useState } from 'react'
import {
  MembershipParticipant,
  ChangeCareerInterestReq
} from '@src/types/participant'
import { AddPhotoReq } from '@src/types/photo'
import Toast from '@src/components/Toast'
import CircleLoading from '@src/components/Loading/Circle'

function DataDiri(): JSX.Element {
  const [opened, setOpened] = useState(-1)
  const [buktiPembayaran, setBuktiPembayaran] = useState<Blob | null>()
  const [dataKetua, setDataKetua] = useDataDiri({})
  const [dataAnggota1, setDataAnggota1] = useDataDiri({})
  const [dataAnggota2, setDataAnggota2] = useDataDiri({})
  const [toastList, setToastList] = useState<JSX.Element[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [initialLoading, setInitialLoading] = useState<boolean>(true)

  const syncTeamData = async () => {
    const { setAll: setAllDataKetua } = setDataKetua
    const { setAll: setAllDataAnggota1 } = setDataAnggota1
    const { setAll: setAllDataAnggota2 } = setDataAnggota2

    const rawData = (await getMemberData()) as { data: MembershipParticipant[] }
    const tempTeamMemberData = rawData?.data ?? []
    const teamMemberData = await Promise.all(
      tempTeamMemberData?.map(async (m: MembershipParticipant) => {
        const photo = await getPhotoParticipant(m.id)
        return {
          ...m,
          photos: photo?.data ?? [],
          career_interest: m.career_interest ?? null
        }
      })
    )

    // Tidy this up later!

    const dummy = {
      id: -999,
      name: '',
      email: '',
      career_interest: null,
      photos: null ?? []
    }

    if (teamMemberData.length === 2) teamMemberData.push(dummy)

    const [
      {
        id: idKetuaF,
        name: namaKetuaF,
        email: emailKetuaF,
        career_interest: minatKetuaF,
        photos: fileIndividuKetuaF
      },
      {
        id: id1F,
        name: namaAnggota1F,
        email: emailAnggota1F,
        career_interest: minatAnggota1F,
        photos: fileIndividu1F
      },
      {
        id: id2F,
        name: namaAnggota2F,
        email: emailAnggota2F,
        career_interest: minatAnggota2F,
        photos: fileIndividu2F
      }
    ] = teamMemberData

    setAllDataKetua({
      id: idKetuaF,
      nama: namaKetuaF,
      email: emailKetuaF,
      minat: minatKetuaF ?? [],
      nomor: '',
      fileIndividu: fileIndividuKetuaF
    })

    setAllDataAnggota1({
      id: id1F,
      nama: namaAnggota1F,
      email: emailAnggota1F,
      minat: minatAnggota1F ?? [],
      nomor: '',
      fileIndividu: fileIndividu1F
    })

    setAllDataAnggota2({
      id: id2F,
      nama: namaAnggota2F ?? '',
      email: emailAnggota2F ?? '',
      minat: minatAnggota2F ?? [],
      nomor: '',
      fileIndividu: fileIndividu2F
    })
    setInitialLoading(false)
  }

  useEffect(() => {
    syncTeamData()
  }, [])

  const errorHandling = (e: any) => {
    if (e === 'FAILED') {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Kesalahan pada server'}
          type={'danger'}
          position={'top'}
          key={Math.random()}
        />
      ])
      return true
    }
    return false
  }

  const kebabCaseConverter = (content: string) => {
    return content
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  }

  const handleSubmit = async () => {
    setLoading(true)
    if (opened === 4) {
      if (buktiPembayaran) {
        const payloadBukti = {
          participant_id: dataKetua.id,
          type: 'bukti-pembayaran',
          file: buktiPembayaran
        } as AddPhotoReq
        const resAddPBukti = await addPhoto(payloadBukti)
        if (errorHandling(resAddPBukti)) {
          setLoading(false)
          return
        } else {
          setToastList([
            ...toastList,
            <Toast
              timer={3000}
              label={'Berhasil mengupload bukti pembayaran.'}
              type={'success'}
              position={'top'}
              key={Math.random()}
            />
          ])
          setLoading(false)
          location.reload()
        }
      } else {
        setToastList([
          ...toastList,
          <Toast
            timer={3000}
            label={'Mohon upload bukti pembayaran.'}
            type={'danger'}
            position={'top'}
            key={Math.random()}
          />
        ])
        return
      }
    }
    let data = dataKetua
    switch (opened) {
      case 0:
        data = dataKetua
        break
      case 1:
        data = dataAnggota1
        break
      case 2:
        data = dataAnggota2
        break
      default:
        data = dataKetua
        break
    }
    const payloadCareerInterest = {
      career_interest: data?.minat?.map(m => kebabCaseConverter(m))
    } as ChangeCareerInterestReq
    const resCareerInterest = await changeCareerInterest(
      payloadCareerInterest,
      data.id ?? -999
    )
    if (errorHandling(resCareerInterest)) {
      setLoading(false)
      return
    }
    let completed = true
    data?.fileIndividu?.map(async f => {
      const payloadPhoto = {
        participant_id: data.id,
        type: f.type,
        file: f.file
      } as AddPhotoReq
      if (f.file) {
        const resAddPhoto = await addPhoto(payloadPhoto)
        // TEMPORARY FOR HOT FIX
        if (resAddPhoto) completed = true
        // console.log(resAddPhoto)
        // if (errorHandling(resAddPhoto)) completed = false
      }
    })
    if (completed) {
      setToastList([
        ...toastList,
        <Toast
          timer={3000}
          label={'Berhasil mengupdate data partisipan'}
          type={'success'}
          position={'top'}
          key={Math.random()}
        />
      ])
    }
    setLoading(false)
    location.reload()
  }

  return initialLoading ? (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <CircleLoading />
    </div>
  ) : (
    <Dashboard>
      {toastList}
      <h3 className="font-archivo text-5xl text-shadow text-white">
        Data Peserta
      </h3>
      {/* <BuktiPembayaran
        setFile={setBuktiPembayaran}
        fileIndividu={dataKetua.fileIndividu}
        index={4}
        opened={opened}
        setOpened={setOpened}
      /> */}
      <DataDiriIndividu
        subject="Ketua"
        dataSetter={setDataKetua}
        dataState={dataKetua}
        index={0}
        opened={opened}
        setOpened={setOpened}
      />
      <DataDiriIndividu
        subject="Anggota 1"
        dataSetter={setDataAnggota1}
        dataState={dataAnggota1}
        index={1}
        opened={opened}
        setOpened={setOpened}
      />
      {dataAnggota2.email !== '' && dataAnggota2.nama !== '' && (
        <DataDiriIndividu
          subject="Anggota 2"
          dataSetter={setDataAnggota2}
          dataState={dataAnggota2}
          index={2}
          opened={opened}
          setOpened={setOpened}
        />
      )}
      <div className="w-full flex items-center justify-center">
        <CustomButton bgColor="primary" size="normal" onClick={handleSubmit}>
          {loading ? (
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            'Submit'
          )}
        </CustomButton>
      </div>
    </Dashboard>
  )
}

export default DataDiri

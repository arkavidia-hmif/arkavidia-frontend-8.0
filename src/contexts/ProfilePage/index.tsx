import React, { useEffect, useState } from 'react'
import Layout from '@src/components/Navigation/Layout'
import EditIcon from '@src/components/Icon/EditIcon'
import { TextField } from '@src/components/TextField'
import OutputIcon from '@src/components/Icon/OutputIcon'
import Image from 'next/image'
import ProfileImage from '@src/assets/images/profile_page.png'
import { logout } from '@src/services/auth'
import { getTeamData } from '@src/services/team'
import { useRouter } from 'next/router'
import { TeamData } from '@src/types/team'

const ProfilePage = () => {
  const router = useRouter()
  const [teamData, setTeamData] = useState<TeamData | null>()

  const fetchTeamData = async () => {
    const response = await getTeamData()
    setTeamData(response.Data)
  }

  const handleOnLogout = () => {
    logout()
    window.location.href = '/competition'
  }

  const pascalCaseConverter = (text: string | undefined) => {
    if (text)
      return text.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase()
      })
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  return (
    <Layout>
      <div className="p-12 bg-gray200">
        <div className="flex pt-[3rem]">
          <div className="w-1/4 flex justify-center items-center pt-16">
            <Image src={ProfileImage} />
          </div>
          <div className="w-3/4 pl-16">
            <div className="flex justify-between pb-8">
              <p
                className="text-center font-archivo text-white text-[48px] mt-[20px]"
                style={{
                  textShadow:
                    '-2px -2px 0 #000, 6px -3px 0 #000, -2px 4px 0 #000, 6px 4px 0px #000'
                }}>
                Profil
              </p>
              <div>
                {/* <button className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-blue300 hover:bg-blue200">
                  <div>
                    <EditIcon className="fill-white w-6 h-6" />
                  </div>
                </button> */}
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl drop-shadow">
              <p className="font-helvatica font-bold pb-2">Username</p>
              <TextField
                externalState={teamData?.username ?? ''}
                setExternalState={() => null}
                placeholder=""
                ftype="default"
                variant="default"
                width="w-full"
                isDisable={true}
              />
              <p className="font-helvatica font-bold py-2">Nama Tim</p>
              <TextField
                externalState={teamData?.team_name ?? ''}
                setExternalState={() => null}
                placeholder=""
                ftype="default"
                variant="default"
                width="w-full"
                isDisable={true}
              />
              <p className="font-helvatica font-bold py-2">Kategori Lomba</p>
              <TextField
                externalState={
                  pascalCaseConverter(
                    teamData?.team_category?.replace('-', ' ')
                  ) ?? ''
                }
                setExternalState={() => null}
                placeholder=""
                ftype="default"
                variant="default"
                width="w-full"
                isDisable={true}
              />
              {/* <p className="font-helvatica font-bold py-2">Password</p>
              <TextField
                externalState=""
                setExternalState={() => null}
                ftype="show"
                variant="default"
                width="w-full"
              /> */}
              <p
                className="font-helvatica font-bold text-xs text-red-500 hover:cursor-pointer pt-2"
                onClick={() => router.push('/profile/change-password')}>
                Ubah Password
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-8 justify-end">
          <button
            className="rounded-xl flex items-center justify-center mb-2 bg-red300 hover:bg-red200 hover:drop-shadow-xl active:bg-red400 disabled:bg-gray300 disabled:opacity-50 w-auto h-12"
            onClick={handleOnLogout}>
            <div className="flex items-center justify-center font-helvatica font-bold text-base text-white px-8">
              <OutputIcon className="fill-white w-6 h-6 mr-2" />
              <div className="text-white">Log Out</div>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage

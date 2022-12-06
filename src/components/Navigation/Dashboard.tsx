import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Tab from '@src/components/Tab'
import ArkalogicaLogo from '@src/assets/images/LogoArkalogica.svg'
import CPLogo from '@src/assets/images/LogoCP.svg'
import DatavidiaLogo from '@src/assets/images/LogoDatavidia.svg'
import UXVdiaLogo from '@src/assets/images/LogoUXVidia.svg'
import ArkavidiaLogo from '@src/assets/images/logo/logo-arkavidia.png'
import Image from 'next/image'
import Link from 'next/link'
import { getTeamData } from '@src/services/team'
import { TeamData } from '@src/types/team'

const routes = [
  { name: 'Informasi', path: '/dashboard/information' },
  { name: 'Data Peserta', path: '/dashboard/participant-data' },
  { name: 'Submission', path: '/dashboard/submission' }
]

const getLogo = (type: string) => {
  switch (type) {
    case 'competitive-programming':
      return CPLogo
    case 'datavidia':
      return DatavidiaLogo
    case 'arkalogica':
      return ArkalogicaLogo
    case 'uxvidia':
      return UXVdiaLogo
    default:
      return ArkavidiaLogo
  }
}

function SideNav({ compe }: { compe: string }) {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full h-fit shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)] bg-white rounded-lg py-[36px] px-[24px] gap-8">
      <div className="flex justify-center items-center">
        <Image width={'120px'} height={'120px'} src={getLogo(compe)} />
      </div>
      <div className="flex lg:flex-col flex-row lg:gap-8 sm:gap-5 justify-center items-center">
        {routes.map((item, idx) => {
          return (
            <Link href={item.path} key={idx}>
              {item.path === router.pathname ? (
                <Tab>{item.name}</Tab>
              ) : (
                <a className="px-2 py-2 lg:text-[20px] sm:text-[12px] font-varela text-center">
                  {item.name}
                </a>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function Dashboard({ children }: React.PropsWithChildren<{}>) {
  const [teamData, setTeamData] = useState<TeamData | null>()

  const fetchTeamData = async () => {
    const response = await getTeamData()
    setTeamData(response.Data)
  }

  useEffect(() => {
    fetchTeamData()
  }, [])
  return (
    <div className="p-5 lg:p-14">
      <div className="lg:flex">
        <div className="lg:w-2/12 py-[33px]">
          <SideNav compe={teamData?.team_category ?? ('' as string)}></SideNav>
        </div>
        <div className="flex lg:flex-col lg:w-10/12 lg:px-[55px] py-[35px] lg:py-[69px] lg:gap-[30px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

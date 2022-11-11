import Footer from '@src/components/Footer/footer'
import Navbar from '@src/components/Navigation/Navbar'
import Tab from '@src/components/Tab'
import Dropdown from './Dropdown'
import ArkalogicaLogo from '@src/assets/images/logo_arkalogica.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const routes = [
  { name: 'Informasi', path: '/dashboard/informasi' },
  { name: 'Data Peserta', path: '/dashboard/data-peserta' },
  { name: 'Submission', path: '/dashboard/submission' }
]

const SideNav = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full h-fit shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)] bg-white rounded-lg py-[36px] px-[24px] gap-8">
      <div className="flex justify-center items-center">
        <Image width={'120px'} src={ArkalogicaLogo} />
      </div>
      {routes.map((item, idx) => {
        return (
          <Link href={item.path} key={idx}>
            {item.path === router.pathname ? (
              <Tab>{item.name}</Tab>
            ) : (
              <a className="px-2 py-2 text-[20px] font-varela text-center">
                {item.name}
              </a>
            )}
          </Link>
        )
      })}
    </div>
  )
}

const Submission = () => {
  return (
    <>
      <div className="p-14">
        <div className="flex">
          <div className="w-2/12 py-[33px]">
            <SideNav></SideNav>
          </div>
          <div className="flex flex-col w-10/12 px-[55px] py-[69px] gap-[30px]">
            <h1 className="font-archivo text-5xl text-shadow text-white">
              Submission
            </h1>
            <Dropdown header={"1st Stage"}/>
            <Dropdown header={"2nd Stage"}/>
            <Dropdown header={"3rd Stage"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Submission

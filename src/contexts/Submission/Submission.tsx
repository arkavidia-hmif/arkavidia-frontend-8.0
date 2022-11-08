import Footer from '@src/components/Footer/footer'
import Navbar from '@src/components/Navigation/Navbar'
import Tab from '@src/components/Tab'
import Dropdown from './Dropdown'
import ArkalogicaLogo from '@src/assets/images/logo_arkalogica.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Dashboard from '@src/layout/Dashboard'

const Submission = () => {
  return (
    <>
      <Dashboard>
        <h3 className="font-archivo text-5xl text-shadow text-white">
          Submission
        </h3>
        <Dropdown header={'1st Stage'} />
        <Dropdown header={'2nd Stage'} />
        <Dropdown header={'3rd Stage'} />
      </Dashboard>
    </>
  )
}

export default Submission

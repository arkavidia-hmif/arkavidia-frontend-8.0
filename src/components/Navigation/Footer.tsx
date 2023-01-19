import React from 'react'
import InstagramIcon from '../Icon/InstagramIcon'
import LinkedinIcon from '../Icon/LinkedinIcon'
import TiktokIcon from '../Icon/TikTokIcon'
import YoutubeIcon from '../Icon/YoutubeIcon'
import ContactPhoneIcon from '../Icon/ContactPhoneIcon'
import ArkavLogo from 'src/assets/images/logo/logo-arkavidia.png'
import Image from 'next/image'

// How to use
// <Footer variant='yellowGeneral'/>

type Variants =
  | 'yellowCompEvent'
  | 'redCompEvent'
  | 'yellowGeneral'
  | 'redGeneral'

type logoVar = 'square' | 'circle'

const logoStyle: { [key in logoVar]: string } = {
  circle:
    'rounded-full w-[73px] h-[73px] lg:w-[124px] lg:h-[124px] ml-[24px] mt-[44px] mb-[30px] md:w-[100px] md:h-[100px]',
  square: 'w-[73px] h-[73px] md:w-[98px] md:h-[98px] lg:w-[124px] lg:h-[124px]'
}

interface logoProps {
  logoVariants: logoVar
  children?: React.ReactNode
}

const Logo: React.FC<logoProps> = props => {
  const { children, logoVariants, ...rest } = props
  return (
    <div
      className={`flex bg-cream300 text-center items-center justify-center border border-black `}
    >
      <div className='p-3'>
        <Image src={ArkavLogo} />
      </div>
    </div>
  )
}

const DummyLink = (props: any): JSX.Element => {
  return (
    <div
      className={`bg-gray200 border border-solid border-black mt-[2px] pt-[6px] pl-[6px] pb-[8px] font-helvatica font-normal text-[16px] leading-[18.4px] shadow-[4px_9px_0] ${props.color}`}>
      <a href="">DUMMY LINK</a>
      {/* <h4 className=' flex border-box w-224 h-32 left-0 top-0 border-1 border-black border-solid absolute bg-black bg-opacity-20'>DUMMY LINK</h4> */}
    </div>
  )
}

const DummyLinkContainer = (props: any): JSX.Element => {
  const dummy = (
    <div className="space-y-[29px]">
      <DummyLink color={props.color} />
      <DummyLink color={props.color} />
      <DummyLink color={props.color} />
      <DummyLink color={props.color} />
      <DummyLink color={props.color} />
    </div>
  )
  return (
    <div className="grid grid-cols-3 gap-x-[29px] col-span-3">
      {dummy}
      {dummy}
      {dummy}
    </div>
  )
}

const About = (): JSX.Element => {
  return (
    <div className="flex bg-white border-black border ml-[24px] mr-[14%] shadow-[11px_10px_0] shadow-blue300 justify-center items-center">
      <div className="py-[6.8%] px-[5%] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dolor repellat ut velit pariatur, illum error deserunt voluptatibus,
        soluta, explicabo eveniet asperiores officiis.
      </div>
    </div>
  )
}

const Copyright = (): JSX.Element => {
  return (
    <h4 className="flex flex-col font-inter px-[17px] py-[13px] gap-10 w-[100%] h-[45px] mt-0 bg-cream300 border border-solid border-black">
      &copy; 2022 ARKAVIDIA. All rights reserved.
    </h4>
  )
}

interface FooterProps {
  variant: Variants
  children?: React.ReactNode
}

const variantStyle: { [key in Variants]: string } = {
  redGeneral: 'bg-red200 w-[100%] h-[100%]',
  yellowGeneral: 'bg-yellow400 w-[100%] h-[100%]',
  redCompEvent: 'bg-red300 w-[100%] h-[100%]',
  yellowCompEvent: 'bg-yellow400 max-w-[100%] w-[100%] h-[100%]'
}

const CompEventFooter: React.FC<FooterProps> = props => {
  const { children, variant, ...rest } = props
  let color
  if (variant === 'yellowCompEvent') {
    color = 'bg-red300'
  } else {
    color = 'bg-green300'
  }
  const Header = (
    <div className="flex gap-x-[3px] lg:gap-x-0 mx-[4.5%] mb-[10px] my-[3%] lg:my-[6%] lg:mb-[2%]">
      <div className="flex flex-wrap row-span-2 col-span-2 border-[2px] border-black min-w-[125px] max-w-[125px]">
        <Logo logoVariants="square"></Logo>
      </div>
      <div className="grid grid-rows-2 grow">
        <div className="flex font-archivo text-white font-black bg-black text-[24px] lg:text-[36px] justify-center items-center lg:w-[85%] lg:min-w-[272px] lg:max-w-[465px]">
          Arkavidia 8.0
        </div>
        <div
          className={`flex font-helvatica text-white ${color} font-bold text-[12px] lg:text-[16px] text-center px-[5%] border-[2px] border-black justify-center items-center lg:w-[85%] lg:min-w-[272px] lg:max-w-[465px]`}
        >
          ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL DISRUPTION
        </div>
      </div>
    </div>
  )

  const Links = (
    <div className="bg-white grid grid-cols-2 mx-[4.42%] border border-black lg:mr-0">
      <div className="mx-[10%] grid-rows-5">
        <div className="font-helvatica text-700 text-[16px] font-bold text-white bg-black text-center my-[4%]">
          Competition
        </div>
        <div className="font-helvatica text-normal font-bold text-[14px] text-blue300">
          <a
            className="block mb-[10px] no-underline"
            href="/competition/competitive-programming">
            Competitive Programming
          </a>
          <a
            className="block mb-[10px] no-underline"
            href="/competition/datavidia">
            Datavidia
          </a>
          <a
            className="block mb-[10px] no-underline"
            href="/competition/arkalogica">
            Arkalogica
          </a>
          <a
            className="block mb-[10px] no-underline"
            href="/competition/uxvidia">
            UXvidia
          </a>
        </div>
      </div>
      <div className="mr-[11%] grid-rows-6 lg:pb-[15px]">
        <div className="font-helvatica text-700 text-[16px] font-bold text-white bg-black text-center my-[4%]">
          Event
        </div>
        <div className="font-helvatica text-normal font-bold text-[14px] text-blue300">
          <a className="block mb-[10px]" href="/event/academya">
            Arkavidia Academya
          </a>
          <a className="block mb-[10px]" href="/event/afi">
            Arkavidia For Indonesia
          </a>
          <a className="block mb-[10px]" href="/event/agts">
            Arkavidia Goes To School
          </a>
          <a className="block mb-[10px]" href="/event/talks">
            Arkavidia Talks
          </a>
          <a className="block mb-[10px]" href="/event/itfest">
            IT Fest
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={`z-[1] ${variantStyle[variant]}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, black 5%, transparent 5%), linear-gradient(black 5%, transparent 5%)',
        backgroundSize: '60px 60px'
      }}>
      <div className="bg-black">.</div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="">{Header}</div>
        <div className="lg:row-span-2 mt-[4px] lg:mt-[4.8%] mb-[4px] lg:mb-[3.5%]">{Links}</div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="mx-[4.42%] my-[8px] lg:my-[18px] lg:max-w-[328px]  y-[47px] lg:mt-[1%] lg:mb-[4.32%] lg:ml-[9%] lg:mr-0 ">
            <div className="flex shrink min-w-[230px] py-[13px] pl-[17px] shadow-[4.47px_4.82px_0] shadow-blue300 lg:py-[3.6%] bg-white border border-black">
              <div className=''>
                <ContactPhoneIcon className="inline w-[24px] h-[18px] mr-[10px]" />
              </div>
              <div className="flex font-helvatica text-700 pt-[2px]">
                CP: Nelsen (0821-1274-9139)
              </div>
            </div>
          </div>
          <div className="flex gap-x-[12px] mb-[4.32%] ml-[4.42%] lg:ml-13 mt-[1.89%]">
            <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
              <a href="https://instagram.com/arkavidia/" target="_blank">
                <InstagramIcon className="w-[24px] h-[24px]" />
              </a>
            </div>
            <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
              <a href="https://www.tiktok.com/@arkavidia/" target="_blank">
                <TiktokIcon className="w-[24px] h-[24px]" />
              </a>
            </div>
            <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
              <a
                href="https://www.youtube.com/channel/UC7QQH48TgjZKAIJeZNRrKyw"
                target="_blank">
                <YoutubeIcon className="w-[24px] h-[24px]" />
              </a>
            </div>
            <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
              <a
                href="https://www.linkedin.com/company/arkavidia"
                target="_blank">
                <LinkedinIcon className="w-[24px] h-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  )
}

const GeneralFooter: React.FC<FooterProps> = props => {
  const { children, variant, ...rest } = props
  let shadowColor
  if (variant === 'yellowGeneral') {
    shadowColor = 'shadow-red300'
  } else {
    shadowColor = 'shadow-yellow300'
  }
  return (
    <>
      <div
        className={`h-[455px] grid grid-cols-[30%_70%] pb-[5.1%] ${variantStyle[variant]}`}>
        <div>
          <Logo logoVariants="circle" />
          <About />
        </div>
        <div>
          <div className="mt-[50px] mr-[60px] ml-[50px] mb-[20px]">
            <DummyLinkContainer color={shadowColor} />
          </div>
          <div className="flex flex-col items-end mr-[60px]">
            <div className="flex gap-x-[12px] mb-[4.32%] ml-[5.14%] mt-[1.89%]">
              <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
                <InstagramIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
                <TiktokIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
                <YoutubeIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="flex w-[46.53px] h-[47.18px]  bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center justify-center">
                <LinkedinIcon className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0">
        <Copyright />
      </div>
    </>
  )
}

const Footer: React.FC<FooterProps> = props => {
  const { children, variant, ...rest } = props
  let finalFooter
  if (variant === 'yellowCompEvent') {
    finalFooter = <CompEventFooter variant="yellowCompEvent" />
  }
  if (variant === 'redCompEvent') {
    finalFooter = <CompEventFooter variant="redCompEvent" />
  }
  if (variant === 'redGeneral') {
    finalFooter = <GeneralFooter variant="redGeneral" />
  }
  if (variant === 'yellowGeneral') {
    finalFooter = <GeneralFooter variant="yellowGeneral" />
  }
  return <>{finalFooter}</>
}

export default Footer

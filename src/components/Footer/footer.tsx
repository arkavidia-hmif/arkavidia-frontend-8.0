import React from 'react'
import InstagramIcon from '../Icon/InstagramIcon'
import LinkedinIcon from '../Icon/LinkedinIcon'
import TiktokIcon from '../Icon/TikTokIcon'
import YoutubeIcon from '../Icon/YoutubeIcon'
import ContactPhoneIcon from '../Icon/ContactPhoneIcon'

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
  square: 'w-[73px] h-[73px] lg:w-[124px] lg:h-[124px]'
}

interface logoProps {
  logoVariants: logoVar
}

const Logo: React.FC<logoProps> = props => {
  const { children, logoVariants, ...rest } = props
  return (
    <div
      className={`${logoStyle[logoVariants]} flex bg-white text-center justify-center border border-black `}
    ></div>
  )
}

const DummyLink = (props: any): JSX.Element => {
  return (
    <div
      className={`bg-gray200 border border-solid border-black mt-[2px] pt-[6px] pl-[6px] pb-[8px] font-helvatica font-normal text-[16px] leading-[18.4px] shadow-[4px_9px_0] ${props.color}`}
    >
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
}

const variantStyle: { [key in Variants]: string } = {
  redGeneral: 'bg-red200 w-[100%] h-[100%]',
  yellowGeneral: 'bg-yellow400 w-[100%] h-[100%]',
  redCompEvent: 'bg-red200 w-[100%] h-[100%]',
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
    <div className="grid grid-rows-2 grid-cols-11 gap-x-[3px] lg:gap-x-0 mx-[4.5%] mb-[3%] my-[3%] lg:my-[6%] lg:mb-[2%]">
      <div className="flex flex-wrap row-span-2 col-span-2 border-[2px] border-black min-w-[125px] max-w-[125px]">
        <Logo logoVariants="square" />
      </div>
      <div className="col-span-8 font-archivo text-white text-900 bg-black flex text-[24px] lg:text-[36px] justify-center items-center lg:w-[85%]">
        Arkavidia 8.0
      </div>
      <div
        className={`flex col-span-8 font-helvatica text-white ${color} text-700 text-[12px] lg:text-[16px] text-center px-[5%] border-[2px] border-black justify-center items-center lg:w-[85%]`}
      >
        ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL DISRUPTION
      </div>
    </div>
  )

  const Links = (
    <div className="bg-white grid grid-cols-2 mx-[4.42%] border border-black lg:mr-0">
      <div className="mx-[10%] grid-rows-5">
        <div className="font-helvatica text-700 text-[16px] font-bold text-white bg-black text-center my-[4%]">
          Competition
        </div>
        <div className="font-helvatica text-normal text-[14px] text-blue300">
          <a className="block mb-[10px]" href="">
            Competitive Programming
          </a>
          <a className="block mb-[10px]" href="">
            Datavidia
          </a>
          <a className="block mb-[10px]" href="">
            Arkalogica
          </a>
          <a className="block mb-[10px]" href="">
            UXVidia
          </a>
        </div>
      </div>
      <div className="mr-[11%] grid-rows-6 lg:pb-[15px]">
        <div className="font-helvatica text-700 text-[16px] font-bold text-white bg-black text-center my-[4%]">
          Event
        </div>
        <div className="font-helvatica text-normal text-[14px] text-blue300">
          <a className="block mb-[10px]" href="">
            Arkavidia Academya
          </a>
          <a className="block mb-[10px]" href="">
            Arkavidia For Indonesia
          </a>
          <a className="block mb-[10px]" href="">
            Arkavidia Goes To School
          </a>
          <a className="block mb-[10px]" href="">
            Arkavidia Talks
          </a>
          <a className="block mb-[10px]" href="">
            IT Fest
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className={variantStyle[variant]} {...rest}>
      <div className="bg-black">.</div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="">{Header}</div>
        <div className="lg:row-span-2 mt-[4.8%] mb-[3.5%]">{Links}</div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="mx-[4.42%] my-[3.7%] w-[328px] y-[47px] lg:mt-[1%] lg:mb-[4.32%] lg:mx-[9%] ">
            <div className="flex items-stretch py-[4.5%] pl-[5%] shadow-[4.47px_4.82px_0] shadow-blue300 lg:py-[3.6%] bg-white border border-black">
              <ContactPhoneIcon className="inline mr-[3%] w-[24px] h-[18px] pb-[2px]" />
              <div className="inline font-helvatica text-700">
                CP: Abdul (0888-8888-8888)
              </div>
            </div>
          </div>
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
        className={`h-[455px] grid grid-cols-[30%_70%] pb-[5.1%] ${variantStyle[variant]}`}
      >
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

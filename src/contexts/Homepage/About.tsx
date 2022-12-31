import Image from 'next/image'
import Countdown from '@src/components/CountdownCard/CompCountdown'
import Image1 from '@src/components/Images/Mask group.png'
import Image2 from '@src/components/Images/Mask group (1).png'
import Carousel from './Carousel'
import { store } from '@src/redux/store/index'
import { useRouter } from 'next/router'

const About = (): JSX.Element => {
  const isLogin = store.getState()?.auth?.token == null ? false : true
  const router = useRouter()

  const handleRegister = () => {
    if (isLogin) router.push('/competition')
    else router.push('/sign-in')
  }
  return (
    <>
      <div
        className="font-archivo border-4 border-black text-clip truncate overflow-hidden tracking-wider
        text-[20px]
        sm:text-[25px]
        lg:text-[31px]
        xl:text-[36px] ">
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div
        className="
        flex bg-brownblack justify-center w-full">
        <div
          className="
          w-3/5">
          <Countdown date="2023/01/01" title="" />
        </div>
      </div>
      <div
        className="bg-brownblack text-center
        xl:h-[104px]">
          <button
            className="text-center mt-2 mb-4 font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
            px-[40px] py-[7px] text-[12px]
            sm:px-[70px] sm:py-[10px] sm:text-[13px]
            lg:px-[120px] lg:py-[15px] lg:text-[15px]
            xl:px-[160px] xl:py-[20px] xl:text-[16px]
              "
            onClick={handleRegister}
          >
            Register Now
          </button>
      </div>
      <div
        className="
        mt-[50px]
        sm:mt-[50px]
        lg:flex lg:justify-center lg:align-center lg:mt-[160px]
        xl:flex xl:justify-center xl:align-center xl:mt-[190px]">
        <div
          className=" 
          lg:w-[55vw]
          xl:w-[55vw]"></div>
        {/* Carousell */}
        <div
          className=" 
          lg:w-[45vw] lg:m-auto
          xl:w-[45vw] xl:m-auto">
          <Carousel />
        </div>
      </div>
      <div
        className="
        justify-center align-center
        mt-[50px]
        sm:mt-[50px]
        lg:flex lg:mt-[-300px]
        xl:flex xl:mt-[-310px]">
        <div
          className="
          lg:w-[55vw]
          xl:w-[55vw]">
          <div
            className="
              bg-black text-white font-[archivo] rotate-[-4deg]
              px-[32px] w-[400px] py-[5px] text-[20px]
              sm:px-[90px] sm:w-[600px] sm:py-[5px] sm:text-[25px]
              lg:px-[80px] lg:w-[650px] lg:py-[6px] lg:text-[31px]
              xl:px-[130px] xl:w-[820px] xl:py-[7px] xl:text-[36px]">
            ADAPTIVE COLLABORATION
          </div>
          <div
            className="
              bg-black text-white font-[archivo] rotate-[-1deg]
              mt-[5px] px-[32px] w-[300px] py-[5px] text-[20px]
              sm:px-[90px] sm:w-[450px] sm:py-[5px] sm:text-[25px]
              lg:px-[80px] lg:w-[450px] lg:py-[6px] lg:text-[31px]
              xl:mt-[13px] xl:px-[100px] xl:w-[540px] xl:py-[7px] xl:text-[36px] ">
            TO ENCOUNTER
          </div>
          <div
            className="bg-black text-white font-[archivo] rotate-[-4deg]
            ml-[50px] mt-[-8px] px-[32px] w-[400px] py-[5px] text-[20px]
            sm:px-[90px] sm:ml-[50px] sm:w-[500px] sm:py-[5px] sm:text-[25px]
            lg:ml-[80px] lg:mt-[-10px] lg:px-[80px] lg:w-[550px] lg:py-[6px] lg:text-[31px]
            xl:ml-[80px] xl:mt-[-10px] xl:px-[130px] xl:w-[700px] xl:py-[7px] xl:text-[36px]">
            DIGITAL DISRUPTION
          </div>
          <div
            className="text-justify font-helvatica tracking-tighter
            mt-[30px] px-[40px] text-[13px]
            sm:mt-[35px] sm:text-[15px]
            lg:mt-[40px] lg:ml-[30px] lg:text-[17px] lg:pr-[20px]
            xl:mt-[50px] xl:ml-[60px] xl:text-[18px] xl:pr-[40px]">
            Arkavidia merupakan acara IT tahunan yang diadakan oleh Himpunan
            Mahasiswa Informatika ITB. Dengan tema “Adaptive Collaboration to
            Encounter Digital Disruption”, Arkavidia 8.0 diharapkan akan lebih
            banyak individu sadar akan hak dan kewajibannya di dunia digital,
            sehingga dapat mewujudkan kemerdekaan digital bagi dirinya.
            Diharapkan dengan diadakannya acara ini, dapat memberikan manfaat
            bagi pelajar, civitas akademik, dan masyarakat umum seluruh
            Indonesia.
          </div>
        </div>
        <div
          className=" 
          lg:w-[45vw] lg:m-auto
          xl:w-[45vw] xl:m-auto"></div>
      </div>
      <div
        className="
          flex
          mt-[30px]
          xl:mt-[50px]">
        <div
          className="
            bg-[#FFEADF] border-black
            h-[100px] ml-[-70px] border-2
            sm:h-[170px] sm:ml-[-50px] sm:border-[3px]
            md:h-[170px] md:ml-[-50px] md:border-[3px]
            lg:h-[250px] lg:ml-[-30px] lg:border-4
            xl:h-[315px] xl:ml-[-4px] xl:border-4">
          <div
            className="
            w-[60px] mt-[-70px]
            sm:w-[100px] sm:mt-[-70px]
            md:w-[100px] md:mt-[-70px]
            lg:w-[110px] lg:mt-[-16px]
            xl:w-[131px] xl:mt-[0px]">
            <Image src={Image1} />
          </div>
        </div>
        <div
          className="
            bg-[#F43518] border-black
            pt-[17px] px-[15px] h-[100px] w-[400px] ml-[12px] border-2
            sm:pt-[23px] sm:px-[25px] sm:h-[170px] sm:w-[400px] sm:ml-[12px] sm:border-[3px]
            md:pt-[23px] md:px-[25px] md:h-[170px] md:w-[400px] md:ml-[12px] md:border-[3px]
            lg:pt-[35px] lg:px-[32px] lg:h-[250px] lg:w-[400px] lg:ml-[12px] lg:border-4
            xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px] xl:border-4">
          <div
            className="
              bg-[#FFEADF] border-black font-archivo text-center
              h-[40px] text-[17px] border-2
              sm:h-[80px] sm:text-[20px] sm:border-[3px]
              md:h-[80px] md:text-[28px] md:border-[3px]
              lg:h-[100px] lg:text-[50px] lg:border-4
              xl:h-[150px] xl:text-[72px] xl:border-4">
            <div
              className="
              mt-[5px]
              sm:mt-[20px]
              md:mt-[20px]
              lg:mt-[10px]
              xl:mt-[20px]">
              412
            </div>
          </div>
          <div
            className="text-white font-varela text-center
            text-[10px] mt-[3px]
            sm:text-[12px] sm:mt-[3px]
            md:text-[15px] md:mt-[3px]
            lg:text-[20px] lg:mt-[10px]
            xl:text-[20px] xl:mt-[10px]">
            PAST
          </div>
          <div
            className="text-white font-archivo text-center
            text-[10px]
            sm:text-[12px]
            md:text-[15px]
            lg:text-[24px]
            xl:text-[24px]">
            PARTICIPANTS
          </div>
        </div>
        <div
          className="
            bg-[#1F307C] border-black
            pt-[17px] px-[15px] h-[100px] w-[400px] ml-[12px] border-2
            sm:pt-[23px] sm:px-[25px] sm:h-[170px] sm:w-[400px] sm:ml-[12px] sm:border-[3px]
            md:pt-[23px] md:px-[25px] md:h-[170px] md:w-[400px] md:ml-[12px] md:border-[3px]
            lg:pt-[35px] lg:px-[32px] lg:h-[250px] lg:w-[400px] lg:ml-[12px] lg:border-4
            xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px] xl:border-4">
          <div
            className="
              bg-[#FFEADF] border-black font-archivo text-center
              h-[40px] text-[17px] border-2
              sm:h-[80px] sm:text-[20px] sm:border-[3px]
              md:h-[80px] md:text-[28px] md:border-[3px]
              lg:h-[100px] lg:text-[50px] lg:border-4
              xl:h-[150px] xl:text-[72px] xl:border-4">
            <div
              className="
              mt-[5px]
              sm:mt-[20px]
              md:mt-[20px]
              lg:mt-[10px]
              xl:mt-[20px]">
              329
            </div>
            <div
              className="text-white font-archivo text-center
              text-[10px] mt-[15px]
              sm:text-[12px] sm:mt-[40px]
              md:text-[15px] md:mt-[30px]
              lg:text-[24px] lg:mt-[40px]
              xl:text-[24px] xl:mt-[50px]">
              COMMITTEES
            </div>
          </div>
        </div>
        <div
          className="
            bg-[#069154] border-black
            pt-[17px] px-[15px] h-[100px] w-[400px] ml-[12px] border-2
            sm:pt-[23px] sm:px-[25px] sm:h-[170px] sm:w-[400px] sm:ml-[12px] sm:border-[3px]
            md:pt-[23px] md:px-[25px] md:h-[170px] md:w-[400px] md:ml-[12px] md:border-[3px]
            lg:pt-[35px] lg:px-[32px] lg:h-[250px] lg:w-[400px] lg:ml-[12px] lg:border-4
            xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px] xl:border-4">
          <div
            className="
              bg-[#FFEADF] border-black font-archivo text-center
              h-[40px] text-[17px] border-2
              sm:h-[80px] sm:text-[20px] sm:border-[3px]
              md:h-[80px] md:text-[28px] md:border-[3px]
              lg:h-[100px] lg:text-[50px] lg:border-4
              xl:h-[150px] xl:text-[72px] xl:border-4">
            <div
              className="
              mt-[5px]
              sm:mt-[20px]
              md:mt-[20px]
              lg:mt-[10px]
              xl:mt-[20px]">
              69
            </div>
            <div
              className="text-white font-varela text-center
            text-[10px] mt-[10px]
            sm:text-[12px] sm:mt-[30px]
            md:text-[15px] md:mt-[18px]
            lg:text-[20px] lg:mt-[20px]
            xl:text-[20px] xl:mt-[30px]">
              PAST
            </div>
            <div
              className="text-white font-archivo text-center
            text-[10px]
            sm:text-[12px]
            md:text-[15px]
            lg:text-[24px]
            xl:text-[24px]">
              PARTNERS
            </div>
          </div>
        </div>
        <div
          className="bg-[#FFEADF] border-black
          h-[100px] ml-[12px] border-2 
          sm:h-[170px] sm:ml-[12px] sm:border-[3px]
          md:h-[170px] md:ml-[12px] md:border-[3px]
          lg:h-[250px] lg:ml-[12px] lg:border-4
          xl:h-[315px] xl:ml-[12px] xl:border-4">
          <div
            className="
            w-[43px] h-[150px] mt-[-2px]
            sm:w-[70px] sm:h-[150px] sm:mt-[4px]
            md:w-[70px] md:h-[150px] md:mt-[4px]
            lg:mt-[13px] lg:w-[100px]
            xl:mt-[7px] xl:w-[131px]">
            <Image src={Image2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About

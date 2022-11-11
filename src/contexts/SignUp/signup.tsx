import React, { FC, useState } from 'react'
import { TextField } from '@src/components/TextField/index'
import CustomButton from '@src/components/CustomButton/CustomButton'
import kolaborasi from '@src/assets/images/carousel-image/kolaborasi.svg'
import piala from '@src/assets/images/carousel-image/piala.svg'
import roket from '@src/assets/images/carousel-image/roket.svg'
import buttonFilled from '@src/assets/button-radio/radio-filled.svg'
import buttonUnfill from '@src/assets/button-radio/radio-unfill.svg'
import Image from 'next/image'

interface SignUpProps {
  text: string
}

const SignUp: FC<SignUpProps> = ({ text }: SignUpProps): JSX.Element => {
  const [pos,setPos] = useState(0);

  let autoLoop = setInterval(() => {
    setPos(pos+1);
    if (pos == 2){
      setPos(0);
    } 
  }
  , 4000)
  
  return (
    <>
      <div className='flex justify-center mt-20'>
        <div className='container xl-auto box-border flex w-screen h-[1080px] m-0 bg-gray200'>
            <div className='box-border border-solid w-[50%] bg-yellow300 items-center inline-flex justify-center'>

              <div id='default-carousel' className='relative' data-carousel="slide">
                <div className='relative h-auto overflow-hidden'>

                  <div className={`content duration-1000 ease-in-out ${pos===0 ? 'content' : 'hidden'}` } data-carousel-item> 
                    <div className='flex justify-center'>
                      <Image src={roket}/>
                    </div>
                    <div className='flex justify-center w-[422px] items-center mt-[62px]'>
                      <h2 className='font-archivo font-black text-[36px] text-center leading-10'>Explorasi Kemampuanmu!</h2>
                    </div>
                  </div>
                  
                  <div className={`content duration-1000 ease-in-out ${pos===1 ? 'content' : 'hidden'}` }  data-carousel-item>
                    <div className='flex justify-center'>
                      <Image src={kolaborasi}/>
                    </div>
                    <div className='flex justify-center w-[422px] items-center mt-[62px]'>
                      <h2 className='font-archivo font-black text-[36px] text-center leading-10'>Berkolaborasi Untuk Masa Depan!</h2>
                    </div>
                  </div>

                  <div className={`content duration-1000 ease-in-out ${pos===2 ? 'content' : 'hidden'}` }  data-carousel-item>
                    <div className='flex justify-center'>
                      <Image src={piala}/>
                    </div>
                    <div className='flex justify-center w-[422px] items-center mt-[62px]'>
                      <h2 className='font-archivo font-black text-[36px] text-center leading-10'>Raih Peluang Menjadi Juara!</h2>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center mt-[62px]'>
                  <div className='cursor-pointer pl-1 pr-1'>
                    <Image src={pos===0 ? buttonFilled : buttonUnfill} onClick={() => {setPos(0); clearInterval(autoLoop);}}/>
                  </div>
                  <div className='cursor-pointer pl-1 pr-1'>
                    <Image src={pos===1 ? buttonFilled : buttonUnfill} onClick={() => {setPos(1); clearInterval(autoLoop);}}/>
                  </div>
                  <div className='cursor-pointer pl-1 pr-1'>
                    <Image src={pos===2 ? buttonFilled : buttonUnfill} onClick={() => {setPos(2); clearInterval(autoLoop);}}/>
                  </div>
                </div>

              </div>

            </div>
            <div className='box-border border-solid w-[50%] h-[1080px] pt-[10%] font-helvatica'>

              <div className='w-[100%] flex justify-center mb-5'><h1 className='font-archivo text-6xl'>Sign Up</h1></div>

              <div className='flex justify-center font-bold text-base'>
                <div className='m-2'>
                  <h2>Username</h2>
                  <div><TextField/></div>
                </div>
                <div className='m-2'>
                  <h2>Nama Tim</h2>
                  <div><TextField/></div>
                </div>
              </div>

              <div className='flex justify-center font-bold text-base'>
                <div className='m-2'>
                  <h2>Password</h2>
                  <div><TextField ftype='show'/></div>
                </div>
                <div className='m-2'>
                  <h2>Konfirmasi Password</h2>
                  <div><TextField ftype='show'/></div>
                </div>
              </div>

              <div className='flex justify-center font-bold text-base'>
                <div className='m-2'>
                  <h2>Nama Ketua Tim</h2>
                  <div><TextField/></div>
                </div>
                <div className='m-2'>
                  <h2>Email Ketua Tim</h2>
                  <div><TextField/></div>
                </div>
              </div>

              <div className='flex justify-center font-bold text-base'>
                <div className='m-2'>
                  <h2>Nama Anggota 1</h2>
                  <div><TextField/></div>
                </div>
                <div className='m-2'>
                  <h2>Email Anggota 1</h2>
                  <div><TextField/></div>
                </div>
              </div>

              <div className='flex justify-center font-bold text-base'>
                <div className='m-2'>
                  <h2>Nama Anggota 2</h2>
                  <div><TextField/></div>
                </div>
                <div className='m-2'>
                  <h2>Email Anggota 2</h2>
                  <div><TextField/></div>
                </div>
              </div>

              <div className='flex justify-center mt-6'>
                <CustomButton bgColor='primary' icon={false} size='normal'>
                  <div className='w-[470px]'>Sign Up</div>
                </CustomButton>
              </div>
              
              <div className='flex justify-center text-sm font-helvatica mt-1'>
                <h2>Sudah punya akun? <a href="#" className='text-red300 font-bold'>Login!</a></h2>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}


export default SignUp
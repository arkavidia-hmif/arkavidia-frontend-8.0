import Image from 'next/image'
import Roadblock from 'src/assets/images/404/roadblock.svg'
import PoliceLineTop from 'src/assets/images/404/policeline-top.png'
import PoliceLineBottom from 'src/assets/images/404/policeline-bottom.png'
import { useRouter } from 'next/router'

const Maintenance = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center items-center text-center h-[100vh]">
            <div className="absolute top-0 left-0 w-[50%]">
                <Image src={PoliceLineTop} />
            </div>
            <Image src={Roadblock} />
            <h3 className="font-archivo text-[96px] text-shadow text-red300">
                OOPS!
            </h3>
            <p className='font-varela text-[32px] font-normal mb-[20px]'>Sorry, this page is currently down for maintenance</p>
                <span className='flex justify-center items center bg-blue300 py-[15px] w-[400px] text-white rounded-[12px] font-helvatica font-[700] text-[16px] cursor-pointer' onClick={() => router.back()}>
                    Kembali
                </span>
            <div className="flex absolute bottom-0 right-0 z-[-10] w-[50%]">
                <Image src={PoliceLineBottom} />
            </div>
        </div>
    )
}

export default Maintenance
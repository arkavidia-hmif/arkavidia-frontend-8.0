import CustomButton from '@src/components/CustomButton/CustomButton'
import Layout from '@src/components/Navigation/Layout'
import { TextField } from '@src/components/TextField'

const Login: React.FC<any> = () => {
  return (
    <Layout title="Sign In" description="Sign In">
      <div className="flex flex-row justify-between w-full h-screen">
        {/* Sisi Kiri */}
        <div className="container hidden md:flex flex-col justify-center items-center gap-[3.75rem] w-1/2 bg-yellow300">
          {/* Image Container */}
          <div className="h-[480px] w-[400px] bg-blue200">Gaada logonya :(</div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <h1 className="font-archivo font-black text-6xl text-center">
              Info
            </h1>
            <p className="font-archivo font-black text-xl text-center">Info</p>
          </div>

          {/* Dots Container */}
          <div className="h-[12px] w-[120px] bg-blue200" />
        </div>

        {/* Sisi Kanan */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 px-5 md:px-[80px] container">
          {/* Image Container */}
          <div className="h-[167px] w-[167px] bg-blue200">Gaada logonya :(</div>
          {/* Text Container */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="z-10 font-archivo text-2xl md:text-4xl text-center md:w-[200px] font-black text-white py-1 px-3 md:py-2 md:px-10 bg-black rotate-[7deg] -mb-1">
              Hello
            </h1>
            <h1 className="z-0 font-archivo text-2xl md:text-4xl text-center md:w-[336px] font-black text-white py-1 px-3 md:py-2 md:px-6 bg-black">
              Arkavidians!
            </h1>
          </div>
          {/* Login Container */}
          <h1 className="font-archivo font-black text-4xl md:text-6xl">
            Login
          </h1>
          <div className="flex flex-col w-full gap-3">
            <label className="font-helvatica font-bold text-base">
              Username
            </label>
            <TextField />
            <div />
            <label className="font-helvatica font-bold text-base">
              Password
            </label>
            <TextField ftype="show" />
            <p className="font-helvatica font-bold text-red300 text-[14px]">
              Lupa password?
            </p>
            <CustomButton bgColor="primary" size="normal">
              Login
            </CustomButton>
            <p className="font-helvatica font-normal text-[14px] text-center">
              Belum punya akun?{' '}
              <span className="text-red300 font-bold">Daftar sekarang!</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login

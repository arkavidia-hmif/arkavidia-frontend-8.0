import Countdown from '@src/components/CountdownCard/CompCountdown'

const CountdownComp = (): JSX.Element => {
  return (
    <>
      <div
        className="font-archivo border-4 border-black text-clip truncate overflow-hidden tracking-wider
        xl:text-[36px] ">
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div className="flex bg-brownblack justify-center w-full pb-[30px]">
        <div className="w-full lg:w-3/5">
          <Countdown
            date="2023/01/01"
            title="Sabtu, 31 Desember 2022 - 23:59 WIB"
          />
        </div>
      </div>
    </>
  )
}

export default CountdownComp

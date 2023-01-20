import Benefit from '@src/components/Benefit'

const BENEFITS: string[] = [
  'Mendapatkan sertifikat',
  'Tambahan portofolio dari projek akhir bootcamp',
  'Belajar dari profesional',
  'Bebas biaya',
  'Kesempatan untuk menunjukkan hasil karyamu di hadapan profesional',
  'Mendapatkan kesempatan mendengarkan talkshow ArkavTalks',
  'Mendapatkan pengelaman belajar menarik dengan suasana ITB yang indah :)'
]

const BenefitSection = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow300 pb-[20%] relative px-5 md:px-0">
      <div
        className="absolute z-5 top-0"
        style={{
          backgroundColor: '#1F307C',
          borderRadius: '0 0 100% 100%',
          width: '100%',
          height: '80%'
        }}>
        .
      </div>
      <Benefit benefits={BENEFITS} />
    </div>
  )
}

export default BenefitSection

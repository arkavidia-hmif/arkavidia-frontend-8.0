import Benefit from '@src/components/Benefit'

export default function Test() {
  return (
    <div className="pt-48 bg-blue300">
      <Benefit
        benefits={[
          'Mendapatkan sertifikat',
          'Tambahan portofolio dari projek akhir bootcamp',
          'Belajar dari profesional'
        ]}
      />
    </div>
  )
}

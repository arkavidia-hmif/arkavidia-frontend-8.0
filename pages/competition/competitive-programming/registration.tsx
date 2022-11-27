import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import CPImage from '@src/assets/images/compe-regist/CP.svg'
// import Maintenance from '@src/contexts/Maintenance/Maintenance';
import CompeRegist from '@src/contexts/CompetitionRegistration'

const CompetitionRegistration = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <CompeRegist image={CPImage} title={'Competitive Programming'} params={'competitive-programming'} desc={'Competitive Programming adalah kompetisi yang menguji kemampuan analisis para peserta dalam pemecahan masalah dan berpikir komputasional dengan menyelesaikan persoalan - persoalan yang diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia'} />
    </SEO>
  )
}

export default CompetitionRegistration

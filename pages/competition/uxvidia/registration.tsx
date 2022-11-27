import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import DatavidiaImage from '@src/assets/images/compe-regist/UXVidia.svg'
// import Maintenance from '@src/contexts/Maintenance/Maintenance';
import CompeRegist from '@src/contexts/CompetitionRegistration'

const CompetitionRegistration = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <CompeRegist image={DatavidiaImage} title={'UXVidia'} params={'uxvidia'} desc={'UXvidia adalah kompetisi desain pengalaman pengguna atau user experience (UX) sebuah aplikasi mobile yang berfokus pada pencapaian user experience goals dan usability goals, misalnya kenyamanan dan kemudahan pengguna dalam menggunakan sebuah aplikasi. UXvidia mengangkat tema ”Empowering integration of technology into daily life to answer digital disruption challenges" dengan subtema ekonomi, pendidikan, pariwisata, teknologi, dan kesehatan. Perlombaan ini ditujukan bagi mahasiswa S1/D4/D3 untuk menguji kemampuan dalam membuat desain pengalaman pengguna.'} />
    </SEO>
  )
}

export default CompetitionRegistration

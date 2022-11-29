import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import ArkalogicaImage from '@src/assets/images/compe-regist/Arkalogica.svg'
// import Maintenance from '@src/contexts/Maintenance/Maintenance';
import CompeRegist from '@src/contexts/CompetitionRegistration'

const CompetitionRegistration = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0">
      <CompeRegist image={ArkalogicaImage} title={'Arkalogica'} params={'arkalogica'} desc={'Arkalogica adalah kompetisi yang mengasah kemampuan peserta dalam penggunaan logika dan menyelesaikan masalah secara logis. Jenis-jenis permasalahan yang diberikan antara lain berbagai soal logika dan game menarik.'} />
    </SEO>
  )
}

export default CompetitionRegistration

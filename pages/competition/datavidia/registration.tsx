import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import DatavidiaImage from '@src/assets/images/compe-regist/Datavidia.svg'
// import Maintenance from '@src/contexts/Maintenance/Maintenance';
import CompeRegist from '@src/contexts/CompetitionRegistration'

const CompetitionRegistration = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0">
      <CompeRegist image={DatavidiaImage} title={'Datavidia'} params={'datavidia'} desc={'Datavida merupakan kompetisi yang bertujuan untuk menjadi ajang pengembangan kompetensi dan pertandingan antara talenta digital Indonesia khususnya di dunia sains data untuk memberikan keputusan yang bijak dan terarah.'} />
    </SEO>
  )
}

export default CompetitionRegistration

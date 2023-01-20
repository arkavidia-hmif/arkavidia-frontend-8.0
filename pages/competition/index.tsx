import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/Competition/Jumbotron';
import Prize from '@src/contexts/Competition/Prize'
import Category from '@src/contexts/Competition/Category'
import AcademyaContact from '@src/contexts/AcademyaPage/AcademyaContact';

const Competition = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Competition">
      <Jumbotron />
      <Prize/>
      <Category/>
      <AcademyaContact />
    </SEO>
  )
}

export default Competition;
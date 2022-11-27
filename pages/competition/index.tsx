import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/Competition/Jumbotron';
import Prize from '@src/contexts/Competition/Prize'
import Category from '@src/contexts/Competition/Category'

const Competition = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Competition">
      <Jumbotron />
      <Prize/>
      <Category/>
    </SEO>
  )
}

export default Competition;
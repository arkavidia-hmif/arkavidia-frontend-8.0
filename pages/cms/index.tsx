import SEO from '@src/components/SEO'
import Login from '@src/contexts/Login/admin'

const CMSPage = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | CMS">
      <Login />
    </SEO>
  )
}

export default CMSPage

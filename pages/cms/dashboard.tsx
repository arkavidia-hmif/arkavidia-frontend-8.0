import SEO from '@src/components/SEO'
import CMS from '@src/contexts/CMS'

const CMSPage = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | CMS">
      <CMS />
    </SEO>
  )
}

export default CMSPage

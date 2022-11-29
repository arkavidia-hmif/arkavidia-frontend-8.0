import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import Register from '@src/contexts/SignUp/signup';
// import Maintenance from './_error';

const { publicRuntimeConfig } = getConfig()
const { name } = publicRuntimeConfig.site

const SignUp = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0">
      <Register />
    </SEO>
  )
}

export default SignUp

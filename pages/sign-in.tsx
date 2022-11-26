import getConfig from 'next/config';
import SEO from '@src/components/SEO';
import Login from '@src/contexts/Login/login';
// import Maintenance from './_error';

const { publicRuntimeConfig } = getConfig()
const { name } = publicRuntimeConfig.site

const SignIn = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Sign In">
      <Login />
    </SEO>
  )
}

export default SignIn;

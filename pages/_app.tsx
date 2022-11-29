import type { AppProps } from 'next/app'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'
import { store } from '@src/redux/store';

import '@src/styles/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const isLogin = store.getState()?.auth?.token == null ? false : true;

  return (
    <div className="flex-col w-full overflow-x-hidden">
      <Navbar isLogged={isLogin} isAdmin={false} />
      <Component {...pageProps} />
      <Footer variant="redCompEvent" />
    </div>
  )
}

export default App

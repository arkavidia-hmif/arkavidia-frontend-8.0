import type { AppProps } from 'next/app'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'

import '@src/styles/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="flex-col w-full overflow-x-hidden">
      <Navbar isLogged={false} isAdmin={false} />
      <Component {...pageProps} />
      <Footer variant="redCompEvent" />
    </div>
  )
}

export default App

import type { AppProps } from 'next/app'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'
import { store } from '@src/redux/store';
import { useState, useEffect } from 'react'

import '@src/styles/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean>(store.getState()?.auth?.token == null ? false : true)

  useEffect(() => {
    setHasMounted(true);
    setIsLogin(store.getState()?.auth?.token == null ? false : true)
  }, [])

  if (!hasMounted) {
    return null;
  }else{
    return (
      <div className="flex-col w-full overflow-x-hidden">
        <Navbar isLogged={isLogin} isAdmin={false} />
        <Component {...pageProps} />
        <Footer variant="redCompEvent" />
      </div>
    )
  }
}

export default App

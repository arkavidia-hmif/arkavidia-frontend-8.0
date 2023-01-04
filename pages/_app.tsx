import type { AppProps } from 'next/app'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'
import { store } from '@src/redux/store'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getTeamData } from '@src/services/team'
import { logout } from '@src/services/auth'
import Toast from '@src/components/Toast'
import '@src/styles/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element | null => {
  const router = useRouter()
  const [hasMounted, setHasMounted] = useState(false)
  const [toastList, setToastList] = useState<JSX.Element[]>([])
  const [isLogin, setIsLogin] = useState<boolean>(
    store.getState()?.auth?.token !== null
  )
  const [isAdmin, setIsAdmin] = useState<boolean | null>(
    store.getState()?.auth?.admin === true
  )
  const sessionChecker = async () => {
    if (isLogin) {
      const res = await getTeamData()
      if (typeof res !== 'string') return
      if (res.includes('token is expired by')) {
        await logout().then(() => {
          window.location.href = '/'
        })
        setToastList([
          ...toastList,
          <Toast
            timer={5000}
            label={'Session telah habis. Mohon login kembali.'}
            type={'info'}
            position={'top'}
            key={'sessionLogout'}
          />
        ])
        setIsLogin(false)
      }
      setIsAdmin(store.getState()?.auth?.admin ?? false)
    }
  }

  useEffect(() => {
    setIsLogin(store.getState()?.auth?.token !== null)
    if (!isLogin) {
      if (
        router.pathname.includes('dashboard') ||
        router.pathname.includes('profile')
      )
        router.replace('/')
      if (router.pathname === '/cms/dashboard' && !isAdmin) router.replace('/')
    } else {
      if (router.pathname === '/sign-in' || router.pathname === '/sign-up')
        router.replace('/profile')
    }
    setHasMounted(true)
  }, [])

  useEffect(() => {
    sessionChecker()
  }, [])

  if (!hasMounted) {
    return null
  } else {
    return (
      <div className="flex-col w-full overflow-x-hidden">
        <Navbar isLogged={isLogin} isAdmin={isAdmin ?? false} />
        {toastList}
        <Component {...pageProps} />
        <Footer variant="redCompEvent" />
      </div>
    )
  }
}

export default App

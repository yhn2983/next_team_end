import { useEffect } from 'react'
import '@/styles/globals.scss'
<<<<<<< HEAD
import DefaultLayout from '@/components/layout/default-layout'
import { AuthContextProvider } from '@/context/auth-context'
=======
import DefaultLayout from '@/components/common/default-layout'
>>>>>>> raye

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

<<<<<<< HEAD
  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  )
=======
  return <Component {...pageProps} />
>>>>>>> raye
}

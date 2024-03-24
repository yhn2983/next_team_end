import { useEffect } from 'react'
import '@/styles/globals.scss'
import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <AuthContextProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthContextProvider>
  )
}

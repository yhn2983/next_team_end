import { useEffect } from 'react'
import '@/styles/globals.scss'
import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'
import { LikeProvider } from '@/hooks/use-like'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <AuthContextProvider>
      <LikeProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </LikeProvider>
    </AuthContextProvider>
  )
}

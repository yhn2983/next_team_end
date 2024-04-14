import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/product.scss'

import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
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

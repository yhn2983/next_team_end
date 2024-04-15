import { useEffect } from 'react'
import '@/styles/globals.scss'
import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'
import { SocketProvider } from '@/context/socket-context'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <SocketProvider>
      <AuthContextProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthContextProvider>
    </SocketProvider>
  )
}

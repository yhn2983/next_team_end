import { useEffect } from 'react'
import '@/styles/globals.scss'
import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'
import { SocketProvider } from '@/context/socket-context'
import Modal from 'react-modal'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  Modal.setAppElement('#__next')

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

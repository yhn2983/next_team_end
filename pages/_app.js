import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/product.scss'

import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'
import { LikeProvider } from '@/hooks/use-like'
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
        <LikeProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </LikeProvider>
      </AuthContextProvider>
    </SocketProvider>
  )
}

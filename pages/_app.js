import { useEffect } from 'react'
import '@/styles/globals.scss'
<<<<<<< HEAD
import '@/styles/product.scss'
import DefaultLayout from '@/components/common/default-layout'
=======
import { AuthContextProvider } from '@/context/auth-context'
import { CartProvider } from '@/hooks/use-cart'
>>>>>>> 153f21d6bdf566621c2acb5ffc3d78abecc18829

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

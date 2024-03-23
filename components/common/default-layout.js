import Navbar from './navbar'
import Footer from './footer'

export default function DefaultLayout({ children, pageName = '' }) {
  return (
    <>
      <div className="container-fluid">
        <Navbar pageName={pageName} />
        <main className="container-fluid">{children}</main>
        <Footer />
      </div>
    </>
  )
}

import Navbar from './navbar'
import Footer from './footer'
import CarouselS1 from './carousel'
import Category from './category'

export default function DefaultLayout({ children, pageName = '' }) {
  return (
    <>
      <div className="container-fluid">
        <Navbar pageName={pageName} />
        <CarouselS1 pageName={pageName} />
        <Category />
        <main className="container-fluid">{children}</main>
        <Footer pageName={pageName} />
      </div>
    </>
  )
}

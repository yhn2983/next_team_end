import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import CarouselS1 from './carousel/carousel'
import Category from './category/category'

export default function DefaultLayout({ children, pageName = '' }) {
  return (
    <>
      <div className="container-fluid">
        <Navbar pageName={pageName} />
        <CarouselS1 />
        <Category />
        <main className="container-fluid">{children}</main>
        <Footer />
      </div>
    </>
  )
}

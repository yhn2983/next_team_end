import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import CarouselS1 from '../home/carousel/carousel'

export default function DefaultLayout({ children, pageName = '' }) {
  return (
    <>
      <div className="container-fluid">
        <Navbar pageName={pageName} />
        <CarouselS1 />
        <main className="container-fluid">{children}</main>
        <Footer />
      </div>
    </>
  )
}

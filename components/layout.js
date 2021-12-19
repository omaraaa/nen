import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, ...props }) {
  return (
    <>
      <Navbar />
      <main {...props} className="md:px-8">{children}</main>
      <Footer />
    </>
  )
}
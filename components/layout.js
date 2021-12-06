import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, ...props }) {
  return (
    <>
      <Navbar />
      <main {...props}>{children}</main>
      <Footer/>
    </>
  )
}
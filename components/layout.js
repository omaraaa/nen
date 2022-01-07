import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, ...props }) {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <main {...props} className="md:px-8 min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  )
}
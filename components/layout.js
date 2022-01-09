import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, className, ...props }) {
  return (
    <div className='flex flex-col px-4'>
      <Navbar />
      <main {...props} className={(className ? className : "") + " min-h-[80vh]"}>{children}</main>
      <Footer />
    </div >
  )
}
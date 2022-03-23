import Article from '../components/Article'
import Layout from '../components/layout'
import ServiceItem from '../components/ServiceItem'
export default () => (
  <Layout >
    <Article title="Services">
      <div className="space-y-2">
        <section className=' space-y-2'>
          <div className='text-2xl font-black'>
            Digitization & Automation
          </div>
          <div className='p-2'>
            <div className='font-normal space-y-2'>
              <p>
                Looking to digitize or automate a process within your organization? We provide an incremental path to research and develop your solution.
                Start by requesting any of the following services in the list.
              </p>

              <div className="py-2">
                <ServiceItem name="Request Research & Analysis"></ServiceItem>
                <ServiceItem name="Request Prototype Development"></ServiceItem>
                <ServiceItem name="Request Full Solution Development"></ServiceItem>
              </div>
            </div>
          </div>
        </section>
        <section className='space-y-2'>
          <div className='text-2xl font-black'>
            Codebase Services
          </div>
          <div className='p-2'>
            <div className='font-normal'>
              Request an analysis on a codebase that you own.
              <div className="py-2">
                <ServiceItem name="Request Code Analysis"></ServiceItem>
                <ServiceItem name="Request Code Debugging"></ServiceItem>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='text-2xl font-black'>
            Contact Us
          </div>
          <form className='flex flex-col sm:p-2 space-y-2'>
            <label htmlFor="email" className='font-bold text-lg'>Email</label>
            <input type="text" name="text" className='p-1 border border-gray-400 w-full rounded'></input>
            <label htmlFor="email" className='font-bold text-lg'>Message</label>
            <textarea type="email" name="email" className='p-1 border border-gray-400 w-full h-64 rounded'></textarea>

            <div className='flex justify-end '>
              <button className="hover:bg-[#00000033] border border-gray-600 shadow-gray-600 shadow  rounded-lg py-4 md:py-2 font-semibold w-32" type="submit">Send</button>
            </div>
          </form>
        </section>
      </div>
    </Article>
  </Layout>
)

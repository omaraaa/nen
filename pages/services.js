import Article from '../components/Article'
import Layout from '../components/layout'
import ServiceItem from '../components/ServiceItem'
export default () => (
  <Layout >
    <Article title="Services">
      <div className="px-2 space-y-2">
        <section className=' p-4'>
          <div className='text-2xl font-black'>
            Digitization & Automation
          </div>
          <div className='m-2 p-2'>
            <div className='font-normal'>
              <p>
                Looking to digitize or automate a process within your organization? We provide an incremental path to research and develop your solution.
                Start by requesting any of the following services in the list.
              </p>

              <div className="md:px-8 py-2">
                <ServiceItem name="Request Research & Analysis"></ServiceItem>
                <ServiceItem name="Request Prototype Development"></ServiceItem>
                <ServiceItem name="Request Full Solution Development"></ServiceItem>
              </div>
            </div>
          </div>
        </section>
        <section className=' p-4'>
          <div className='text-black text-2xl font-black'>
            Codebase Services
          </div>
          <div className='m-2 p-2'>
            <div className='font-normal'>
              Request an analysis on a codebase that you own.
              <div className="md:px-8 py-2">
                <ServiceItem name="Request Code Analysis"></ServiceItem>
                <ServiceItem name="Request Code Debugging"></ServiceItem>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Article>
  </Layout>
)

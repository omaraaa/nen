import Layout from '../components/layout'
export default () => (
  <Layout className="px-8">
    <div className='my-8 border p-4 rounded-lg rounded-lg shadow-lg'>
      <span className='text-black text-4xl font-black'>Services</span>

      <div className='p-2 rounded-lg'>
        <div className='text-2xl font-black'>
          Digitization & Automation
        </div>
        <div className='m-2 p-2'>
          <div className='font-normal'>
            We provide an incremental path to digitize and automate processes within your organization.
            <ul className="list-disc px-8">
              <li>.</li>
              <li>Build a minimal prototype.</li>
              <li>Layout a path to scale the solution.</li>
              <li>Research and develop custom software solution.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='p-2 rounded-lg'>
        <div className='text-black text-2xl font-black'>
          Software Engineering Consulting

        </div>
        <div className='m-2 p-2'>
          <div className='font-normal'>
            We provide an incremental path to digitize and automate processes within your organization.
            <ul className="list-disc px-8">
              <li>.</li>
              <li>Build a minimal prototype.</li>
              <li>Layout a path to scale the solution.</li>
              <li>Research and develop custom software solution.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

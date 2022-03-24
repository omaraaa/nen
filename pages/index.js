import Article from "../components/Article";
import Card from "../components/Card";
import Layout from "../components/layout";

export default () => (
  <Layout className="justify-items-center items-center">
    <div className="bg-[#00060d80]  space-y-8 min-h-screen">
      <div className="flex flex-col sm:items-center sm:justify-center sm:py-64 p-8">
        <div className="text-5xl sm:text-6xl font-black">Node Edge Node</div>
        <div className="text-4xl font-bold">
          Software Development and Consulting
        </div>
        {/* 
        <a
          href="/services"
          className="mt-8 p-4 text-4xl font-bold flex items-baseline bg-emerald-800  rounded-xl hover:bg-white hover:text-[#00060d] justify-center"
        >
          Start Now &#10132;
        </a> */}
        <div className="grid sm:grid-rows-1 sm:grid-cols-3 gap-2 sm:space-x-4  pt-8">
          <Card title="Custom Software Solutions"></Card>
          <Card title="Process Automation & Enchancement"></Card>
          <Card title="Web Application Development"></Card>
        </div>
        <div className="text-xl font-semibold py-8 text-center">
          Contact At: <a href="mailto:omar@nen.ae">omar@nen.ae</a>
        </div>
      </div>
    </div>
  </Layout>
);

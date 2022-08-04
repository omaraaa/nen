import Article from "../components/Article";
import Card from "../components/Card";
import Layout from "../components/layout";

export default () => (
  <Layout className="justify-items-center items-center">
    <div className="bg-[#00060d80]  space-y-8 min-h-screen">
      <div className="flex flex-col sm:items-center sm:justify-center sm:py-64 p-8">
        <div className="text-5xl sm:text-6xl font-black select-none">
          Node Edge Node
        </div>
        <div className="text-4xl font-bold text-gray-400 select-none">
          Software Development and Consulting
        </div>
        {/* 
        <a
          href="/services"
          className="mt-8 p-4 text-4xl font-bold flex items-baseline bg-emerald-800  rounded-xl hover:bg-white hover:text-[#00060d] justify-center"
        >
          Start Now &#10132;
        </a> */}
        <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4  py-8 px-2 select-none">
          <Card title="Digitization & Automation"></Card>
          <Card title="AI & ML"></Card>
          <Card title="Web Applications"></Card>
        </div>
        <div className="text-xl font-semibold py-8 text-center">
          <object
            type="image/svg+xml"
            data="layered-waves.svg"
            className="absolute left-0 bottom-0 py-8 -z-50 w-full"
          ></object>
          <span className="">
            Contact at: <a href="mailto:omar@nen.ae">omar@nen.ae</a>
          </span>
        </div>
      </div>
    </div>
  </Layout>
);

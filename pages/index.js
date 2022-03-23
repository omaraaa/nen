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

        {/* <a
          href="/services"
          className="mt-8 p-4 text-4xl font-bold flex items-baseline bg-emerald-800  rounded-xl hover:bg-white hover:text-[#00060d] justify-center"
        >
          Start Now &#10132;
        </a> */}
      </div>
    </div>
  </Layout>
);

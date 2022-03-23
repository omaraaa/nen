import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full  bg-[#00000060] backdrop-blur-xl drop-shadow shadow shadow-black md:bg-transparent md:shadow-none md:backdrop-blur-0">
        <div className="my-8  md:px-12 md:rounded-lg pb-8 md:p-8 md:w-80 max-w-sm  md: bg-[#00000060] md:backdrop-blur-xl md:drop-shadow md:shadow shadow-black">
          <div className="text-4xl font-black pb-4">Login</div>
          <form method="post" className="flex flex-col">
            <div className="flex flex-col space-y-4 py-4 border-y">
              <div className="inline-flex flex-col">
                Email{" "}
                <input
                  name="email"
                  type="email"
                  className="border border-[#ffffff60] drop-shadow shadow shadow-black  rounded-lg p-4 md:p-2 w-full "
                />
              </div>
              <div className="inline-flex flex-col">
                Password{" "}
                <input
                  name="password"
                  type="password"
                  className="border border-[#ffffff60] drop-shadow shadow shadow-black rounded-lg p-4 md:p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 py-4">
              <button
                className="hover:bg-[#00000011] border border-gray-600 drop-shadow shadow shadow-black rounded-lg py-4 md:py-2  font-semibold"
                type="submit"
              >
                Log in
              </button>
              <a
                className="select-none hover:bg-[#00000011] border border-gray-600 drop-shadow shadow shadow-black  rounded-lg py-4 md:py-2  font-semibold text-center"
                href="/register"
              >
                Register
              </a>
              <button
                className="transition-colors hover:bg-red-600  hover:border-transparent hover:text-white  text-gray-600 shadow border border-gray-600  rounded-lg py-4 md:py-2  font-semibold"
                type="submit"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

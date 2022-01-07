import Layout from "../components/layout"

export default () => {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="my-8 md:border md:border-slate-400 px-12 md:rounded-lg pb-8 md:p-8 md:w-80 max-w-sm">
                    <div className="text-4xl font-black pb-4">Login</div>
                    <form method="post" className="flex flex-col">
                        <div className="flex flex-col space-y-4 py-4 border-y">
                            <div className="inline-flex flex-col">Email <input name="email" type="email" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                            <div className="inline-flex flex-col">Password <input name="password" type="password" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full" /></div>
                        </div>
                        <div className="flex flex-col space-y-4 py-4">
                            <button className="hover:bg-gray-300 border border-slate-800 hover:shadow-slate-800 hover:shadow  rounded-lg py-4 md:py-2  font-semibold" type="submit">Log in</button>
                            <a className="select-none hover:bg-gray-300 border border-gray-800 hover:shadow-gray-800 hover:shadow  rounded-lg py-4 md:py-2  font-semibold text-center" href="/register">Register</a>
                            <button className="hover:bg-red-600 hover:text-white  text-gray-600 shadow  rounded-lg py-4 md:py-2  font-semibold" type="submit">Forgot Password?</button>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}
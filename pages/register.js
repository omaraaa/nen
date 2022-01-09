import Layout from "../components/layout"

export default () => {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="my-8 md:border px-12 md:rounded-lg md:border md:border-gray-400 pb-8 md:p-8 md:max-w-lg">
                    <div className="text-4xl font-black pb-4 border-b">Register</div>
                    <form method="post" className="flex flex-col">
                        <div className="flex flex-col space-y-4 py-4 border-b">
                            <div className="flex items-center space-x-2 rounded">

                                <div className="inline-flex flex-col">First Name <input name="email" type="string" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                                <div className="inline-flex flex-col">Last Name <input name="email" type="string" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                            </div>
                            <div className="inline-flex flex-col">Email <input name="email" type="email" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                            <div className="inline-flex flex-col">Password <input name="password" type="password" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full" /></div>
                            <div className="inline-flex flex-col">Confirm Password <input name="password" type="password" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full" /></div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 py-4">
                            <button className="hover:bg-[#00000033] border border-gray-600  hover:shadow-gray-800 shadow  rounded-lg py-4 md:py-2 md:w-3/4 font-semibold" type="submit">Register</button>
                            <a className="text-center text-gray-600 select-none hover:bg-[#00000033] hover:text-white hover:shadow-gray-800 shadow rounded-lg py-4 px-1 md:py-2 md:w-1/4 font-semibold" href="/login">Login?</a>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}
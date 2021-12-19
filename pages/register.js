import Layout from "../components/layout"

export default () => {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="my-8 md:border px-12 md:rounded-lg md:shadow-lg md:shadow-gray-800 pb-8 md:p-8 md:w-80 max-w-sm">
                    <div className="text-4xl font-black pb-4">Register</div>
                    <form method="post" className="flex flex-col">
                        <div className="flex flex-col space-y-4 py-4 border-y">
                            <div className="flex items-center space-x-2 rounded">
                                <div className="inline-flex flex-col">Title
                                    <div className=" w-full ">
                                        <select className="border border-zinc-400 rounded-lg bg-white p-4 md:p-2 ">
                                            <option>None</option>
                                            <option>Mr.</option>
                                            <option>Ms.</option>
                                            <option>Mrs.</option>
                                            <option>Dr.</option>
                                            <option>Prof.</option>
                                        </select>
                                    </div></div>
                                <div className="inline-flex flex-col">Name <input name="email" type="email" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                            </div>
                            <div className="inline-flex flex-col">Email <input name="email" type="email" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full " /></div>
                            <div className="inline-flex flex-col">Password <input name="password" type="password" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full" /></div>
                            <div className="inline-flex flex-col">Confirm Password <input name="password" type="password" className="border border-zinc-400 rounded-lg p-4 md:p-2 w-full" /></div>
                        </div>
                        <div className="flex flex-col space-y-4 py-4">
                            <button className="hover:bg-gray-300 border border-gray-800 shadow-gray-800 shadow  rounded-lg py-4 md:py-2  font-semibold" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}
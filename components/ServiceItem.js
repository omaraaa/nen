
export default ({ name }) => {
    return (
        <a href="/services">
            <div className="flex items-center pl-4 space-x-4 border border-black dark:border-white rounded-md my-2 py-2 hover:bg-[#00000022] shadow-md shadow-black" >
                <div className="text-lg font-semibold">{name}</div>
                <div className="flex-grow p-1"></div>
                <div className="pr-4">
                    &#8250;
                </div>
            </div>
        </a>
    )
}
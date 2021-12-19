
export default ({ name }) => {
    return (
        <a href="/services">
            <div className="flex items-center px-4 space-x-4 border rounded-md my-2 py-2 hover:bg-gray-100 shadow shadow-gray-800" >
                <div className="text-lg font-semibold">{name}</div>
                <div className="flex-grow p-1"></div>
                &#8250;
            </div>
        </a>
    )
}
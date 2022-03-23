export default ({ name }) => {
  return (
    <a href="/services">
      <div className="will-change-auto transition-all flex items-center pl-4 space-x-4 border border-[#ffffff80] hover:bg-black hover:text-white drop-shadow shadow shadow-black  hover:bg-white  hover:text-black rounded-md my-2 py-2">
        <div className="text-lg font-semibold">{name}</div>
        <div className="flex-grow p-1"></div>
        <div className="pr-4">&#8250;</div>
      </div>
    </a>
  );
};

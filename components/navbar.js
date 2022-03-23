import { useState } from "react";
import Drawer from "./Drawer";

const HeaderLink = ({ children, href, ...props }) => {
  return (
    <a
      className="transition-all text-lg py-4 sm:shadow-none bg-[#00040e] sm:bg-transparent sm:py-1 sm:px-2 sm:rounded-lg sm:h-full hover:bg-gray-200  hover:bg-white  hover:text-black w-full sm:w-auto text-center "
      href={href}
      name={href}
      {...props}
    >
      {children}
    </a>
  );
};

const Left = (
  <>
    {/* <HeaderLink href="/about">About</HeaderLink>
    <HeaderLink href="/services">Services</HeaderLink>
    <HeaderLink href="/dashboard">Dashboard</HeaderLink> */}
  </>
);

const Right = (
  <>
    {/* <HeaderLink href="/login">Login</HeaderLink>
    <HeaderLink href="/register">Register</HeaderLink> */}
  </>
);

export default ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        role="Navigation"
        className={
          className +
          " py-4 lg:px-32 px-4 flex  w-full leading-none tracking-tighter select-none z-50 border-b border-gray-800"
        }
      >
        <div className=" flex w-full space-x-4  items-center">
          <a href="/" className="text-4xl font-black mr-4">
            NEN.AE
          </a>

          <div className="hidden sm:flex w-full space-x-4">
            {Left}
            <div className="flex-grow px-px"></div>
            {Right}
          </div>
        </div>
        <button
          className=" flex w-full  rounded-lg active:ring sm:hidden text-md justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="flex-grow px-px"></div>
          <span className="text-center font-black pr-4 pt-1 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 1.5 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </button>
        <span className="hidden navbg  block absolute left-0 p-8 w-screen  -z-50"></span>
      </nav>
      {/* <div className="static">
        <div className=" py-1 sm:py-[2px] bg-gradient-to-r from-green-400 to-blue-500 via-red-500 w-full left-0 absolute "></div>
      </div> */}
      <Drawer
        open={open}
        className="flex flex-col items-center sm:hidden  w-full border-t border-gray-800"
      >
        {Left}
        {Right}
      </Drawer>
    </>
  );
};

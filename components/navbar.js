import { useState } from "react"
import Drawer from "./Drawer"


const HeaderLink = ({ children, href, ...props }) => {
  return <a className="text-lg py-1 px-2 rounded-lg hover:shadow hover:shadow-black" href={href} {...props}>{children}</a>
}

const Left = <>
  <HeaderLink href="/about">About</HeaderLink>
  <HeaderLink href="/services">Services</HeaderLink>
  <HeaderLink href="/dashboard">Dashboard</HeaderLink>
</>

const Right = <>
  <HeaderLink href="/login">Login</HeaderLink>
  <HeaderLink href="/register">Register</HeaderLink>
</>

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="flex w-full leading-none tracking-tighter lg:border-none select-none">
        <div className="flex w-full space-x-4 sm:py-3 py-4 items-center">

          <a href="/" className="text-4xl font-black mr-4">NEN.AE</a>

          <div className="hidden sm:flex w-full space-x-4 pr-8">
            {Left}
            <div className="flex-grow px-px"></div>
            {Right}
          </div>
        </div>
        <button className=" flex w-full  rounded-lg active:ring sm:hidden text-md justify-center items-center" onClick={() => setOpen(!open)}>
          <div className="flex-grow px-px"></div>
          <span className="text-center font-black pr-4 pt-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg></span>
        </button>
      </header >
      <div className="static">
        <div className=" py-1 sm:py-[2px] bg-gradient-to-r from-green-400 to-blue-500 via-red-500 w-full left-0 absolute "></div>
      </div>
      <Drawer open={open} class="p-8 flex flex-col items-center sm:hidden">
        {Left}
        {Right}
      </Drawer>
    </>
  )
}
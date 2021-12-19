import { useState } from "react"
import Drawer from "./Drawer"


const Left = <>
  <a className="text-black text-lg hover:underline mt-1" href="/about">About</a>
  <a className="text-black text-lg hover:underline mt-1" href="/services">Services</a>
</>

const Right = <>
  <a className="text-black text-lg hover:underline mt-1" href="/login">Login</a>
  <a className="text-black text-lg hover:underline mt-1" href="/register">Register</a>
</>

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="flex w-full leading-none tracking-tighter lg:border-none border-b select-none ">
        <div className="flex w-full space-x-4 p-4 items-center">

          <a href="/" className="text-black text-4xl font-black mr-4">NEN.AE</a>

          <div className="hidden sm:flex w-full space-x-4 pr-4">
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
      <div className=" py-1  bg-gradient-to-r from-green-400 to-blue-500 via-red-500"></div>
      <Drawer open={open} class="flex flex-col items-center">
        {Left}
        {Right}
      </Drawer>
    </>
  )
}
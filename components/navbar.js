export default () => (
    <>
      <header className="header  w-full  leading-none tracking-tighter lg:border-none border-b">
      <div className="flex space-x-4 p-4 items-center">
        <a href="/" className="text-black text-4xl font-black mr-4">NEN.AE</a>
        <div className="hidden md:flex w-full space-x-4">
        <a className="text-black text-lg hover:underline mt-1" href="/about">About</a>
        <a className="text-black text-lg hover:underline mt-1" href="/services">Services</a>
        <div className="flex-grow px-px"></div>
        <a className="text-black text-lg hover:underline mt-1 px-4" href="/services">Sign In</a>
        </div>
        </div>
      <div className="animate-grad mx-auto text-center tracking-tighter py-1  bg-gradient-to-r from-green-400 to-blue-500 via-red-500"></div>
        
      </header>
    </>
  )
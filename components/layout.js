import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, className, ...props }) {
  return (
    <div className="flex flex-col text-white h-full min-h-screen">
      <Navbar className="" />
      <main {...props} className={(className ? className : "") + " grow"}>
        {children}
      </main>
      <Footer className="bg-[#000000c0] " />
    </div>
  );
}

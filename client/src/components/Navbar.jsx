import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 shadow-md bg-orange-400 opacity-100 px-6 py-4 flex justify-between items-center">
      

      {/* Desktop Nav */}
      <h2 className="text-xl font-roboto">Logo</h2>
      <div className="hidden sm:flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link className="hover:underline">About</Link>  
        <Link className="hover:underline">Contact</Link>
        <Link className="hover:underline">Menu</Link>
      </div>

      <div className="hidden sm:flex gap-4">
        <Link to="/login" className="px-2.5 py-0.5 rounded-md text-brand-orange bg-white">Login</Link>
        <Link to="/register" className="px-2.5 py-0.5 rounded-md bg-brand-orange text-white">Sign up</Link>
      </div>

      <button className="sm:hidden cursor-pointer" onClick={() => setOpen(!open)}><Menu /></button>
      
      
      
      
    </nav>
    {/* Mobile Nav */}
      {open && (<div className="bg-gray-100 p-4">
        <div className="flex flex-col text-center pt-20 mb-10 gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link className="hover:underline">About</Link>  
        <Link className="hover:underline">Contact</Link>
        <Link className="hover:underline">Menu</Link>
      </div>

      <div className="flex flex-col text-center gap-4">
        <Link to="/login" className="border-2 px-2.5 py-1.5 rounded-md text-brand-orange bg-white">Login</Link>
        <Link to="/register" className="px-2.5 py-1.5 rounded-md bg-brand-orange text-white">Sign up</Link>
      </div>
      </div>)}
    </>
  )
}

export default Navbar

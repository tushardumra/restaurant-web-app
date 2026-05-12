import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Prevents scroll lock bug
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-black/70 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }`}>
      <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-2xl text-white font-bold'>
          Foodie
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8 text-white font-medium'>
          <li>
            <a href="#home" className='hover:text-orange-400 transition'>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className='hover:text-orange-400 transition'>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className='hover:text-orange-400 transition'>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className='hover:text-orange-400 transition'>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu (Hamburger menu) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars/>
        </button>

        {/* CTA Button */}
        <button className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition'>
          Order Now
        </button>
      </nav>

      

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 md:hidden"
          onClick={() => setMenuOpen(false)}></div>

      )}

      <div
        className={`fixed top-0 left-0 h-screen w-full text-white transform transition-transform duration-500 ease-in-out z-40 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        {/* Mobile Menu (Hamburger menu) */}
        <button
          className="md:hidden text-white text-2xl fixed top-7 right-7"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes/>
        </button>

        
      
        {/* Menu content */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold">
          <a href="#home" className="hover:text-orange-400 transition duration-300" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#menu" className="hover:text-orange-400 transition duration-300" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#about" className="hover:text-orange-400 transition duration-300" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:text-orange-400 transition duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

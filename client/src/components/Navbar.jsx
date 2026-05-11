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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes/> : <FaBars/>}
        </button>

        {/* CTA Button */}
        <button className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition'>
          Order Now
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <a href="#home" className="block">Home</a>
          <a href="#menu" className="block">Menu</a>
          <a href="#about" className="block">About</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar

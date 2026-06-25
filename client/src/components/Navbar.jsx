import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, authLoading } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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
    };
  }, [menuOpen]);

  if (authLoading) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">Foodie</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
          <li>
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-orange-400 transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Login/SignUp Button
        <Link
          to="/auth"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </Link> */}

        {/* Mobile Menu (Hamburger menu) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Login/SignUp Button */}
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <p className="text-white font-medium">Hello, {user.username}</p>

            <button
              onClick={async () => {
                await fetch("http://localhost:5000/api/auth/logout", {
                  method: "POST",
                  credentials: "include",
                });

                setUser(null);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </Link>
        )}
      </nav>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-full text-white transform transition-transform duration-500 ease-in-out z-40 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        {/* Mobile Menu (Cancel X button) */}
        <button
          className="md:hidden text-white text-2xl fixed top-7 right-7"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <div className="fixed top-17 left-5">
          <h1 className= "text-2xl font-serif font-bold">Welcome to Foodie!</h1>
          {/* Login/SignUp Button */}
          {user ? (
            <div className="flex items-center gap-10">
              <p className="text-white font-medium">Hello, {user.username}</p>

              <button
                onClick={async () => {
                  await fetch("http://localhost:5000/api/auth/logout", {
                    method: "POST",
                    credentials: "include",
                  });

                  setUser(null);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-left">
                {/* <span></span> */}
                <br />
                Please login or signup to order your food.
              </h3>
              <div className="flex flex-col items-center justify-center h-full">
                <Link
                  to="/auth"
                  className=" text-white py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Login / Signup
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Menu content */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold">
          <a
            href="#home"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

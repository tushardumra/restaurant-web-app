import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const { user, setUser, authLoading } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  console.log("Cart items in Navbar:", cartItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
      <nav className="max-w-7xl mx-auto py-4 px-4 md:px-8 xl:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">Foodie</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-white font-semibold">
          <li>
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-orange-400 transition">
              Menu
            </Link>
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

        {/* Shopping Cart Icon */}
        <div className="flex items-center gap-2">
        <Link to="/cart" className="relative text-white text-3xl">
          <MdOutlineShoppingBag />

          {cartCount > 0 && (
            <span
              className="
        absolute
        -top-2
        -right-4
        bg-orange-500
        text-white
        text-xs
        rounded-full
        w-5
        h-5
        flex
        items-center
        justify-center
      "
            >
              {cartCount}
            </span>
          )}
        </Link>

        {/* <p className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          {cartItems.length}
        </p> */}

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
          <div className="hidden md:flex items-center gap-2">
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
            className="hidden md:block font-semibold border-0 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-all duration-300"
          >
            Login / Sign up
          </Link>
        )}
        </div>
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
          <h1 className="text-2xl font-serif font-bold">Welcome to Foodie!</h1>
          {/* Login/SignUp Button */}
          {user ? (
            <div className="flex gap-5 items-center">
              <p className="text-white font-medium">Hello, {user.username}</p>

              <button
                onClick={async () => {
                  await fetch("http://localhost:5000/api/auth/logout", {
                    method: "POST",
                    credentials: "include",
                  });

                  setUser(null);
                }}
                className=" text-orange-500 underline text-sm py-2 hover:text-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <p className="py-1.5">
                Please{" "}
                <Link
                  to="/auth"
                  className=" text-orange-500 underline text-sm hover:text-orange-600 transition"
                >
                  Login
                </Link>{" "}
                or{" "}
                <Link
                  to="/auth"
                  className=" text-orange-500 underline text-sm hover:text-orange-600 transition"
                >
                  Sign Up
                </Link>{" "}
                to order your food.
              </p>
            </div>
          )}
        </div>

        {/* Menu content */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold">
          <Link
            to="/"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {/* <a
            href="#menu"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </a> */}
          <Link
            to="/menu"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
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

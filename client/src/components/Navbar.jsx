import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Navbar = () => {
  const { user, setUser, authLoading } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [showUserMenu, setShowUserMenu] = useState(false);

  const { cartItems } = useContext(CartContext);
  console.log("Cart items in Navbar:", cartItems);

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

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

  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
                          method: "POST",
                          credentials: "include",
                        });

                        setUser(null);
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
            <Link to="/about" className="hover:text-orange-400 transition">
              About
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </li>
          {/* {user ? (
            <li>
              <Link to="/my-orders" className="hover:text-orange-400 transition">
                My Orders
              </Link>
            </li>
          ) : null} */}
        </ul>

        {/* Shopping Cart Icon */}
        <div className="flex items-center gap-3 sm:gap-2">
          <Link to="/cart" className="relative text-white">
            {/* <MdOutlineShoppingBag /> */}
            <LocalMallOutlinedIcon />
            {/* <ShoppingBagOutlinedIcon/> */}

            {totalCartCount > 0 && (
              <span
                className="
        absolute
        -top-2
        -right-2
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
                {totalCartCount}
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

          {/* Mobile Navbar (Hamburger icon) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

          {/* Login/SignUp Button */}
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              {/* <p className="text-white font-medium">Hello, {user.username}</p> */}

              {/* <button
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
              </button> */}

              <div className="relative">
                <button
                  onClick={() =>
                    setShowUserMenu(!showUserMenu)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    font-medium
                    cursor-pointer
                    text-white
                  "
                >
                {/* <FaRegUser className="font-bold"/> */}
                <AccountCircleOutlinedIcon/>
            Hello, {user.username || user.name}
              </button>

              {showUserMenu && (
                <div
                  className="
                    absolute
                    right-0
                    mt-3
                    w-38
                    bg-white
                    rounded-lg
                    shadow-lg
                    border
                    overflow-hidden
                    z-50
                  "
                >

      <Link
        to="/my-orders"
        className="
          block
          px-4
          py-2
          hover:bg-orange-400
          hover:text-white
          hover:transition-all
          duration-300
        "
      >
        My Orders
      </Link>

      <button
        onClick={handleLogout}
        className="
          w-full
          text-left
          px-4
          py-2
          hover:bg-orange-400
          hover:text-white
          hover:transition-all
          duration-300
        "
      >
        Logout
      </button>

    </div>
  )}
              </div>
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

        <div className="fixed top-7">
          
          <h1 className="text-2xl font-serif font-bold px-2.5">Welcome to Foodie!</h1>
          {/* Login/SignUp Button */}
          {user ? (
            <div className="flex gap-5 items-center">
              {/* <p className="text-white font-medium">Hello, {user.username}</p> */}

              {/* <button
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
              </button> */}

              <div className="relative mt-1">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="
      flex
      items-center
      gap-2
      font-medium
      cursor-pointer
      px-2.5
    "
                >
                  <AccountCircleOutlinedIcon/> Hello, {user.username || user.name}
                </button>
                

                {showUserMenu && (
                  <div
                    className="
        absolute
        mt-2
        w-screen
        bg-[rgba(255, 255, 255, 0.35)]
        backdrop-blur-[20px]
        border-[1px, solid, rgba(255, 255, 255, 0.5)]
        box-shadow-[0 8px 32px rgba(0,0,0,0.15)]
        text-orange-400
        font-semibold
        rounded-sm
        shadow-lg
        overflow-hidden
        z-50
      "
                  >
                    <Link
                      to="/my-orders"
                      onClick={() => setShowUserMenu(false)}
                      className="
          block
          px-4
          py-2.5
          hover:bg-orange-400
          hover:text-white
          hover:transition-all
          duration-300
        "
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      // onClick={async () => {
                      //   await fetch("http://localhost:5000/api/auth/logout", {
                      //     method: "POST",
                      //     credentials: "include",
                      //   });

                      //   setUser(null);
                      // }}
                      className="
          w-full
          text-left
          px-4
          py-3
          hover:bg-orange-400
          hover:text-white
          hover:transition-all
          duration-300
        "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <p className="py-1.5 px-2.5">
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
          
          <Link
            to="/menu"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="#contact"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          {/* <Link
            to="/my-orders"
            className="hover:text-orange-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            My Orders
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

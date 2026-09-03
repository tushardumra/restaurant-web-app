import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const { 
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
   } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen pt-28 px-4 bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 text-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your Cart is Empty</h2>

          <p className="text-gray-500 mt-2">Add some delicious food first.</p>
        </div>
      </section>
    );
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
    <Navbar/>
    <section className="min-h-screen pt-28 pb-16 px-4 bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 text-slate-800">
    <div className="max-w-6xl mx-auto md:my-12">
      <h1 className="text-mbl-hdng md:text-tbl-hdng lg:text-lpt-hdng font-bold mb-4 md:mb-5 lg:mb-6">Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="
        relative    
        shadow-md
        border
        border-current/15
        bg-yellow-200
        rounded-2xl
        p-4
        flex
        flex-col
        md:flex-row
        gap-4
      "
          >
            {/* Item UI */}
            <img
              src={item.image}
              alt={item.name}
              className="
    w-full
    md:w-40
    h-40
    object-cover
    rounded-xl
  "
            />
            <div className="flex-1 lg:pr-28">
              <h2 className="text-2xl font-semibold">{item.name}</h2>

              <p className="text-gray-500">{item.category}</p>

              <p className="text-orange-500 font-bold mt-2">₹{item.price}</p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="
      w-8
      h-8
      font-semibold
      rounded-full
      bg-gray-200
      hover:bg-gray-300
    "
                >-</button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="
      w-8
      h-8
      rounded-full
      font-semibold
      bg-orange-500
      text-white
      hover:bg-orange-600
    "
                >+</button>
              </div>

              <p className="font-semibold mt-2">
                Subtotal: ₹{item.price * item.quantity}
              </p>
            </div>
            <button
  onClick={() => removeFromCart(item._id)}
  className="
    mt-0  
    px-4
    py-2
    bg-red-500
    text-white
    rounded-xl
    hover:bg-red-600
    transition
    md:absolute
    md:top-4
    md:right-4
    shadow-md
  "
>
  Remove
</button>
          </div>
        ))}
      </div>
      <div className="mt-10 text-right">
        <h2 className="text-3xl font-bold">Total: ₹{totalAmount}</h2>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between mt-6">
        <Link
    to="/menu"
    className="
      inline-block
      order-2
      md:order-1
      bg-amber-50
      text-orange-500
      px-4
      py-3
      w-full
      md:w-auto
      text-center
      shadow-md
      border
      border-current/15
      rounded-xl
      hover:bg-orange-500
      hover:text-white
      transition-all
      duration-300
    "
  >
    Order More
  </Link>

  <Link
    to="/checkout"
    className="
      inline-block
      order-1
      md:order-2
      bg-orange-500
      text-white
      px-4
      py-3
      w-full
      md:w-auto
      text-center
      shadow-md
      border
      border-current/15
      rounded-xl
      hover:bg-orange-600
      transition
    "
  >
    Proceed To Checkout
  </Link>
</div>
    </div>
  </section>
  <Footer/>
  </>
  )


};

export default Cart;

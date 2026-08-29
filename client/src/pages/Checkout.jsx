import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  console.log("Cart Items in Checkout:", cartItems); // Debugging line to check cart items

  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        items: cartItems.map((item) => ({
          food: item._id,
          quantity: item.quantity,
        })),
      };

      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      clearCart();
      navigate("/order-success")
    }
    catch (error) {
      console.log(error);
    }
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // if (cartItems.length === 0) {
  //   return <Navigate to="/menu" />;
  // }

  return (
    <>
    <Navbar/>
    <section className="pt-28 pb-16 px-4 bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 text-slate-800">
      <div className="max-w-5xl mx-auto md:my-12 bg-yellow-200 p-6 rounded-xl shadow-md">
        <div>
          <h1 className="text-3xl font-bold mb-8">
          Checkout
          </h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="
                flex
                justify-between
                border-b
                pb-3
              "
            >
              <div className="flex items-center gap-4 w-1/2 justify-between">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-bold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">
            Total: ₹{totalAmount}
          </h2>
        </div>
        </div>
        
        <div className="flex justify-end">
          <button
          onClick={handlePlaceOrder}
          className="
            mt-6
            bg-orange-500
            text-white
            w-full
            md:w-auto
            px-6
            py-3
            rounded-xl
            hover:bg-orange-600
            transition
            
          "
        >
          Place Order
        </button>
        </div>
        
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Checkout;
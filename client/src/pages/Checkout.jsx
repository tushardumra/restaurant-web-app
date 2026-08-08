import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <Navigate to="/menu" />;
  }

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
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
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <h2 className="text-3xl font-bold">
            Total: ${totalAmount}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
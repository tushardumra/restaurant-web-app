import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
  return (
    <section className="min-h-screen pt-28 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mt-2">
          Add some delicious food first.
        </p>
      </div>
    </section>
  );
}
}

export default Cart

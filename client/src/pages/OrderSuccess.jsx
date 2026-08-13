import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        <h1 className="text-5xl font-bold text-green-600 mb-4">
          🎉 Order Placed!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your order.
          Our team has received it and will start preparing it shortly.
        </p>

        <Link
          to="/menu"
          className="
            bg-orange-500
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-orange-600
          "
        >
          Continue Shopping
        </Link>

      </div>
    </section>
  );
};

export default OrderSuccess;
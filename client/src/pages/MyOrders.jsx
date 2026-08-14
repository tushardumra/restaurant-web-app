import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders/my-orders",
        {
          withCredentials: true,
        }
      );

      setOrders(response.data.orders);
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/cancel/${orderId}`,
        {},
        {
          withCredentials: true,
        }
      );

      fetchOrders();
    } catch (error) {
      console.log("Error cancelling order:", error);
    }
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "accepted":
        return "bg-blue-100 text-blue-700";

      case "preparing":
        return "bg-orange-100 text-orange-700";

      case "completed":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <section className="pt-28 text-center">
        <h2 className="text-xl font-semibold">
          Loading Orders...
        </h2>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="pt-28 text-center">
        <h2 className="text-2xl font-bold">
          No Orders Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Start ordering your favorite food.
        </p>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="
                border
                rounded-2xl
                p-6
                shadow-sm
              "
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h2 className="font-bold text-lg">
                    Order ID
                  </h2>

                  <p className="text-gray-500 break-all text-sm">
                    {order._id}
                  </p>
                </div>

                <span
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    w-fit
                    ${getStatusStyles(order.status)}
                  `}
                >
                  {order.status}
                </span>

              </div>

              {/* Ordered Items */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3">
                  Ordered Items
                </h3>

                <div className="space-y-2">

                  {order.items.map((item) => (
                    <div
                      key={item._id}
                      className="
                        flex
                        justify-between
                        border-b
                        pb-2
                      "
                    >
                      <span>
                        {item.food?.name}
                      </span>

                      <span>
                        Qty: {item.quantity}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <p className="font-bold text-xl">
                    Total: ${order.totalAmount}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Placed On:{" "}
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                {order.status === "pending" && (
                  <button
                    onClick={() =>
                      handleCancelOrder(order._id)
                    }
                    className="
                      bg-red-500
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      hover:bg-red-600
                      transition
                    "
                  >
                    Cancel Order
                  </button>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MyOrders;
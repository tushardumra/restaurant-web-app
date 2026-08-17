import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders/all-orders",
        {
          withCredentials: true,
        },
      );

      // setOrders(response.data.orders);
      setOrders(
        response.data.orders.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        ),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/update-status/${orderId}`,
        { status },
        {
          withCredentials: true,
        },
      );

      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusBadge = (status) => {
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

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = (order.user?.username ?? "")
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ? true : order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">Loading Orders...</div>
      </div>
    );
  }

  console.log(orders[0]);
  console.log("Filtered Orders:", filteredOrders);
console.log("Search:", searchTerm);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Order Management</h1>

        <input
          type="text"
          placeholder="Search customer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            border
            rounded-lg
            px-4
            py-2
            mb-6
            w-full
          "
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="preparing">Preparing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="
              bg-amber-100
              rounded-xl
              shadow-md
              p-6
            "
            >
              <h2 className="font-bold text-lg">{order.user?.username}</h2>

              <p className="text-gray-500">{order.user?.email}</p>

              <div className="mt-4">
                {order.items.map((item) => (
                  <div key={item._id} className="flex justify-between">
                    <span>{item.food?.name}</span>

                    <span>Qty: {item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <strong>Total:</strong> ${order.totalAmount}
              </div>

              <div className="mt-2">
                <span
                  className={`
    px-3
    py-1
    rounded-full
    text-sm
    font-medium
    ${getStatusBadge(order.status)}
  `}
                >
                  {order.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  disabled={order.status !== "pending"}
                  onClick={() => updateStatus(order._id, "accepted")}
                  className="
      bg-blue-500
      text-white
      px-4
      py-2
      rounded-lg
    "
                >
                  Accept
                </button>

                <button
                  disabled={order.status !== "accepted"}
                  onClick={() => updateStatus(order._id, "preparing")}
                  className="
      bg-orange-500
      text-white
      px-4
      py-2
      rounded-lg
    "
                >
                  Preparing
                </button>

                <button
                  disabled={order.status !== "preparing"}
                  onClick={() => updateStatus(order._id, "completed")}
                  className="
      bg-green-500
      text-white
      px-4
      py-2
      rounded-lg
    "
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;

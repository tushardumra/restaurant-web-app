import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [analytics, setAnalytics] = useState({
  totalRevenue: 0,
  totalOrders: 0,
  });

  const [dailyData, setDailyData] = useState([]);

const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchAnalytics();
}, []);

const fetchAnalytics = async () => {
  try {
    const [totalRes, dailyRes] = await Promise.all([
      axios.get(
        "http://localhost:5000/api/orders/analytics/total",
        {
          withCredentials: true,
        }
      ),

      axios.get(
        "http://localhost:5000/api/orders/analytics/daily",
        {
          withCredentials: true,
        }
      ),
    ]);

    setAnalytics(totalRes.data);
    setDailyData(dailyRes.data);

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        Loading Dashboard...
      </div>
    </div>
  );
}

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
  <h1 className="text-4xl font-bold mb-8">
    Dashboard
  </h1>

  <div className="grid md:grid-cols-2 gap-6">

    <div
      className="
        bg-white
        shadow-md
        rounded-2xl
        p-6
      "
    >
      <h2 className="text-gray-500">
        Total Revenue
      </h2>

      <p className="text-4xl font-bold mt-2">
        ${analytics.totalRevenue}
      </p>
    </div>

    <div
      className="
        bg-white
        shadow-md
        rounded-2xl
        p-6
      "
    >
      <h2 className="text-gray-500">
        Total Orders
      </h2>

      <p className="text-4xl font-bold mt-2">
        {analytics.totalOrders}
      </p>
    </div>

  </div>

  <div className="mt-10">
  <div
    className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
    "
  >
    <h2 className="text-2xl font-bold mb-6">
      Revenue Overview
    </h2>

    <div className="h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="totalRevenue"
            stroke="#f97316"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default Dashboard;
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="
        w-64
        min-h-screen
        bg-black
        text-white
        p-6
      "
    >
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <div className="space-y-4">

        <Link
          to="/admin"
          className="block hover:text-orange-500"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/foods"
          className="block hover:text-orange-500"
        >
          Food Management
        </Link>

        <Link
          to="/admin/orders"
          className="block hover:text-orange-500"
        >
          Order Management
        </Link>

        <Link
          to="/admin/analytics"
          className="block hover:text-orange-500"
        >
          Analytics
        </Link>

      </div>
    </div>
  );
};

export default AdminSidebar;
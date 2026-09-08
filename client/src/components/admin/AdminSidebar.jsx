import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="
        fixed
        inset-y-0
        left-0
        z-50
        w-64
        h-screen
        overflow-y-auto
        bg-zinc-900
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
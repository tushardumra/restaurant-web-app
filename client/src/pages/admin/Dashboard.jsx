import AdminSidebar from "../../components/admin/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
import AdminSidebar from "../../components/admin/AdminSidebar";

const Foods = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          Food Management
        </h1>
      </div>
    </div>
  );
};

export default Foods;
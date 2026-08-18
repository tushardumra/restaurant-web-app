import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useNavigate } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/food");

      setFoods(response.data.foods);
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
        <div className="flex-1 p-8">Loading Foods...</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Food Management</h1>

          <button
            onClick={() => navigate("/admin/foods/add")}
            className="
              bg-orange-500
              text-white
              px-5
              py-3
              rounded-lg
            "
          >
            + Add Food
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {foods.map((food) => (
    <div
      key={food._id}
      className="
        bg-white
        rounded-2xl
        shadow-md
        overflow-hidden
      "
    >
      <img
        src={food.image}
        alt={food.name}
        className="
          w-full
          h-48
          object-cover
        "
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {food.name}
        </h2>

        <p className="text-gray-500">
          {food.category}
        </p>

        <p className="mt-2 font-semibold">
          ${food.price}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          Stock: {food.stock}
        </p>

        <div className="flex gap-2 mt-4">

          <button
            className="
              bg-blue-500
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Edit
          </button>

          <button
            className="
              bg-red-500
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Foods;

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

  const deleteFood = async (foodId) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this food item?"
  );

  if (!confirmed) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/food/delete/${foodId}`,
      {
        withCredentials: true,
      }
    );

    fetchFoods();

  } catch (error) {
    console.log(error);
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-100">
        <AdminSidebar />
        <div className="ml-64 min-h-screen p-8 text-zinc-900">Loading Foods...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-100">
      <AdminSidebar />

      <div className="ml-64 min-h-screen p-8 text-zinc-900">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Food Management</h1>

          <button
            onClick={() => navigate("/admin/foods/add")}
            className="
              bg-white
              text-orange-500
              px-5
              py-2
              rounded-xl
              border
              border-orange-500
              hover:bg-orange-600
              hover:text-white
              transition-all
              duration-300
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
        border
        border-current/10
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
          ₹{food.price}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          Stock: {food.stock}
        </p>

        <div className="flex gap-2 mt-4">

          <button
            onClick={() => 
              navigate(`/admin/foods/edit/${food._id}`)
            }
            className="
              bg-yellow-600
              text-white
              px-4
              py-2
              rounded-xl
              border
              border-current/15
              hover:bg-yellow-700
              transition-all
              duration-300
            "
          >
            Edit
          </button>

          <button
            onClick={() => deleteFood(food._id)}
            className="
              bg-red-500
              text-white
              px-4
              py-1
              rounded-xl
              border
              border-current/15
              hover:bg-red-600
              transition-all
              duration-300
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

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FoodDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  console.log("User from AuthContext:", user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchFood();
  }, [id]);

  const fetchFood = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/food/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Reques failed with status ${response.status}`,
        );
      }

      const data = await response.json();

      setFood(data);

      console.log("Fetched food:", data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  const handleAddToCart = () => {
    console.log("User when clicking Add To Cart:", user);

  if (!user) {
    console.log("Redirecting to auth");
    navigate("/auth", {
      state: {
        from: location,
      },
    });
    return;
  }

  console.log("Adding to cart");

    addToCart(food);
    navigate("/cart", { replace: true });
  }

  if (loading || !food) {
    return <div className="min-h-screen pt-28 text-center bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 text-slate-800">Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <section className="min-h-screen pt-28 pb-16 px-4 bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 text-slate-800">
      <div className="max-w-6xl mx-auto md:my-12">
        <div className="grid lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div>
            <img
              src={food.image}
              alt={food.name}
              className="
      w-full
      h-85
      md:h-112.5
      object-cover
      rounded-2xl
      shadow-lg
    "
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{food.name}</h1>
            <p className="text-orange-500 font-semibold mb-3">
              {food.category}
            </p>
            <p className="text-3xl font-bold mb-3 md:mb-6">₹{food.price}</p>
            <h2 className="text-xl font-semibold mb-2">Description</h2>

            <p className="text-gray-600 leading-relaxed">{food.description}</p>
            <div className="mt-6">
              {food.stock > 0 ? (
                <span className="text-green-600 font-medium">
                  In Stock ({food.stock})
                </span>
              ) : (
                <span className="text-red-600 font-medium">Out Of Stock</span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="
    mt-8
    bg-orange-500
    text-white
    w-full
    md:w-auto
    px-8
    py-3
    rounded-xl
    hover:bg-orange-600
    transition
  "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FoodDetails;

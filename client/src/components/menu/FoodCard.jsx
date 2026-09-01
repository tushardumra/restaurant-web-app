import {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FoodCard = ({ _id, name, description, price, imageUrl, category, stock }) => {

  // console.log(name)
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to your cart.");
      navigate("/auth");
      return;
    }
    addToCart({ _id, name, price, imageUrl });
  }

  return (
    <div>
      <Link to={`/food/${_id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:translate-y-2 transition-all duration-300 border border-current/10">
        <div className="h-42 sm:h-40 overflow-hidden">
          <img
            src={imageUrl }
            // http://localhost:5173/admin/foods
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center gap-1 sm:gap-2 justify-baseline flex-wrap mb-2">
          <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>

          <span className="">
            {stock > 0 ? (
              <span className="inline-block text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold">In Stock</span>
            ) : (
              <span className="inline-block text-red-600 bg-red-100 px-3 py-1 rounded-full text-xs font-semibold">Out of Stock</span>
            )}
          </span>
          </div>
          
          <h3 className="text-gray-700 text-sm sm:text-lg lg:text-lg font-bold mb-1">{name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg sm:text-xl  font-bold text-orange-500">₹{price}</p>
            <button
              disabled={stock <= 0}
              onClick={handleAddToCart}
              className={`
                px-2.5  py-1.5  text-sm rounded-lg transition
                ${
                  stock > 0
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
              {stock > 0 ? "Buy Now" : "Unavailable"}
            </button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default FoodCard;



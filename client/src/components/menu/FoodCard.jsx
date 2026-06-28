const FoodCard = ({ name, description, price, imageUrl, category }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <div className="h-52 overflow-hidden">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-orange-500">₹{price}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

import { useEffect, useState } from "react";
import FoodCard from "../components/menu/FoodCard";
import Footer from "../components/Footer";

const Menu = () => {
  // console.log("Menu component rendered");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // console.log("useEffect running");
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      // console.log("Fetching foods...");
      setLoading(true);
      // console.log("Fetching food items from server...");
      const response = await fetch("http://localhost:5000/api/food", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log("Response from server:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch food items");
      }

      const data = await response.json();
      // console.log("Data:", data);
      setFoods(data.foods || []); // Ensure foods is an array
    } catch (error) {
      // console.log("ERROR:", error);
      setError(error.message);
    } finally {
      // console.log("Loading finished");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading food items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
     food.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === "All" ||
      food.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // console.log("Foods:", foods);
  // console.log("Search:", searchTerm);
  // console.log("Filtered:", filteredFoods);

  const categories = [
    "All",
    ...new Set(foods.map((food) => food.category)),
  ];

  return (
    <>
    <section className="min-h-screen bg-linear-to-t from-amber-100 via-amber-200 to-amber-300 py-24 px-4 md:px-8">
      <div className=" max-w-7xl mx-auto sm:my-8 md:my-12 lg:my-14 xl:my-18 text-slate-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h1>
        <p className="mb-5">
          Explore our delicious dishes and beverages.
        </p>

        {/* <div className="mb-8">Search Bar</div> */}
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-white border-2 border-amber-100 rounded-xl p-2 md:p-3 outline-none focus:border-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />
        </div>

        
        {/* <div className="mb-8">Categories</div> */}
        <div className="flex gap-3 overflow-x-auto mb-3 pb-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-md px-2.5 py-1.5 md:px-4 md:py-2 border-0 rounded-full whitespace-nowrap transition-all
        ${
          selectedCategory === category
            ? "bg-orange-400 text-white"
            : "bg-amber-100 text-gray-700 border"
        }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border text-gray-300 border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          // className="mb-8 w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          >
          <option value="">Sort By</option> 
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="nameAZ">Name: A-Z</option>
          <option value="newest">Newest</option>
        </select> */}

        {/* <div>Food Cards</div> */}
        <div className="p-2 sm:p-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {filteredFoods.length === 0 ? (
            <div className="text-center col-span-full py-00 sm:py-20">
              <h3 className="text-xl font-semibold">No food found</h3>
              <p className="text-gray-500 mt-2">Try another search keyword.</p>
            </div>
          ) : (
            filteredFoods.map((food) => (
              <FoodCard
                key={food._id}
                _id={food._id}
                name={food.name}
                category={food.category}
                description={food.description}
                price={food.price}
                imageUrl={food.imageUrl || food.image}
                stock={food.stock}
              />
            ))
          )}
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Menu;

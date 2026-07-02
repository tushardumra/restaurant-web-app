import { useEffect, useState } from "react";
import FoodCard from "../components/menu/FoodCard";

// const foods = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     category: "Pizza",
//     description: "Fresh mozzarella, basil leaves and rich tomato sauce.",
//     price: 299,
//     imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//   },

//   {
//     id: 2,
//     name: "Veggie Burger",
//     category: "Burger",
//     description: "A delicious veggie patty with fresh lettuce and tomato.",
//     price: 199,
//     imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
//   },

//   {
//     id: 3,
//     name: "Caesar Salad",
//     category: "Salad",
//     description: "Crisp romaine lettuce with Caesar dressing and croutons.",
//     price: 149,
//     imageUrl: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDI%3D",
//   },

//   {
//     id: 4,
//     name: "Spaghetti Bolognese",
//     category: "Pasta",
//     description: "Classic Italian pasta with a rich meat sauce.",
//     price: 249,
//     imageUrl: "https://images.unsplash.com/photo-1592312406345-c6f552c9619f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwYWdoZXR0aSUyMGJvbG9nbmVzZXxlbnwwfDJ8MHx8fDA%3D",
//   },

//   {
//     id: 5,
//     name: "Chocolate Cake",
//     category: "Dessert",
//     description: "Rich and moist chocolate cake with a creamy frosting.",
//     price: 129,
//     imageUrl: "https://images.unsplash.com/photo-1702841690564-ccacf3c9b452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENob2NvbGF0ZSUyMENha2V8ZW58MHwyfDB8fHww",
//   },

//   {
//     id: 6,
//     name: "Iced Coffee",
//     category: "Beverage",
//     description: "Chilled coffee with a hint of vanilla.",
//     price: 99,
//     imageUrl: "https://images.unsplash.com/photo-1632789397993-863a2f7f4267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SWNlZCUyMENvZmZlZXxlbnwwfDJ8MHx8fDA%3D",
//   },

// ]


const Menu = () => {
  console.log("Menu component rendered");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("useEffect running");
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      console.log("Fetching foods...");
      setLoading(true);
      console.log("Fetching food items from server...");
      const response = await fetch("http://localhost:5000/api/food", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response from server:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch food items");
      }

      const data = await response.json();
      console.log("Data:", data);
      setFoods(data.foods || []); // Ensure foods is an array
    } catch (error) {
      console.log("ERROR:", error);
      setError(error.message);
    } finally {
      console.log("Loading finished");
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
  

  return (
    <section className="min-h-screen pt-24 px-4 md:px-8">
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600 mb-8">
          Explore our delicious dishes and beverages.
        </p>

        <div className="mb-8">Search Bar</div>

        <div className="mb-8">Categories</div>

        {/* <div>Food Cards</div> */}
        <div className="p-2 sm:p-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {foods.length === 0 ? (
            <p className="text-gray-600 col-span-full text-center">
              No food items available.
            </p>
          ) : (
            foods.map((food) => (
              <FoodCard
                key={food._id}
                name={food.name}
                category={food.category}
                description={food.description}
                price={food.price}
                imageUrl={food.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;

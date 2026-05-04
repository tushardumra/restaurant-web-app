import React from "react";
import FoodCard from "./FoodCard";
import popular1 from "../assets/popular1.avif";

const FeatureItems = () => {
  const POPULAR_DISHES = [
    {
      id: 1,
      title: "Cheese Burger",
      price: "$14.99",
      description: "Cheese patty, spicy mayo, and lettuce.",
      imageSrc:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8MnwwfHx8Mg%3D%3D",
    },
    {
      id: 2,
      title: "Mix Veg Pizza",
      price: "$18.50",
      description: "Hand-stretched dough with premium pepperoni.",
      imageSrc:
        "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHwyfDB8fHwy",
    },
    {
      id: 3,
      title: "Veggie Sandwich",
      price: "$24.99",
      description: "Prime cut tomato with garlic butter glaze.",
      imageSrc: "https://images.unsplash.com/photo-1705538363245-03fe613f9eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxsZWQlMjBzYW5kd2ljaHxlbnwwfDJ8MHx8fDI%3D",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-l-8 border-brand-orange pl-6">
        <h2 className="text-5xl font-black uppercase leading-none">
          Popular <br /> <span className="text-brand-orange">Dishes</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {
          POPULAR_DISHES.map((dish, index) => {
            // const isMiddleCard = index % 3 === 1;
            return (
              <div 
              key={index} 
              // className={isMiddleCard ? "md:mt-20" : "mt-0"}
            >
              <FoodCard 
                title={dish.title}
                price={dish.price}
                description={dish.description}
                imageSrc={dish.imageSrc}
              />
            </div>
            )
          })
        }
      </div>
    </section>
  )
};

export default FeatureItems;

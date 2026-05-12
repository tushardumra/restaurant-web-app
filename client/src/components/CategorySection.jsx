import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Added Navigation 🧭

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FoodCards = [
  {
    id: 1,
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwxfDB8fHwy",
  },
  {
    id: 2,
    title: "burger",
    image:
      "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfDF8MHx8fDI%3D",
  },
  {
    id: 3,
    title: "Wraps",
    image:
      "https://images.unsplash.com/photo-1646530208887-8a791bff4701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JhcHN8ZW58MHwxfDB8fHwy",
  },
  {
    id: 4,
    title: "Sandwich",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpY2h8ZW58MHwxfDB8fHwy",
  },
  {
    id: 5,
    title: "French Fries",
    image:
      "https://images.unsplash.com/photo-1630431341771-1ceb084d6607?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Pasta",
    image:
      "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhc3RhfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    id: 7,
    title: "Salad",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Choco cake",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY28lMjBsYXZhJTIwY2FrZXxlbnwwfDF8MHx8fDI%3D",
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-brand-bgWhite text-black px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black mb-4">What we make</h2>
          </div>

          {/* Custom Navigation Arrows Container (Hidden on Mobile) */}
          <div className="hidden md:flex gap-4 mb-2">
            <button className="nav-prev px-3 py-1 border-2 border-gray-300 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer">
              ❮
            </button>
            <button className="nav-next px-3 py-1 border-2 border-gray-300 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer">
              ❯
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={15}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".nav-prev",
            nextEl: ".nav-next",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="pb-16"
        >
          {FoodCards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="mb-15 shrink-0 bg-orange-500/80 shadow-md overflow-hidden rounded-lg"
            >
              <div className="hover:scale-95 transition duration-300 rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-65 w-full object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modern Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination-bullet { background: gray !important; opcaity: 0.3; }
          .swiper-pagination-bullet-active { background: #FF5F00 !important; opacity: 1; width: 24px; border-radius: 4px;}
          .nav-prev: disabled, .nav-next:disabled {
          opacity: 0.3; cursor: not-allowed;}`,
        }}
      />
    </section>
  );
};

export default CategorySection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Added Navigation 🧭

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Food Blogger",
    text: "The Volcano Burger is actually life-changing. The heat is perfect.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Local Legend",
    text: "Finally, a place that understands 'Bold.' The atmosphere is high-energy.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Steak Enthusiast",
    text: "That Bold Steak with garlic butter? I'll be dreaming about it for weeks.",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Chef",
    text: "Impeccable flavors and even better presentation. A must-visit!",
  },
  {
    id: 5,
    name: "Jake Miller",
    role: "Vlogger",
    text: "The neon aesthetic isn't just for show—the food actually backs it up.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-18 px-4 md:py-24 md:px-6 bg-brand-bgWhite text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto p-3">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black mb-3">
            What people say
          </h2>
          <p className="">Real customers, real meal, real talk</p>
          </div>
          

          {/* Custom Navigation Arrows Container (Hidden on Mobile) */}
          <div className="hidden md:flex gap-4 mb-2">
            <button className="nav-prev px-3 py-1 border-2  border-white/20 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer">
              ❮
            </button>
            <button className="nav-next px-3 py-1 border-2 border-white/20 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer">
              ❯
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".nav-prev",
            nextEl: ".nav-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {TESTIMONIALS.map((review) => (
            <SwiperSlide key={review.id} className="h-full mb-15">
              <div className="bg-brand-charcoal p-8 rounded-2xl relative h-full flex flex-col border-2 border-gray-300 hover:border-brand-orange/30 transition-colors shadow-[8px_8px_4px_rgba(0,0,0,0.1)]">
                <span className="text-6xl font-serif text-brand-orange opacity-40 leading-none">
                  “
                </span>
                <p className="text-base font-medium leading-relaxed mb-6 grow">
                  {review.text}
                </p>
                <div className="mt-auto">
                  <h4 className="text-brand-orange font-bold mb-1">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-semibold">
                    {review.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modern Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet { background: gray !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #FF5F00 !important; opacity: 1; width: 24px; border-radius: 4px; }
        .nav-prev:disabled, .nav-next:disabled { opacity: 0.3; cursor: not-allowed; }
      `,
        }}
      />
    </section>
  );
};

export default TestimonialSlider;

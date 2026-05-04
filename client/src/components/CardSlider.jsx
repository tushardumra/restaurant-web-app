import { useEffect, useMemo, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Web Design",
    // description: "Modern and responsive website designs for your business.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwxfDB8fHwy",
  },
  {
    id: 2,
    title: "App Development",
    description: "Fast and scalable mobile app solutions.",
    image:
      "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfDF8MHx8fDI%3D",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Clean and user-friendly digital experiences.",
    image:
      "https://images.unsplash.com/photo-1646530208887-8a791bff4701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JhcHN8ZW58MHwxfDB8fHwy",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improve search visibility and traffic.",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpY2h8ZW58MHwxfDB8fHwy",
  },
  {
    id: 5,
    title: "Brand Strategy",
    description: "Build a memorable and trusted identity.",
    image:
      "https://images.unsplash.com/photo-1630431341771-1ceb084d6607?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Marketing",
    description: "Reach more people with targeted campaigns.",
    image:
      "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhc3RhfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    id: 7,
    title: "Consulting",
    description: "Expert guidance for better digital decisions.",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Analytics",
    description: "Track performance with useful insights.",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY28lMjBsYXZhJTIwY2FrZXxlbnwwfDF8MHx8fDI%3D",
  },
];

export default function CardSlider() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive cards per screen
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(2); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(4); // tablet
      } else {
        setCardsPerView(6); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxSlide = useMemo(
    () => Math.max(cards.length - cardsPerView, 0),
    [cardsPerView]
  );

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto slide + pause on hover
  // useEffect(() => {
  //   if (isPaused) return;

  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [isPaused, maxSlide]);

  // Reset when screen changes
  useEffect(() => {
    if (current > maxSlide) setCurrent(0);
  }, [current, maxSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide(); // swipe left
    }

    if (distance < -50) {
      prevSlide(); // swipe right
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">What we make</h2>

        
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                shrink-0
                w-[calc(50%-8px)]
                md:w-[calc(25%-12px)]
                lg:w-[calc(16.666%-14px)]
                bg-white rounded-xl shadow-md overflow-hidden
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 md:h-60 object-cover"
              />

              {/* <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {card.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
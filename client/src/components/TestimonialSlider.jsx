import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive Cards Count

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3)
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.addEventListener("resize", updateCardsToShow);
  },[]);

  const maxIndex = testimonials.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1: prev - 1 );
  }

  // Auto slide with pause on hover
  
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, maxIndex]);

  // Swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();  // swipe left
    if (distance < -50) prevSlide();  //swipe right
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Real feedback from happy customers</p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{transform: `translateX(-${currentIndex * 100}%)`}}
          >
            { testimonials.map((testimonial) => 
            <div
            key={testimonial.id}
            className="w-full sm:w-1/2 lg:w-1/3 shrink-0"
            >
              <TestimonialCard
              testimonial={testimonial}
            />
            </div>
            
            )}
          </div>

          {/* Buttons */}
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-black w-6": "bg-gray-400"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider

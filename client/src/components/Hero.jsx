import { useEffect } from "react";
import heroimg from "../assets/heroimg.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full lg:h-screen py-30 h-auto bg-cover bg-center z-20"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="w-full relative z-10 flex flex-col justify-center items-center h-full gap-4 text-white px-6">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="lg:text-7xl text-4xl capitalize text-center font-inter font-bold"
        >
          Delicious Food Delivered Fast
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-lg text-center lg:w-[50%] w-full"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          necessitatibus aut recusandae nisi iusto quia dicta voluptatem libero
          expedita inventore?
        </p>

        <button data-aos="slide-up" data-aos-delay="300" className="bg-brand-orange px-7 py-3 font-semibold capitalize rounded-lg mt-5 cursor-pointer hover:bg-white hover:text-brand-orange">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;

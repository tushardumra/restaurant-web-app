import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutHeroImg from "../assets/about-hero3.avif";
import aboutStoryImg from "../assets/about-story.avif";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <main>
      {/* About Hero Section */}
      <section
        className="relative w-full h-screen py-30 bg-cover bg-center z-20"
        style={{ backgroundImage: `url(${aboutHeroImg})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>.{/* content */}
        <div className="w-full relative z-10 flex flex-col justify-center items-center h-full gap-4 text-white px-6 pt-24">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl capitalize text-center font-inter font-bold"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            About Foodie
          </h1>
          <p
            className="text-lg text-center lg-w[50%] w-full text-gray-200"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Serving delicious meals made with fresh ingredients and
            unforgettable flavors.
          </p>
          <Link
            to="/menu"
            className="bg-brand-orange px-7 py-3 font-semibold capitalize rounded-lg mt-5 cursor-pointer hover:bg-white hover:text-brand-orange"
            data-aos="slide-up"
            data-aos-delay="300"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side column with image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHByZXBhcmF0aW9ufGVufDB8MXwwfHx8Mg%3D%3D"
                alt="About Foodie"
                className="w-full h-112.5 object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Right side column with text */}
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-wider">
                Our Story
              </p>
              <h2 className="text-4xl font-bold mt-3">
                Passion for Great Food & Exceptional Experiences
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At Foodie, we believe that great food brings people together.
                What started as a small dream has grown into a restaurant
                dedicated to serving fresh ingredients, authentic flavors, and
                memorable dining experiences.
              </p>
              <div className="mt-8 p-5 bg-orange-50 rounded-2xl">
                <h3 className="font-bold text-lg">Our Mission</h3>

                <p className="text-gray-600 mt-2">
                  To serve high-quality meals made with fresh ingredients while
                  delivering outstanding customer experiences.
                </p>
              </div>

              <div className="mt-4 p-5 bg-orange-50 rounded-2xl">
                <h3 className="font-bold text-lg">Our Vision</h3>

                <p className="text-gray-600 mt-2">
                  To become the most trusted and loved food destination for
                  families, friends, and food enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutHeroImg from "../assets/about-hero3.avif";
import aboutStoryImg from "../assets/about-story.avif";
import Aos from "aos";
import "aos/dist/aos.css";
import veggieBasket from "../assets/icons/vegetable-basket.png";
import dineTable from "../assets/icons/dinning-table.png";
import chefHat from "../assets/icons/chef.png";
import deliveryBoy from "../assets/icons/delivery-boy.png";
import Footer from "../components/Footer";
import aboutCTA from "../assets/aboutPageImgs/aboutCTA1.avif"

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  const features = [
    {
      title: "Fresh Ingredients",
      description:
        "We source high-quality ingredients daily to ensure freshness in every meal.",
      icon: veggieBasket,
    },
    {
      title: "Expert Chefs",
      description:
        "Our experienced chefs craft dishes with passion and creativity.",
      icon: chefHat,
    },
    {
      title: "Fast Delivery",
      description:
        "Hot and delicious meals delivered quickly to your doorstep.",
      icon: deliveryBoy,
    },
    {
      title: "Cozy Ambience",
      description:
        "Enjoy a warm and welcoming atmosphere with family and friends.",
      icon: dineTable,
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "50K+",
      label: "Meals Served",
    },
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "4.8★",
      label: "Customer Rating",
    },
  ];

  return (
    <>
    <main>
      {/* About Hero Section */}
      <section
        className="relative w-full h-screen py-30 bg-cover bg-center z-20"
        style={{ backgroundImage: `url(${aboutHeroImg})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>.{/* content */}
        <div className="w-full relative z-10 flex flex-col justify-center items-center h-full gap-4 text-white px-6 pt-18">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl capitalize text-center font-inter font-bold"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            About Foodie
          </h1>
          <p
            className="text-lg text-center lg:w[50%] w-full text-gray-200"
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
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto px-0 md:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left side column with image */}
            <div>
              <img
                src={aboutStoryImg}
                alt="About Foodie"
                className="w-full h-110 lg:h-155 object-cover rounded-3xl shadow-lg"
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
              {/* Points to highlight: */}
              <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-5 lg:grid-cols-1 lg:gap-0">
                <div className="mt-8 p-4 md:p-5 bg-orange-50 shadow-lg rounded-2xl">
                  <h3 className="font-bold text-lg">Our Mission</h3>

                  <p className="text-gray-600 mt-2">
                    To serve high-quality meals made with fresh ingredients
                    while delivering outstanding customer experiences.
                  </p>
                </div>

                <div className="mt-8 p-4 md:p-5 bg-orange-50 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-lg">Our Vision</h3>

                  <p className="text-gray-600 mt-2">
                    To become the most trusted and loved food destination for
                    families, friends, and food enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Why Choose Us Section */}
      <section className="py-34 px-4 bg-brand-bgWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold mt-3">
              What Makes Foodie Special
            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              We combine fresh ingredients, expert chefs, and exceptional
              service to create memorable dining experiences every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2
                transition-all duration-300"
              >
                <img src={feature.icon} alt="" className="h-12 w-12" />
                <h3 className="text-xl font-semibold mb-3 mt-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Restaurant's Stats Section */}
      <section className="py-34 bg-amber-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase">
              Our Achievements
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Numbers That Speak For Themselves
            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              Over the years, Foodie has served thousands of customers with
              passion, quality, and consistency.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {stat.number}
                </h3>

                <p className="mt-3 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Final CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-bgWhite">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-linear-to-r from-orange-500 to-red-500">
        
            <div className="grid md:grid-row-2 items-center lg:grid-cols-2">
        
              {/* Left Content */}
              <div className="p-7 lg:p-10 text-white md:order-2 text-center lg:order-1 lg:text-left">
        
                <h2 className="text-4xl md:text-5xl font-bold mb-4 md:leading-15">
  Ready To Experience Great Food?
</h2>
        
                <p className="max-w-2xl mx-auto text-lg text-orange-100 mb-4">
  Discover our delicious menu, fresh ingredients,
  and unforgettable dining experience.
</p>
        
                <div className="flex flex-col sm:flex-row  md: justify-center lg:justify-start gap-4 mt-8 md:mb-4">
        
                  <Link
    to="/menu"
    className="
      bg-white
      border border-white
      text-orange-500
      px-8
      py-3
      rounded-xl
      font-semibold
      hover:scale-105
      transition
    "
  >
    Explore Menu
  </Link>

  <Link
    to="/contact"
    className="
      border-2
      border-white
      px-8
      py-3
      rounded-xl
      font-semibold
      hover:bg-white
      hover:text-orange-500
      transition
    "
  >
    Contact Us
  </Link>
        
                </div>
              </div>
        
              {/* Right Image */}
              <div className="hidden md:block md:order-1 lg:order-2">
                <img
                  src={aboutCTA}
                  alt="Food"
                  className="md:h-60 lg:h-full w-full object-cover"
                />
              </div>
        
            </div>
        
          </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default About;

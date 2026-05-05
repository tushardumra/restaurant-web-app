import FeatureItems from "../components/FeatureItems"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import StatsSection from "../components/StatsSection"
import TestimonialCard from "../components/TestimonialCard"
import Testimonials from "../components/Testimonials"
import TestimonialSlider from "../components/TestimonialSlider"
import WhyChooseUs from "../components/WhyChooseUs"
import FoodCategories from '../sections/FoodCategories'
import TestimonialSection from "../sections/TestimonialSection"

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <FoodCategories/>
      <WhyChooseUs/>
      <StatsSection/>
      {/* <TestimonialCard/> */}
      <TestimonialSlider/>
      {/* <TestimonialSection/> */}
      <Footer/>
    </div>
  )
}

export default Home

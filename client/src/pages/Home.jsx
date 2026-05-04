import FeatureItems from "../components/FeatureItems"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import StatsSection from "../components/StatsSection"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs"
import FoodCategories from '../sections/FoodCategories'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <FoodCategories/>
      <WhyChooseUs/>
      <StatsSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home

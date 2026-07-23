import ctaImage from "../assets/imageforCTA.avif"

const CTASection = () => {
  return (
    // <section className="bg-linear-to-r from-orange-400 to-red-400 py-12 px-6">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-center mb-8">
    //       <div>
    //         <h2 className="text-3xl font-black mb-4 md:text-4xl">Don't wait, eat now</h2>
    //         <p className="mb-8">Grab a seat or call ahead. We're ready when you are.</p>
    //       </div>
    //       <div className="flex justify-center gap-4">
    //         <button className="border rounded-md bg-gray-950 text-white py-2 px-4">Order</button>
    //         <button className="border rounded-md py-2 px-3">Reserve</button>
    //       </div>
    //     </div>
    //     <div className=''>
    //       {/* <video className='rounded-md' src={ctaVideo}  autoPlay controls loop></video> */}
    //     </div>
    //   </div>
    // </section>

    <section className="py-20 px-6 bg-brand-bgWhite">
  <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-linear-to-r from-orange-500 to-red-500">

    <div className="grid md:grid-row-2 items-center lg:grid-cols-2">

      {/* Left Content */}
      <div className="p-7 lg:p-10 text-white md:order-2 text-center lg:order-1 lg:text-left">

        <p className="uppercase tracking-wider mb-2">
          Ready To Order?
        </p>

        <h2 className="text-3xl lg:text-4xl md:text-5xl font-black mb-6">
          Don’t Wait, Eat Fresh Today
        </h2>

        <p className="mb-8 text-white/90">
          Delicious meals delivered hot and fresh right to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row md: justify-center lg:justify-start gap-4 mt-8 md:mb-4">

          <button className="bg-white text-orange-500 px-5 py-4 md:px-8 md:py-4 rounded-xl font-semibold hover:scale-105 transition">
            Order Now
          </button>

          <button className="border-2 border-white px-6 py-4 md:px-9 md:py-4 rounded-xl hover:bg-white hover:text-orange-500 transition font-semibold">
            Reserve
          </button>

        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block md:order-1 lg:order-2">
        <img
          src={ctaImage}
          alt="Food"
          className="md:h-60 lg:h-full w-full object-cover"
        />
      </div>

    </div>

  </div>
    </section>
  )
}

export default CTASection

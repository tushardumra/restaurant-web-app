import ctaVideo from '../assets/videos/video-for-cta-tiny.mp4'

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

    <div className="grid md:grid-cols-2 items-center">

      {/* Left Content */}
      <div className="p-10 text-white">

        <p className="uppercase tracking-wider mb-3">
          Ready To Order?
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Don’t Wait, Eat Fresh Today 🍕
        </h2>

        <p className="mb-8 text-white/90">
          Delicious meals delivered hot and fresh right to your doorstep.
        </p>

        <div className="flex flex-wrap gap-4">

          <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Order Now
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-500 transition">
            Explore Menu
          </button>

        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1652862730506-9f7310faabbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBkZWxpdmVyeSUyMGJveHxlbnwwfDB8MHx8fDI%3D"
          alt="Food"
          className="h-full w-full object-cover"
        />
      </div>

    </div>

  </div>
</section>
  )
}

export default CTASection

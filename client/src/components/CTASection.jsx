import ctaVideo from '../assets/videos/video-for-cta-tiny.mp4'

const CTASection = () => {
  return (
    <section className="bg-brand-bgWhite py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div>
            <h2 className="text-3xl font-black mb-4 md:text-4xl">Don't wait, eat now</h2>
            <p className="mb-8">Grab a seat or call ahead. We're ready when you are.</p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="border rounded-md bg-gray-950 text-white py-2 px-4">Order</button>
            <button className="border rounded-md py-2 px-3">Reserve</button>
          </div>
        </div>
        <div className=''>
          {/* <video className='rounded-md' src={ctaVideo}  autoPlay controls loop></video> */}
        </div>
      </div>
    </section>
  )
}

export default CTASection

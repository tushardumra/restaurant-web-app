import { ChevronRight } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="bg-brand-bgWhite py-18 px-4 md:py-24 md:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-4 mb-2 md:py-8 md:flex md:justify-between md:gap-20">
          {/* upper box -- use flex */}
          <div className="md:w-[50%]">
            {/* upper left side */}
            <h2 className='mb-3 font-semibold'>Proven</h2>
            <p className='text-3xl font-black mb-6 md:text-4xl'>Numbers that speak <br/> for themselves</p>
          </div>
          <div className="md:w-[50%]">
            {/* upper right side */}
            <div className='mb-6'>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci maxime suscipit! Ab sit enim nihil ratione maiores quibusdam.</p>
            </div>
            <div className='flex items-center gap-5'>
              <a href="#" className="border px-6 py-2 rounded-xl">Visit</a>
              <div className='flex'>
                <a href="#">Learn </a><ChevronRight strokeWidth={1.75} />
              </div>
              
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 gap-4 p-4 md:py-8 md:grid-cols-3 md:grid-rows-1 lg:gap-8">
          {/* lower box use grid */}
          <div className='px-8 pb-8 pt-10 bg-orange-400/90 shadow-[8px_8px_4px_rgba(0,0,0,0.1)] rounded-2xl md:text-center'>
            <div className='text-5xl font-bold mb-6'>
              <span>15</span>
            </div>
            <div className=''>
              <p className='text-md font-semibold mb-1'>Years serving</p>
              <p className='text-sm'>Still going strong</p>
            </div>
          </div>

          <div className='px-8 pb-8 pt-10 bg-orange-400/90 shadow-[8px_8px_4px_rgba(0,0,0,0.1)] rounded-2xl md:text-center'>
            <div className='text-5xl font-bold mb-6'>
              <span>50K</span>
            </div>
            <div className=''>
              <p className='text-md font-semibold mb-1'>Meals served yearly</p>
              <p className='text-sm'>People know quality</p>
            </div>
          </div>

          <div className='px-8 pb-8 pt-10 bg-orange-400/90 shadow-[8px_8px_4px_rgba(0,0,0,0.1)] rounded-2xl md:text-center'>
            <div className='text-5xl font-bold mb-6'>
              <span>98%</span>
            </div>
            <div className=''>
              <p className='text-md font-semibold mb-1'>Come back again</p>
              <p className='text-sm'>That's loyalty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

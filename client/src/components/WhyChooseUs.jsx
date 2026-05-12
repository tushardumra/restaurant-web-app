import veggieBasket from "../assets/icons/vegetable-basket.png";
import dineTable from "../assets/icons/dinning-table.png";
import deliveryBoy from "../assets/icons/delivery-boy.png";

const WhyChooseUs = () => {
  return (
    // <section className=" bg-brand-bgWhite py-18  px-4 md:py-24 md:px-6">
    //   <div className="lg:flex lg:gap-18 w-full max-w-7xl mx-auto">
    //     <div className="flex lg:w-[50%] flex-col justify-center p-2 mb-6">
    //       <h2 className="mb-3 sm:mb-4 sm:text-xl font-semibold">Why Choose Us</h2>
    //       <p className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-black">
    //         We make best food in the Town
    //       </p>
    //       <p className="">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
    //         aliquid eos blanditiis enim, ea quidem temporibus provident maxime
    //         eius accusamus fugiat cum quod voluptatem qui modi aliquam numquam
    //         tempore quam!
    //       </p>
    //     </div>

    //     <div className="px-4 py-4 flex flex-col gap-8 md:flex-row md:gap-12 md:py-10 lg:w-[50%] lg:gap-12 lg:flex-col lg:py-4">
    //       <div className="flex gap-6 md:flex-col lg:flex-row">
    //         <img
    //           src={veggieBasket}
    //           alt=""
    //           className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
    //         />
    //         <div className="flex flex-col gap-2 sm:gap-3">
    //           <h4 className="sm:text-lg font-semibold">
    //             Use fresh ingredients
    //           </h4>
    //           <p className="text-sm">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
    //             earum.
    //           </p>
    //         </div>
    //       </div>

    //       <div className=" flex gap-6 md:flex-col lg:flex-row">
    //         <img
    //           src={dineTable}
    //           alt=""
    //           className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
    //         />

    //         <div className="flex flex-col gap-3">
    //           <h4 className="sm:text-lg font-semibold">Fully AC Dinning</h4>
    //           <p className="text-sm">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
    //             earum.
    //           </p>
    //         </div>
    //       </div>

    //       <div className=" flex gap-6 md:flex-col lg:flex-row">
    //         <img
    //           src={deliveryBoy}
    //           alt=""
    //           className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
    //         />

    //         <div className="flex flex-col gap-3">
    //           <h4 className="sm:text-lg font-semibold">Timely Delivery</h4>
    //           <p className="text-sm">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
    //             earum.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
  id="about"
  className="py-20 px-6  bg-brand-bgWhite"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Left Image */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1691958215011-6800e0a058b0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Restaurant"
        className="rounded-2xl shadow-xl w-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <p className="text-orange-500 font-semibold mb-2">
        WHY CHOOSE US
      </p>

      <h2 className="text-4xl font-bold mb-6">
        We Serve The Best Dining Experience
      </h2>

      <div className="space-y-6">

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">
            Fresh Ingredients
          </h3>

          <p className="text-gray-600">
            Carefully selected fresh ingredients for every meal.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">
            Expert Chefs
          </h3>

          <p className="text-gray-600">
            Experienced chefs creating unforgettable flavors.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">
            Fast Delivery
          </h3>

          <p className="text-gray-600">
            Hot and fresh meals delivered quickly.
          </p>
        </div>

      </div>
    </div>

  </div>
  </div>
  
</section>
  );
};

export default WhyChooseUs;

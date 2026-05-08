import veggieBasket from "../assets/icons/vegetable-basket.png";
import dineTable from "../assets/icons/dinning-table.png";
import deliveryBoy from "../assets/icons/delivery-boy.png";

const WhyChooseUs = () => {
  return (
    <section className=" bg-brand-bgWhite py-18  px-4 md:py-24 md:px-6">
      <div className="lg:flex lg:gap-18 w-full max-w-7xl mx-auto">
        <div className="flex lg:w-[50%] flex-col justify-center p-2 mb-6">
          <h2 className="mb-3 sm:mb-4 sm:text-xl font-semibold">Why Choose Us</h2>
          <p className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-black">
            We make best food in the Town
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
            aliquid eos blanditiis enim, ea quidem temporibus provident maxime
            eius accusamus fugiat cum quod voluptatem qui modi aliquam numquam
            tempore quam!
          </p>
        </div>

        <div className="px-4 py-4 flex flex-col gap-8 md:flex-row md:gap-12 md:py-10 lg:w-[50%] lg:gap-12 lg:flex-col lg:py-4">
          <div className="flex gap-6 md:flex-col lg:flex-row">
            <img
              src={veggieBasket}
              alt=""
              className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
            />
            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="sm:text-lg font-semibold">
                Use fresh ingredients
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                earum.
              </p>
            </div>
          </div>

          <div className=" flex gap-6 md:flex-col lg:flex-row">
            <img
              src={dineTable}
              alt=""
              className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
            />

            <div className="flex flex-col gap-3">
              <h4 className="sm:text-lg font-semibold">Fully AC Dinning</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                earum.
              </p>
            </div>
          </div>

          <div className=" flex gap-6 md:flex-col lg:flex-row">
            <img
              src={deliveryBoy}
              alt=""
              className="h-11 w-11 border-2 rounded-md p-1 shrink-0"
            />

            <div className="flex flex-col gap-3">
              <h4 className="sm:text-lg font-semibold">Timely Delivery</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                earum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

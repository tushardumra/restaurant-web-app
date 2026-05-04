const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 min-w-full sm:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%]">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">"{testimonial.review}"</p>
    </div>
  );
};

export default TestimonialCard;
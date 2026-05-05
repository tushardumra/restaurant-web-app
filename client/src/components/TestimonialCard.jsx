const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border bg-gray-200 p-8">
      <div className="mb-4">
        <p>{testimonial.review}</p>
      </div>
      <div className="flex justify-start gap-4">
        <div className="border rounded-full h-12 w-12">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
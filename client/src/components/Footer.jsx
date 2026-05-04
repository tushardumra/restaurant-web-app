function Footer() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-t-lg">
      <div className="grid grid-cols-2 gap-x-20 gap-y-10 mb-5 md:grid-cols-3 max-w-7xl mx-auto text-center">

        <div>
          <h3 className="font-bold">📍 Address</h3>
          <p>123 Street, Your City</p>
        </div>

        <div className="">
          <h3 className="font-bold">🕒 Hours</h3>
          <p>10 AM - 11 PM</p>
        </div>

        <div>
          <h3 className="font-bold">📞 Contact</h3>
          <p>+91 9876543210</p>
        </div>

      </div>
      <hr></hr>
      <div className="flex justify-center pt-5">
        <p className="text-sm">Developing by Tushar</p>
      </div>
    </div>
  );
}

export default Footer;
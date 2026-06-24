import mapPin from '../assets/icons/map-pin.svg'
import { SiFacebook, SiInstagram, SiYoutube ,SiWhatsapp } from "react-icons/si";
import { PiMapPinFill } from "react-icons/pi";
import { MapPin, Phone,} from 'lucide-react';
import { LuMapPin } from "react-icons/lu";

import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6 py-12 flex justify-between flex-wrap md:px-8">
        <div className="mb-8 md:w-60 md:mb-1 lg:w-70">
          <h3 className="text-2xl font-black mb-6">Logo</h3>
          <div className="">
            <div className="flex mb-2">
              {/* <MapPin size={36} /> */}
              {/* <PiMapPinFill className=""/> */}
              {/* <MapPin className='me-1 md:text-2xl'/> */}

              {/* <img src={mapPin} alt="map-pin" className='h-7 w-7 text-white'/> */}
              {/* <LuMapPin size={25}/> */}
              <MapPinIcon className='h-8 mr-1.5 md:w-14'/>
              <address>Building name, near mark, main road, city, dist. state, 123456</address>
            </div>
            <div className="flex mb-4 md:mb-10 lg:mb-14">
              {/* <Phone size={18} className='me-1'/> */}
              
              <PhoneIcon className='h-5 mr-1.5 lg:h-5.5 lg:ps-1'/>
              <a href="tel:+91 123 456 789">+91 123 456 789</a>
            </div>
            <div>
              <h4 className='mb-2'>Connect with us</h4>
              <div className="flex gap-4 *:text-xl">
                <SiFacebook/>
                <SiInstagram/>
                <SiYoutube/>
                <SiWhatsapp/>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pt-13">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <div>
            <ul className="*:text-sm *:mb-1 *:tracking-wide">
              <li className='hover:text-gray-400 cursor-pointer transition-all duration-300'>Home</li>
              <li className='hover:text-gray-400 cursor-pointer transition-all duration-300'>About</li>
              <li className='hover:text-gray-400 cursor-pointer transition-all duration-300'>Menu</li>
              <li className='hover:text-gray-400 cursor-pointer transition-all duration-300'>Contact</li>
            </ul>
          </div>
        </div>

        <div className="md:pt-13">
          <h3 className="font-bold mb-2">Timmings</h3>
          <p className="mb-2 text-sm md:mb-4">10 am to 11 pm</p>
          <span className="bg-gray-200 text-green-700 py-1 px-2 rounded-md">Open</span>
        </div>

      </div>
      {/* <hr className=""/> */}
      <div className="max-w-7xl mx-auto px-6 py-3 text-[12px] text-gray-300 flex justify-between border-t md:px-8 md:text-sm">
        <p>&copy;2026 Foodie All rights reserved.</p>
        <p>Developing by Tushar</p>
      </div>
    </footer>
  )
}

export default Footer

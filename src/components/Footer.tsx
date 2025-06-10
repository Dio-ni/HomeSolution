
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

import LogoWhite from '../assets/icons/logo_white.svg';

import Whatsapp from "../assets/icons/whatsapp.svg";
import PhoneLogo from "../assets/icons/phone.svg";
import { GrInstagram } from "react-icons/gr";
type FooterProps = {
  setActiveCategory: (category: string) => void;
};

const Footer  = ({ setActiveCategory }: FooterProps) => {
const handleClick = (category) => {
  localStorage.setItem("activeCategory", category); // Store category
  window.location.href = "/#catalog"; // Navigate to home with hash
};

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1 md:max-w-[200px]  border-b border-[#999999] md:border-0 pb-8">
            {/* <h3 className="text-2xl font-bold mb-4">Saloni</h3> */}
            <img src={LogoWhite} alt="" />
            <p className="text-gray-400 mt-4 md:mt-10">
            Премиальная мебель.  <br />
            Уникальное решение для вашего дома
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleClick("sofas")} className="text-gray-400 hover:text-white">Диваны</button></li>
              <li><button onClick={() => handleClick("beds")} className="text-gray-400 hover:text-white">Кровати</button></li>
              <li><button onClick={() => handleClick("cabinets")} className="text-gray-400 hover:text-white">Тумбы</button></li>
              <li><button onClick={() => handleClick("sideboard")} className="text-gray-400 hover:text-white">Серванты</button></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Шоурум</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a target="_blank"
              rel="noopener noreferrer"
              href="https://go.2gis.com/woD7c">Достык 3</a></li>
              <li className="text-gray-400">
                <a target="_blank"
              rel="noopener noreferrer"
              href="https://go.2gis.com/TSiIW"
              >Коргалжын шоссе 13Д</a></li>
              <li className="text-gray-400">
                <a target="_blank"
              rel="noopener noreferrer"
               href="tel:+77007420000">+7 (700) 742-00-00</a></li>
            </ul>
          </div>
          
          {/* Social and subscribe */}
          <div>
            <h4 className="text-lg font-medium mb-4">Связаться с нами</h4>
            <div className="flex space-x-4 mb-4">
              <a target="_blank"
              rel="noopener noreferrer"
              href="tel:+77007420000" className="hover:text-gray-300">
                <img src={PhoneLogo}  className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src={Whatsapp} className="w-5 h-5" />
                
              </a>
              
              <a href="https://www.instagram.com/homesolution.kz/#"
              target="_blank"
              rel="noopener noreferrer" className="hover:text-gray-300">
                <GrInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Home Solution. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

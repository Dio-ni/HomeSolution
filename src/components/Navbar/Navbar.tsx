import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LogoWhite from '../../assets/icons/logo_white.svg';
import ShortLogo from '../../assets/icons/logoshortwhite.svg';
import Telegram from "../../assets/icons/telegram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import { FaWhatsapp } from "react-icons/fa";
import PhoneLogo from "../../assets/icons/phone.svg";

import { GrInstagram } from "react-icons/gr";
import { useState } from "react";

import { HiMenu } from "react-icons/hi"; // burger icon
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50  px-6 py-3 text-white">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
        
        {/* --- Desktop Logo --- */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold">
            <img src={LogoWhite} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* --- Mobile Logo --- */}
        <div className="md:hidden flex items-center">
          <Link to="/">
            <img src={ShortLogo} alt="Short Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* --- Centered Nav Buttons (Desktop Only) --- */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-button underline underline-offset-8" : "nav-button"}>Каталог</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-button underline underline-offset-8" : "nav-button"}>Шоурум</NavLink>

        </div>

        {/* --- Right Side --- */}
        <div className="flex items-center gap-4 text-sm">
          {/* Desktop phone and social icons */}
          <div className="hidden md:flex items-center gap-[20px]">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/homesolution.kz/#">
              <GrInstagram className="w-[16px] h-[16px]" />
              </a>
            <a 
              href="tel:+77007420000" 
              className="font-normal flex items-center gap-[4px]"
              target="_blank"
              rel="noopener noreferrer">
              <img className="w-[20px] h-[20px]" src={PhoneLogo} alt="" /> 
              <span>+7 (700) 742-00-00</span>
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=77007420000&text="
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
            >
              <img className="w-5 h-5" src={Whatsapp} alt="WhatsApp" />
              <span className="text-sm font-medium">Получить консультацию</span>
            </a>
          </div>

          {/* Mobile social icons and burger */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="https://www.instagram.com/homesolution.kz/#"
              target="_blank"
              rel="noopener noreferrer">
                <GrInstagram  className="w-5 h-5"/>
            </a>
            {/* <a href="#"><FaWhatsapp className="w-5 h-5"/></a> */}
            <a 
              href="https://web.whatsapp.com/send?phone=77007420000&text="
              target="_blank"
              rel="noopener noreferrer">
                <img className="w-5 h-5" src={Whatsapp} alt="WhatsApp" />
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              <HiMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop feedback button */}
          
        </div>
      </div>
      {isMobileMenuOpen && (
      <div className="md:hidden absolute top-full right-0 w-[65vw] bg-black text-white px-6 py-4 z-40">
        <ul className="space-y-4 text-left">
          <li className="no-padding-list"><NavLink to="/" className={({ isActive }) => isActive ? "nav-button underline  underline-offset-8" : "nav-button"}>Каталог</NavLink></li>
          <li className="no-padding-list"><NavLink to="/about" className={({ isActive }) => isActive ? "nav-button underline underline-offset-8" : "nav-button"}>Шоурум</NavLink></li>

          
        </ul>
        <ul className="space-y-2 pt-10  text-left text-xs text-[#7a7a7a]">
          <li>Адрес:</li>
          <li><a 
              target="_blank"
              rel="noopener noreferrer"
               href="tel:+77007420000">+7 (700) 742-00-00</a></li>
          <li><a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://go.2gis.com/TSiIW">Коргалжын шоссе 13Д</a></li>
          <li><a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://go.2gis.com/woD7c">Достык 3 - МЦ Кормеs</a></li>

          <li className="text-center whatsapp-btn-mobile flex ">
            <a
               
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.whatsapp.com/send?phone=77007420000&text=" 
              className="  bg-blue-600 text-white text-sm rounded-full py-2 px-4 " 
              onClick={() => setIsMobileMenuOpen(false)}>
              Получить консультацию
            </a>
          </li>
        </ul>
      </div>
)}

    </nav>
  );
};

export default Navbar;

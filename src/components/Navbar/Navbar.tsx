import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LogoWhite from '../../assets/icons/logo_white.svg';
import ShortLogo from '../../assets/icons/logoshortwhite.svg';
import Telegram from "../../assets/icons/telegram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import { FaWhatsapp } from "react-icons/fa";
import PhoneLogo from "../../assets/icons/phone.svg";
import Burger from "../../assets/icons/burger.svg"
import { GrInstagram } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";

import { HiMenu } from "react-icons/hi"; // burger icon
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalNavbar, setIsModalNavbar] = useState(false);
const categories = [
    {
      name: "Диваны",
      category:"sofas",
      subcategories: ["ORION", "BON BON LINEA", "PLUS POUFY", "ASTON VILLA", "FOX"]
    },
    {
      name: "Кровати",
      category:"beds",
      subcategories: [ "ROMA", "POUFY","HERITAGE","BOSTON","TORONTO"]
    },
    {
      name: "Тумбочки",
      category:"cabinets",
      subcategories: ["OPAL", "TULSA BLACK", "BOSTON","LAZIO","APEL"]
    },
    {
      name: "Серванты",
      category:"sideboard",
      subcategories: ["MADLEN", "VINCI", "BARCELONA","NORA","HIRO ECRU"]
    }
  ];
  const pathSegments = location.pathname.split("/");
  const currentCategory = pathSegments[2] || null; // like "sofas"
  const currentTitle = pathSegments[3] || null; 
const mobileMenuRef = useRef(null);
const burgerButtonRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
  mobileMenuRef.current &&
  !mobileMenuRef.current.contains(event.target) &&
  (!burgerButtonRef.current || !burgerButtonRef.current.contains(event.target))
) {
  setIsMobileMenuOpen(false);
}

  };

  if (isMobileMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isMobileMenuOpen]);


  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50  px-6 py-3  text-white">
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
              href="https://wa.me/77007420000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
            >
                <FaWhatsapp className="w-6 h-6"  />
              {/* <img className="w-5 h-5" src={Whatsapp} alt="WhatsApp" /> */}
              <span className="text-sm font-medium">Получить консультацию</span>
            </a>
            <button  onClick={() => setIsModalNavbar(!isModalNavbar)} className="text-white">
              <img src={Burger} className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile social icons and burger */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="https://wa.me/77007420000"
              target="_blank"
              rel="noopener noreferrer">
                <GrInstagram  className="w-5 h-5"/>
            </a>
            {/* <a href="#"><FaWhatsapp className="w-5 h-5"/></a> */}
            <a 
              href="https://wa.me/77007420000"
              target="_blank"
              rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6"  />
                {/* <img className="w-5 h-5" src={Whatsapp} alt="WhatsApp" /> */}
            </a>
            <button ref={burgerButtonRef} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              <HiMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop feedback button */}
          
        </div>
      </div>
      {isModalNavbar && (
      <div className="mt-3 pt-3 pb-5 hidden md:block">
        <div className="max-w-7xl mx-auto flex font-medium text-[#808080] justify-between items-center">
          {categories.map((category, index) => {
        const isActiveCategory = category.category === currentCategory;

        return (
          <div key={index} className="group relative">
            <p className={`py-1 ${isActiveCategory ? "text-white" : "text-[#808080]"} hover:text-white`}>
              {category.name}
            </p>

            {category.subcategories.filter(sub => sub !== "").length > 0 && (
              <div className="group-hover:block bg-black min-w-[150px] z-50">
                <ul>
                  {category.subcategories.map((subcat, subIndex) => {
                    const normalizedSubcat = subcat.toLowerCase().replace(/\s+/g, '-');
                    const isActiveSubcat = normalizedSubcat === currentTitle;

                    return (
                      subcat && (
                        <li key={subIndex} className="py-1">
                          <Link 
                            to={`/product/${category.category}/${normalizedSubcat}`} 
                            className={`${isActiveSubcat ? "text-white " : "text-[#808080]"} hover:text-white`}
                            onClick={() => setIsModalNavbar(!isModalNavbar)}
                          >
                            {subcat}
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}

        </div>
      </div>)}
      {isMobileMenuOpen && (
      <div 
      ref={mobileMenuRef}
       className="md:hidden absolute top-full right-0 w-[65vw] bg-black text-white px-6 py-4 z-40">
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
              href="https://wa.me/77007420000" className="  bg-blue-600 text-white text-sm rounded-full py-2 px-4 " 
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

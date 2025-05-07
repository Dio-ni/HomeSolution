
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">Saloni</Link>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="nav-button">Главная</Link>
            <Link to="/catalog" className="nav-button">Каталог</Link>
            <Link to="/about" className="nav-button">О нас</Link>
            <Link to="/address" className="nav-button">Адрес</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Phone Number */}
          <span className="hidden md:block">+7 (123) 456-7890</span>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="nav-social-icon">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="nav-social-icon">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="nav-social-icon">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          
          {/* Feedback Button */}
          <Button className="bg-black text-white hover:bg-gray-800">
            Обратная связь
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

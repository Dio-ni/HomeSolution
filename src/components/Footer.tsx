
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = ()=> {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Saloni</h3>
            <p className="text-gray-400">
              Премиальная мебель для вашего интерьера. Качество, стиль и комфорт.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Главная</a></li>
              <li><a href="#catalog" className="text-gray-400 hover:text-white">Каталог</a></li>
              <li><a href="#advantages" className="text-gray-400 hover:text-white">О нас</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Контакты</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">ул. Примерная 123, Алматы</li>
              <li className="text-gray-400">+7 (123) 456-7890</li>
              <li className="text-gray-400">info@saloni.kz</li>
            </ul>
          </div>
          
          {/* Social and subscribe */}
          <div>
            <h4 className="text-lg font-medium mb-4">Следите за нами</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Saloni. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

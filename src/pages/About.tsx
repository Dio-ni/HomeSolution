
import  { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";
import AboutImg from '../assets/about.png';
import AddressAbout from '../assets/aboutPageAddress.png';
import AddressContact from '@/components/AddressContact/AddressContact';
import { useLocation } from "react-router-dom";
import FixedSocialContacts from '@/components/FixedSocialContacts';

const About = () => {
   const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("sofas");
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <FixedSocialContacts/>
      
      <main className="pt-14">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img 
            src={AboutImg}
            alt="Интерьер Saloni" 
            className="w-full h-full object-cover"
          />
        </section>
        
        {/* О нас в цифрах */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">О нас в цифрах</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold">2023</p>
                <p className="text-gray-600 mt-2">Дата создания</p>
              </div>
              
              <div className="text-center">
                <p className="text-5xl font-bold">180+</p>
                <p className="text-gray-600 mt-2">С нами сотрудничают дизайнера</p>
              </div>
              
              <div className="text-center">
                <p className="text-5xl font-bold">4000 м2</p>
                <p className="text-gray-600 mt-2">Площадь склада</p>
              </div>
              
             
            </div>
          </div>
        </section>
        
        <hr className="border-t border-gray-200 max-w-7xl  mx-16" />
        
        <main className="my-20 mx-10">
        {/* Map Section */}
        <section className="">
          
          <div className="mb-12">
              <p className="text-lg max-w-2xl font-medium mb-14">
              Местоположение : 
              </p>
              
              <div className="flex flex-row gap-[200px]">
                <div className='flex flex-col gap-4'>
                  <p>Казахстан г. Астана - Коргалжын шоссе 13Д</p>
                  <p>+7 (700) 742-00-00</p>
                  <p>saloni.kazakhstan@gmail.com</p>
                  <p>homesolution.kz</p>
                  
                </div>
                
                  <h3 className="text-lg font-base">ТД Корме</h3>
                  
                
                
              </div>
            </div></section>
        <img 
            src={AddressAbout}
            alt="Интерьер Saloni" 
            className="w-full h-full object-cover"
          />
      </main>
        
        {/* Обратная связь */}
        <ContactSection/>
      </main>
      <Footer setActiveCategory={setActiveCategory}/>
    </div>
  );
};

export default About;

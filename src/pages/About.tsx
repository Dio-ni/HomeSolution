
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
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
        
        {/* Наша команда */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">Наша команда</h2>
            
            <div className="mb-12">
              <p className="text-lg max-w-2xl">
              Руководство компании : 
              </p>
              <hr className="border-t border-gray-200 my-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-base">Уразбеков Даурен - генеральный директор</h3>
                  
                </div>
                
                <div>
                  <h3 className="text-lg font-base">Уразбекова Молдир - директор</h3>
                  
                </div>
                
                <div>
                  <h3 className="text-lg font-base">Тукунов Бахтияр - управляющий директор</h3>
                  
                </div>
              </div>
            </div>
            
            {/* Carousel Photos */}
            <div className="overflow-hidden relative">
              <div className="flex animate-marquee whitespace-nowrap">
                <img src="/placeholder.svg" alt="Team member 1" className="h-64 w-80 object-cover mr-4" />
                <img src="/placeholder.svg" alt="Team member 2" className="h-64 w-80 object-cover mr-4" />
                <img src="/placeholder.svg" alt="Team member 3" className="h-64 w-80 object-cover mr-4" />
                <img src="/placeholder.svg" alt="Team member 4" className="h-64 w-80 object-cover mr-4" />
                <img src="/placeholder.svg" alt="Team member 5" className="h-64 w-80 object-cover mr-4" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Корпоративная культура */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наша корпоративная культура</h2>
            
            <div className="grid grid-cols-12 gap-4 mb-8">
              <div className="col-span-4">
                <img src="/placeholder.svg" alt="Culture 1" className="w-full h-64 object-cover rounded" />
              </div>
              <div className="col-span-8">
                <img src="/placeholder.svg" alt="Culture 2" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 mb-8">
              <div className="col-span-8">
                <img src="/placeholder.svg" alt="Culture 3" className="w-full h-64 object-cover rounded" />
              </div>
              <div className="col-span-4">
                <img src="/placeholder.svg" alt="Culture 4" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 mb-8">
              <div className="col-span-4">
                <img src="/placeholder.svg" alt="Culture 5" className="w-full h-64 object-cover rounded" />
              </div>
              <div className="col-span-8">
                <img src="/placeholder.svg" alt="Culture 6" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Обратная связь */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

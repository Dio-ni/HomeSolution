
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MapPin } from "lucide-react";

const Address = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Map Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840" 
            alt="Расположение салона" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Наш адрес</h1>
              <p className="text-xl">г. Алматы, ул. Примерная, 123</p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-black mt-1" />
                    <div>
                      <h3 className="font-medium">Адрес</h3>
                      <p className="text-gray-600">г. Алматы, ул. Примерная, 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Телефон</h3>
                      <p className="text-gray-600">+7 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@saloni.kz</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Режим работы</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Понедельник - Пятница</h3>
                    <p className="text-gray-600">10:00 - 20:00</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Суббота</h3>
                    <p className="text-gray-600">11:00 - 18:00</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Воскресенье</h3>
                    <p className="text-gray-600">11:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Directions */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как до нас добраться</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-medium mb-2">На автомобиле</h3>
                <p className="text-gray-600">
                  Удобная парковка доступна перед зданием. Заезд с улицы Примерной.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-medium mb-2">На общественном транспорте</h3>
                <p className="text-gray-600">
                  Автобусы №123, №456 останавливаются в 100 метрах от салона.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-medium mb-2">Пешком</h3>
                <p className="text-gray-600">
                  5 минут ходьбы от станции метро "Центральная".
                </p>
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

export default Address;

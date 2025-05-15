
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";
import { MapPin } from "lucide-react";

const Address = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="my-20 mx-10">
        {/* Map Section */}
        <section className="relative h-[100vh] overflow-hidden">
          
          <div className="mb-12">
              <p className="text-lg max-w-2xl">
              Местоположение : 
              </p>
              <hr className="border-t border-gray-200 my-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-base">Казахстан г. Астана - Коргалжын шоссе 13Д
                    <br />
                    +7 (700) 742-00-00
                    <br />
                    saloni.kazakhstan@gmail.com
                    <br />
                    homesolution.kz
                  </h3>
                  
                </div>
                
                <div>
                  <h3 className="text-lg font-base">ТД Корме</h3>
                  
                </div>
                
                <div>
                  <h3 className="text-lg font-base">какой то текст</h3>
                  
                </div>
              </div>
            </div></section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Address;

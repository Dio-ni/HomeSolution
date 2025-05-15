
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CatalogSection from "@/components/CatalogSection/CatalogSection";

const CatalogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="py-12 px-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Каталог</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Исследуйте нашу коллекцию премиальной мебели для вашего интерьера
          </p>
        </div>
        
        <CatalogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CatalogPage;

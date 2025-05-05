
import { useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src="/video-placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Main Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4" style={{ top: '70%' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Мебель премиум класса
        </h1>
        <p className="text-lg md:text-xl max-w-2xl animate-fade-in">
          Создайте интерьер вашей мечты с нашей коллекцией элегантной мебели
        </p>
      </div>
      
      {/* Scrolling News Banner */}
      <div className="absolute bottom-6 left-0 right-0 bg-white/10 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="whitespace-nowrap animate-marquee inline-flex">
            <span className="text-white text-lg px-4">СКИДКА 20% НА ВСЕ КРЕСЛА ДО КОНЦА МЕСЯЦА</span>
            <span className="text-white text-lg px-4">БЕСПЛАТНАЯ ДОСТАВКА ПРИ ЗАКАЗЕ ОТ 100,000 ₽</span>
            <span className="text-white text-lg px-4">НОВАЯ КОЛЛЕКЦИЯ ДИВАНОВ УЖЕ В ПРОДАЖЕ</span>
            <span className="text-white text-lg px-4">СКИДКА 20% НА ВСЕ КРЕСЛА ДО КОНЦА МЕСЯЦА</span>
            <span className="text-white text-lg px-4">БЕСПЛАТНАЯ ДОСТАВКА ПРИ ЗАКАЗЕ ОТ 100,000 ₽</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

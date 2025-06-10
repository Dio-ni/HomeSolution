import { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";

import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import FixedSocialContacts from '@/components/FixedSocialContacts';



const Services = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("sofas");
  const infoItems = [
    { text: "Бесплатная доставка по городу Астана", icon: "eva:car-outline" },
    { text: "Гарантийное обслуживание", icon: "jam:tools" },
    { text: "3-D визуализация", icon: "mingcute:cube-3d-line" },
    { text: "Сборка и установка мебели", icon: "mdi:table-furniture" },
    { text: "Услуги примерки", icon: "f7:square-stack-3d-up" },
  ];
  const infoItems2 = [
    { text: "Хранение (под заказ)", icon: "lsicon:work-order-appointment-filled" },
    { text: "Резерв и бронь", icon: "fluent-mdl2:reservation-orders" },
    { text: "Презенты от компании", icon: "mdi:present-outline" },
    { text: "Акции", icon: "ri:road-map-line" },
    { text: "Доставка по Казахстану", icon: "hugeicons:hot-price" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <FixedSocialContacts/>
      <main className="pt-14">

        {/* Hero Section */}
        <section className="relative h-[15vh] md:h-[50vh] overflow-hidden">
          <img src='/assets/services_main.png' alt="Интерьер Saloni" className="w-full h-full object-cover" />
        </section>

        {/* Заголовок и 5 линий текста с иконками */}

        
        <section className="py-8 md:py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto ">
            <h2 className="text-base md:text-4xl font-semibold mb-6 md:mb-16 text-center" >Быстрая и аккуратная доставка мебели до вашего дома</h2>
            
            <div className='flex justify-around  flex-col md:flex-row'>
              <div className="flex flex-col gap-3 md:gap-4 items-start ">
                {infoItems.map(({ text, icon }, i) => (
                  <p key={i} className="flex items-start text-sm md:text-2xl">
                    <Icon icon={icon} className="md:hidden mr-3 mt-1 w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                    {text}
                  </p>
                ))}
              </div>

              <section className="flex w-[105%] transform -translate-x-[10px] my-6 md:hidden justify-between gap-2 flex-wrap ">
                {['r1','r3','r4'].map((n) => (
                  <div key={n} className="aspect-[1.125] w-[30%] aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={`/assets/services/${n}.png`} alt={`Gallery ${n}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </section>
              <div className="flex flex-col gap-3 md:gap-4 items-start ">
                {infoItems2.map(({ text, icon }, i) => (
                  <p key={i} className="flex items-start text-sm md:text-2xl">
                    <Icon icon={icon} className="md:hidden mr-3 mt-1 w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                    {text}
                  </p>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        

        {/* Галерея: 4 фото - левая часть 70%, правая 30% */}
        <section className="hidden md:flex h-screen w-full gap-6 px-6 py-16">
          {/* Left */}
          <div className="w-[70%] h-full flex flex-col gap-6">
            <div className="flex gap-6 w-full" style={{ height: 'calc(50% - 12px)' }}>
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img src="/assets/services/r1.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img src="/assets/services/r2.png" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex gap-6 w-full" style={{ height: 'calc(50% - 12px)' }}>
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img src="/assets/services/r3.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img src="/assets/services/r4.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-[30%] h-full rounded-lg overflow-hidden">
            <img src="/assets/services/r5.png" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className='px-6 flex flex-col gap-6 md:hidden pb-12'>
            <p>Мы открыты к партнерству и готовы предложить вам качественную мебель, стильные решения и индивидуальный подход.</p>
            <div>
              <p className='mb-2 font-medium'>Наш адрес</p>
              <p>г. Астана, шоссе Коргалжын 13Д</p>
              <p>Достык 3 - МЦ Корме</p>
            </div>
            <div>
              <p className='mb-2 font-medium'>Контакты</p>
              <p>+7 (700) 742-00-00</p>
            </div>
        </section>

        {/* Обратная связь */}
        <ContactSection />
      </main>

      <Footer setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default Services;

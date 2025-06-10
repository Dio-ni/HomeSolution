import { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";

import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import FixedSocialContacts from '@/components/FixedSocialContacts';



const Designers = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("sofas");
  const infoItems = [
    { text: "Гибкий подбор обивки, цвета, фактуры" },
    { text: "Учитываем индивидуальные цветовые решения"},
    { text: "Предоставляем 3D-модели и визуализации" },
    { text: "Предлагаем услугу примерки и хранения на складе" },
    { text: "Гарантия на продукцию"},
  ];
  const infoItems2 = [
    { text: "Вы отправляете проект — мы готовим КП" },
    { text: "Предоставляем 3D-модели для визуализации" },
    { text: "Возможность зарезервировать и забронировать позиции" },
    { text: "Приятные комплименты к заказам" },
    { text: "Постоянные акции каждый месяц" },
  ];
    const combinedItems = [...infoItems, ...infoItems2];
const features = [
  {
    icon: "material-symbols:key-outline-rounded",
    title: 'Комплектация "под ключ"',
    description: 'Мы сопровождаем проект от А до Я: у нас вы найдёте всё необходимое для комплектации дома, квартиры, офиса, ресторана, кафе, салона красоты, СПА, студии, стоматологии и других пространств.',
  },
  {
    icon: "solar:sofa-linear",
    title: 'Широкий ассортимент',
    description: 'Большой выбор мебели, аксессуаров и отделки — можем укомплектовать объект полностью. Работаем как с готовыми позициями, так и под заказ.',
  },
  {
    icon: "lucide:warehouse",
    title: 'Большой склад — быстрое решение',
    description: 'Благодаря большому складскому запасу, множество позиций доступны из наличия — на любом этапе ремонта. Также большинство моделей представлены в шоуруме: можно прийти, посмотреть, посидеть, потрогать.',
  },
  {
    icon: "eva:car-outline",
    title: 'Доставка и установка — бесплатно',
    description: 'Доставка и сборка полностью за счёт компании по городу Астана. Также доставляем в регионы (кроме западного региона) при крупном заказе.',
  },
];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <FixedSocialContacts/>

        <section className="relative h-[15vh] md:h-[50vh] overflow-hidden">
          <img src='/assets/designers_main.png' alt="Интерьер Saloni" className="w-full h-full object-cover" />
        </section>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 d:mb-12">Дизайнеры интерьера</h2>
            
            <div className="grid place-items-center h-auto  grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-2 md:py-10">
              <div className="text-center flex h-full flex-col justify-between ">
                <p className="text-2xl md:text-6xl font-bold">2</p>
                <p className="text-base  md:text-xl md:text-gray-600 mt-2">Филлиала <br /> в городе Астана</p>
              </div>
              
              <div className="text-center w-[50%] md:w-full flex flex-col justify-around">
                <p className="text-4xl md:text-6xl font-bold">220+</p>
                <p className="text-base md:text-xl md:text-gray-600 mt-2 ">С нами сотрудничают дизайнеры - интерьера</p>
              </div>
              
              <div className="text-center flex flex-col justify-around">
                <p className="text-4xl md:text-6xl font-bold">3 - D</p>
                <p className="text-base  md:text-xl md:text-gray-600 mt-2">визуализация для дизайнеров</p>
              </div>
              
             
            </div>
          </div>
        </section>
        
          <hr className='w-[80%] flex justify-center m-auto' />
        {/* Заголовок и 5 линий текста с иконками */}
        <section className='py-16 px-10 md:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1920px] mx-auto justify-items-center'>

        {features.map((feature, index) => (
            <div key={index} className='bg-[white] border border-[#F5F5F7]   md:bg-[#F5F5F7] rounded-[20px] p-6 relative pt-14'>
            <div className="absolute -top-7 -left-6 w-[70px] h-[70px] bg-white border border-[#F5F5F7] rounded-full flex items-center justify-center">
                <Icon icon={feature.icon} className="w-[32px] h-[32px] text-[#949494]" />
            </div>
            <div>
                <h1 className='text-lg md:text-2xl font-bold mb-6'>{feature.title}</h1>
                <p className='text-base md:text-xl leading-1.05'>{feature.description}</p>
            </div>
            </div>
        ))}
        </section>

        
        <section className="py-8 md:py-16 px-6 bg-white">
          <div className="hidden md:block max-w-5xl mx-auto  w-full gap-4">
            <h2 className="text-base md:text-4xl font-semibold mb-6 md:mb-16 text-center" >Преимущества для дизайнеров</h2>
            
            <div className='flex justify-between gap-16 flex-col md:flex-row '>
              <div className="flex flex-col gap-3 md:gap-4 items-start w-1/2">
                {infoItems.map(({ text }, i) => (
                  <p key={i} className="flex items-start text-sm md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-3 md:gap-4 items-start w-1/2">
                {infoItems2.map(({ text }, i) => (
                  <p key={i} className="flex items-start text-sm md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            
          </div>

           <ul className="block md:hidden  space-y-2 px-2">
            {combinedItems.map((item, index) => (
                <li
                key={index}
                className="relative pl-4 text-base text-gray-800 before:content-['•'] before:absolute before:left-0 before:top-0.5"
                >
                {item.text}
                </li>
            ))}
            </ul>

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

      <Footer setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default Designers;

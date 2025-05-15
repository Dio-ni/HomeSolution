import { Check } from "lucide-react";
import "./AdvantagesSection.css";
import LogoIcon from "../../assets/icons/logo-icon.svg"; // Make sure to add your image
import { FaCheck } from "react-icons/fa6";
import Card1 from "../../assets/gallerySection/card1.png";
import Card2 from "../../assets/gallerySection/card2.png";
import Card3 from "../../assets/gallerySection/card3.png";

import Whatsapp from "../../assets/icons/whatsapp.svg"


const advantages = [
  "Доставка во все города Казахстана",
  "Бесплатная сборка и установка",
  "Возможность хранения, по выгодным ценам",
  "3D визуализация с примеркой мебели в вашей квартире"
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-10 md:py-14 bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Заголовок (всегда отображается по центру) */}
        <h2 className="advantages-title text-center mb-8 font-semibold">
          НАШИ ПРЕИМУЩЕСТВА
        </h2>

        <div className="w-[130%] md:w-full  flex flex-row items-center  md:items-center gap-4 gap-8 md:gap-20 relative left-[-30%] md:left-[-15%]">
          {/* Левая сторона – изображение */}
          <div className="w-full basis-[50%] md:basis-[40%] h-[300px] md:h-auto">
            <img 
              src={LogoIcon} 
              alt="Interior design" 
              className="w-full h-full object-contain max-h-[600px] md:max-h-[500px]"
            />
          </div>

          {/* Правая сторона – текст */}
          <div className="w-full  basis-[70%] md:basis-[70%] ">
            <div className="space-y-6 md:space-y-10">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-item flex items-start gap-3 md:gap-6">
                  <span className="flex-shrink-0 rounded-full p-1 mt-1">
                    <FaCheck className="h-4 md:h-8 md:w-8 text-white" />
                  </span>
                  <span className="text-base md:text-4xl">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Описание снизу */}
        <p className="leading-snug font-light text-xl md:text-4xl mt-16  md:mt-20 max-w-[90%] m-auto text-center">
          <span className="font-medium">3D</span> - визуализация в мебельном шоуруме — мощный инструмент, который помогает клиентам принять осознанное решение при выборе мебели.
        </p>
      </div>
      <div className="overflow-hidden bg-black py-10 md:py-16 px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Обертка с overflow hidden, чтобы скрывать боковые карточки */}
        <div className="relative h-[30vw] flex justify-center items-center absolute top-1/2 left-[-50%] transform">
          <div className="flex gap-[8px] md:gap-[30px] items-center ">
            {[Card1, Card2, Card3].map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg h-[30vw]"
              >
                <img
                  src={card}
                  alt={`Furniture showcase ${i + 1}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-[70px]">
            <a className="max-w-[50vw] 
            w-full justify-center items-center flex 
            gap-[7px] md:gap-[16px] items-center 
            bg-[#26D367] rounded-[10px]
             md:rounded-[30px] text-white  
             md:py-[15px] py-[10px] 
             md:px-[70px] transition-colors">
              <img src={Whatsapp} className="h-[14px] md:h-[26px]" />
              <span className="text-[12px] md:text-[24px]">Связаться с нами</span>
            </a>
        </div>

      </div>
    </div>
    </section>

  );
};

export default AdvantagesSection;
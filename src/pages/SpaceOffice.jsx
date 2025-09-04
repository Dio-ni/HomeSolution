import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";
import { ArrowLeft } from "lucide-react"; 
import Whatsapp from "../assets/icons/whatsapp.svg";
import FixedSocialContacts from "@/components/FixedSocialContacts";
import BackImgHero from "@/assets/spaceoffice/hero.png";
import "./style.css";
import BackIcon from "@/assets/icons/BackLeftIcon.svg";
import ruk1 from "@/assets/spaceoffice/ruk1.png";
import st1 from "@/assets/spaceoffice/st1.png";
import sov1 from "@/assets/spaceoffice/sov1.png";
import rab1 from "@/assets/spaceoffice/rab1.png";
import dr1 from "@/assets/spaceoffice/dr1.png";
import { useNavigate } from "react-router-dom";



const SpaceOffice = () => {
  const [activeCategory, setActiveCategory] = useState("sofas");
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <FixedSocialContacts />

      <main className="pt-6 md:pt-14 ">
        {/* Hero Section */}
        <section className="relative  w-full section_spaceoffice ">
          {/* Background image */}
          <img
            src={BackImgHero}
            alt="SpaceOffice Hero"
            className="pt-16  h-full w-full mx-auto object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0  md:bg-black/50 bg-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col ">
            {/* Back button */}
            

            
           <div className="relative text-white md:hidden bg-black pt-16 md:pt-0 pb-4 px-6">
            
              {/* Кнопка назад слева */}
              <button
                onClick={() => navigate("/")}
                className="absolute top-8 left-8"
              >
                <img className='pt-1' src={BackIcon} />
              </button>

              {/* Заголовок по центру */}
              <h1 className="spaceoffice text-2xl md:text-4xl font-bold tracking-wide uppercase text-center">
                SPACE OFFICE
              </h1>
            </div>



            {/* Centered text + button */}
            <div className="flex flex-col  w-full md:w-[300px] centered_text flex-1 items-center justify-center text-center text-white">
              <button
                onClick={() =>  navigate("/")}
                className="backIconDesc"
              >
                <img className='pt-1' src={BackIcon} />
              </button>



              <h1 className="spaceoffice text-4xl md:text-6xl font-bold tracking-wide uppercase hidden md:flex">
                SPACE OFFICE
              </h1>
              <p className="mt-4 w-[80%] md:w-[50%] text-[22px] md:text-2xl leading-relaxed">
                Премиальная офисная мебель, соответствующая мировым стандартам
                дизайна и качества.
              </p>

              {/* WhatsApp Button */}
              <div className="flex items-center justify-center mt-8 md:mt-[70px] ">
                <a
                  className="
                  max-w-[80vw] md:max-w-[400px] 
                  w-full justify-center items-center flex 
                    gap-[7px] md:gap-[10px] bg-[#26D367] 
                    rounded-[10px] md:rounded-[30px] 
                    text-white 
                    md:py-[10px] py-[10px]  
                    md:px-[40px] px-[40px]
                    p-4 
                    transition-colors"
                  href="https://wa.me/77007420000?text=Здравствуйте!%0A%0AМожете%20отправить%20каталог%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Whatsapp}
                    className="h-[14px] md:h-[26px]"
                    alt="WhatsApp"
                  />
                  <span className="text-[16px] md:text-[24px]">
                    Связаться с нами
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full photosblock">
          {/* Background image */}
          <img
            src={ruk1} // заменишь на своё изображение
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay (чтобы текст был читаемее) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 uppercase">
              Кабинет  руководителя
            </h2>
            
          </div>
        </section>


{/* st1 */}
        <section className="relative w-full photosblock">
          {/* Background image */}
          <img
            src={st1} // заменишь на своё изображение
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay (чтобы текст был читаемее) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 uppercase">
              Стулья
            </h2>
            
          </div>
        </section>
{/* sov1 */}
        <section className="relative w-full photosblock">
          {/* Background image */}
          <img
            src={sov1} // заменишь на своё изображение
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay (чтобы текст был читаемее) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 uppercase">
              Стол для совещаний
            </h2>
            
          </div>
        </section>
{/* rab1 */}
        <section className="relative w-full photosblock">
          {/* Background image */}
          <img
            src={rab1} // заменишь на своё изображение
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay (чтобы текст был читаемее) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 uppercase">
              Кабинет  руководителя
            </h2>
            
          </div>
        </section>
{/* dr1 */}
        <section className="relative w-full photosblock">
          {/* Background image */}
          <img
            src={dr1} // заменишь на своё изображение
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay (чтобы текст был читаемее) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 uppercase ">
              Другое
            </h2>
            
          </div>
        </section>
        <ContactSection />
      </main>


      <Footer setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default SpaceOffice;

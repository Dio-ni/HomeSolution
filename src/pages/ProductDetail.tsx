
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";
import { allProducts } from '@/data/allProducts';
import { Plus, Podcast } from "lucide-react";
import LongPointer from "../assets/icons/longpointer.svg"
import { IoCloseOutline } from "react-icons/io5";
import PdfIcon from "../assets/icons/pdficon.png"
import { cn } from '@/lib/utils';
import "./ProductPage.css"
import { Wave } from "react-animated-text";

const exampleStyle = {
  display: "inline-block",
  padding: "2em 1em 1em 1em",
  width: "80%",
  fontSize: "2rem",
  textAlign: "center"
};

const categories = [
  { id: "sofas", name: "Диваны" },
  { id: "beds", name: "Кровати" },
  { id: "cabinets", name: "Тумбы" },
  { id: "sideboard", name: "Серванты" },
  { id: "tables", name: "Столы" },
];

const ProductDetail = () => {
  const [activeCategory, setActiveCategory] = useState("sofas");

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = allProducts.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Продукт не найден</p>
      </div>
    );
  }
  
  const [selectedCard, setSelectedCard] = useState<{ key: string, index: number } | null>(null);

  const handleCardClick = (key: string, index: number = 0) => {
    setSelectedCard({ key, index });
  };
  
useEffect(() => {
  if (selectedCard !== null) {
    document.body.style.overflow = 'hidden'; // disable scroll
  } else {
    document.body.style.overflow = 'auto'; // enable scroll
  }

  // cleanup when component unmounts
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [selectedCard]);

  
  const closeModal = () => {
    setSelectedCard(null);
  };

  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-14 md:pt-14">
        {/* Category Navigation */}
          <div className="flex md:hidden justify-center mx-2 mt-4 mb-4">
            <div className="flex w-full flex-wrap justify-between md:justify-between gap-0 md:gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={cn(
                    "catalog-type px-2 py-2 text-sm md:text-2xl font-medium rounded transition-colors",
                    activeCategory === category.id ? "active" : "nonactive"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
        {/* Hero Section */}
        {/* <section className="relative h-50vh md:h-[100vh] overflow-hidden">
          <img 
            src={`/assets/products/${product.prefix+product.backimg}`}

            alt={product.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-[12vw] md:text-[96px] font-bold mb-4 font-custom tracking-[15px] md:tracking-[30px]">{product.title}</h1>
            </div>
          </div>
        </section>
         */}
         <section className="relative h-50vh md:h-[100vh] overflow-hidden  text-black">
            {/* Background image */}
            

            {/* Animated text */}
            <div className="relative top-[50px] inset-0 text-[#2c2c2c] flex items-center justify-center">
              <h1 className="text-[12vw] md:text-[20vw] font-medium font-custom tracking-[15px] md:tracking-[5vw] text-reveal">
                {product.title}
              </h1>
            </div>
            <img 
              src={`/assets/products/${product.prefix + product.image}`}
              alt={product.title} 
              className="w-[90vw] mx-auto absolute top-[30%] translate-x-[5%]  object-cover "
            />
          </section>
        


        {/* Images of Product */}
        
        {product.imgs ?  (<section className='overflow-hidden w-full h-[20vh] md:h-[100vh] flex flex-row gap-2 md:gap-4 p-2 md:p-0 md:mt-16'>
          <div className='h-full prod-imgs-left w-[30%]'>
              <img className="h-full" src={`/assets/products/${product.prefix+product.imgs.img1}`}/>
          </div>
          <div className='h-full prod-imgs-right flex  gap-4 flex-col'>
              <div className='h-[40%] right-top flex  gap-4 md:gap-10 flex-row'>
              <img className='w-[40%]' src={`/assets/products/${product.prefix+product.imgs.img2}`}/>
              <img className='w-[60%]' src={`/assets/products/${product.prefix+product.imgs.img3}`}/>
              </div>
              <div className='h-[60%] right-bottom flex gap-10 flex-row '>
                  <img className='w-[60%]' src={`/assets/products/${product.prefix+product.imgs.img4}`}/>
                  <img className='w-[40%]' src={`/assets/products/${product.prefix+product.imgs.img5}`}/>
              </div>
          </div>

        </section>) : null}
        
        
        {/* Description */}
        {product.description ? 
        (<section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="flex 
            text-[20px] md:text-5xl font-regular mb-4 md:mb-16">
              Характеристики 
              <img className='pt-2 ml-2 md:ml-4 w-[70px] md:w-[120px]' src={LongPointer} /> </h2>
            
            <div className="prose max-w-none ">
              <p className="text-[16px] md:text-3xl font-regular ">
                {product.description || "Модульная система диванов, разработанная для обеспечения максимального комфорта и гибкости в организации жилого пространства. Благодаря модульному дизайну, этот диван можно адаптировать под различные размеры и конфигурации помещений."} 
              </p>

            </div>
          </div>
        </section>) : null}
        
        
        {/* Design Cards */}

        {product.cards.cardType1 ?
        (<section className="overflow-x-auto px-6 ">
          <div className="max-w-7xl mx-auto">

          <div className="flex md:grid md:grid-cols-4 gap-10 md:gap-8  md:overflow-x-visible">

          {Object.entries(product.cards.cardType1).map(([key, value]) => {
              const cardsArray = Array.isArray(value) ? value : [value];
              
              return cardsArray.map((card, index) => (
                <div
                  key={`${key}-${index}`}
                  onClick={() => handleCardClick(key, index)}
                  className="min-w-[280px] md:min-w-0 md:w-auto flex-shrink-0 md:flex-shrink 
                            transition-shadow rounded-[20px] p-6 bg-[#F2F2F2] cursor-pointer 
                            border border-transparent border-[1px] hover:border-[#1378FB] hover:bg-white"
                >
                  <h3 className="text-sm font-medium mb-4 text-center">{card.type || "PDF"}</h3>
                  <div className="flex justify-center mb-4">
                    {card.img ? (
                      <img src={`/assets/products/${product.prefix + card.img}`} className="w-60 h-60 object-cover" />
                    ) : card.previewImg ? (
                      <img src={card.previewImg} className="w-60 h-60 object-cover" />
                    ) : (
                      <div className="w-40 h-40 flex items-center justify-center bg-gray-200 text-gray-600">
                        Нет изображения
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-center">{card.size}</p>
                </div>
              ));
            })}

            </div>

            {selectedCard && (() => {
            const { key, index } = selectedCard;
            const cardsArray = Array.isArray(product.cards.cardType1[key]) ? product.cards.cardType1[key] : [product.cards.cardType1[key]];
            const card = cardsArray[index];
            return (
              <div
                className=" fixed text-center inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={closeModal}
              >
                <button
                    className="absolute top-[20px] right-[20px] mt-6 bg-[#848484] text-white px-4 py-2 rounded"
                    onClick={closeModal}
                  >
                    <IoCloseOutline className='text-[30px]' />
                  </button>
                <div
                  className="bg-white rounded-lg p-8 max-w-[90vw] md:max-w-3xl fade-in-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-[20px] font-bold mb-6">{card.type || "PDF карточка"}</h3>
                  {card.img ? (
                    <img src={`/assets/products/${product.prefix + card.img}`} className="w-full md:w-[25vw] mb-6 h-60 object-cover" />
                  ) : card.previewImg ? (
                    <img src={card.previewImg} className="w-full md:w-[25vw] mb-6 " />
                  ) : (
                    <div className="w-40 h-40 flex items-center justify-center bg-gray-200 text-gray-600">
                      Нет изображения
                    </div>
                  )}
                  <p className="text-[14px] font-semibold">{card.size}</p>

                  
                </div>
              </div>
            );
          })()}

          </div>
        </section>) : null}

        
        {/* Colors */}
        {product.cards.cardType2 ?
        (<section className="pt-16 px-6 ">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-4 md:grid-cols-7 gap-6">
            
              {Object.entries(product.cards.cardType2).map(([key, value]) => {
              const cardsArray = Array.isArray(value) ? value : [value];
              
              return cardsArray.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="" 
                  >
                    <img src={`/assets/products/${card.img}`} className="w-[145px] aspect-square rounded" />
                    
                  </div>
                  <div className="w-full mt-2 flex items-center justify-between">
                    <span className='text-[14px] md:text-[20px]'>{card.type}</span>
                    <Plus className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                  </div>
                </div>
              ));
            })}
            </div>
          </div>
        </section>) : null}


        {product.cards.cardType3 ? 
        (<section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="flex 
            text-[20px] md:text-5xl font-regular mb-4 md:mb-16">
              Наши Каталоги 
              <img className='pt-2 ml-2 md:ml-4 w-[70px] md:w-[120px]' src={LongPointer} /> </h2>
            
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 py-10 px-6">
            
            {Object.entries(product.cards.cardType3).map(([key, value]) => {
            const cardsArray = Array.isArray(value) ? value : [value];
            
            return cardsArray.map((card, index) => (
              <div key={index} className="flex w-[70%] flex-col-reverse md:flex-col  items-center gap-2 md:gap-4">
                
                <div className=" mt-2 text-[14px] md:text-[20px] text-center md:text-left">
                  {card.title}

                </div>
                <a 
                  href={card.pdfUrl}
                >
                  <img src={PdfIcon} className="w-[145px] aspect-square rounded" />
                  
                </a>
              </div>
            ));
          })}
          </div>
          </div>
        </section>) : null}
        
        <ContactSection backgroundImageUrl={`/assets/products/${product.prefix+product.image}`}/>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

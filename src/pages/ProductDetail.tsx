
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { products } from "@/components/CatalogSection";
import { Plus } from "lucide-react";

// Sample product characteristics
const characteristics = [
  { 
    id: 1, 
    name: "Материал", 
    value: "Высококачественный текстиль" 
  },
  { 
    id: 2, 
    name: "Длина", 
    value: "240 см" 
  },
  { 
    id: 3, 
    name: "Высота", 
    value: "95 см" 
  },
  { 
    id: 4, 
    name: "Глубина", 
    value: "100 см" 
  },
];

// Sample colors
const colors = [
  { id: 1, name: "Черный", value: "#000000" },
  { id: 2, name: "Серый", value: "#808080" },
  { id: 3, name: "Бежевый", value: "#F5F5DC" },
  { id: 4, name: "Терракотовый", value: "#E2725B" },
];

// Sample cards
const designCards = [
  {
    id: 1,
    name: "Модульная система",
    image: "/placeholder.svg",
    description: "Возможность трансформировать диван в соответствии с потребностями вашего пространства"
  },
  {
    id: 2,
    name: "Высококачественные материалы",
    image: "/placeholder.svg",
    description: "Использование только премиальных материалов для обеспечения долговечности и комфорта"
  },
  {
    id: 3,
    name: "Эргономичный дизайн",
    image: "/placeholder.svg",
    description: "Каждая деталь продумана для вашего максимального комфорта при отдыхе"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Продукт не найден</p>
      </div>
    );
  }
  
  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
  };
  
  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            </div>
          </div>
        </section>
        
        {/* Characteristics */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Характеристики</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {characteristics.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Description */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Описание</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg">
                {product.description || "Модульная система диванов, разработанная для обеспечения максимального комфорта и гибкости в организации жилого пространства. Благодаря модульному дизайну, этот диван можно адаптировать под различные размеры и конфигурации помещений."} 
              </p>
              <p className="text-lg mt-4">
                Каждый элемент дивана спроектирован с учетом эргономических принципов, обеспечивая идеальную поддержку для тела и максимальный комфорт во время отдыха.
              </p>
              <p className="text-lg mt-4">
                Обивка изготовлена из высококачественных материалов, устойчивых к износу и легких в уходе, что делает этот диван не только стильным, но и практичным решением для современных интерьеров.
              </p>
            </div>
          </div>
        </section>
        
        {/* Design Cards */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Особенности</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designCards.map(card => (
                <div 
                  key={card.id} 
                  onClick={() => handleCardClick(card.id)}
                  className="border border-black rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-medium mb-4 text-center">{card.name}</h3>
                  <div className="flex justify-center mb-4">
                    <img src={card.image} alt={card.name} className="w-40 h-40 object-cover" />
                  </div>
                  <p className="text-gray-600 text-center">{card.description}</p>
                </div>
              ))}
            </div>
            
            {selectedCard && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                <div className="bg-white rounded-lg p-8 max-w-2xl" onClick={e => e.stopPropagation()}>
                  {(() => {
                    const card = designCards.find(c => c.id === selectedCard);
                    return card ? (
                      <>
                        <h3 className="text-2xl font-bold mb-4">{card.name}</h3>
                        <img src={card.image} alt={card.name} className="w-full h-auto mb-4 rounded" />
                        <p className="text-gray-600">{card.description}</p>
                        <button 
                          className="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                          onClick={closeModal}
                        >
                          Закрыть
                        </button>
                      </>
                    ) : null;
                  })()}
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Colors */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Доступные цвета</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map(color => (
                <div key={color.id} className="flex flex-col items-center">
                  <div 
                    className="w-24 h-24 rounded" 
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="mt-2 flex items-center">
                    <span>{color.name}</span>
                    <Plus className="ml-2 w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section with modified background */}
        <section className="py-16 px-6 bg-black text-white relative">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Консультации</h2>
                <p className="text-lg mb-6">
                  Мебель, созданная специально для вас! Заполните форму, и мы свяжемся с вами, чтобы обсудить все детали.
                </p>
                <p className="text-lg">
                  Наши специалисты помогут вам подобрать лучшее решение, ответят на все вопросы и оформят заказ.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Имя" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded text-white placeholder-white/70"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded text-white placeholder-white/70"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Введите сообщение..." 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded text-white placeholder-white/70 h-32"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

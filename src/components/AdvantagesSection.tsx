
import { Check } from "lucide-react";

const advantages = [
  "Доставка во все города Казахстана",
  "Экспертная сборка установка",
  "Возможность оформить покупки в рассрочку",
  "Эксклюзивные модели только в наших магазинах"
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side image */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Interior design" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side content */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center md:text-left">
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          
          {/* Advantages list */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
                <span className="flex-shrink-0 bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-black" />
                </span>
                <span className="text-lg">{advantage}</span>
              </div>
            ))}
          </div>
          
          {/* Bottom text */}
          <p className="text-sm text-gray-300 text-center md:text-left max-w-lg">
            ЭТО только начало преимуществ работы с нами — к нам возвращаются клиенты за новыми покупками,
            потому что мы заботимся о каждой детали процесса и предлагаем только качественную мебель от
            лучших производителей.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

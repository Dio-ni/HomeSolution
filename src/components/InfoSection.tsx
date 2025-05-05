
const InfoSection = () => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Store location" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Right side - Information with dividing lines */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Не шоппинг, а опыт</h3>
            <p className="text-gray-300">
              Погрузитесь в эстетику и комфорт в нашем шоуруме
            </p>
          </div>
          
          <div className="py-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Продажа мебели</h3>
            <p className="text-gray-300">
              От классического до современного дизайна на любой вкус
            </p>
          </div>
          
          <div className="py-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Качественное исполнение</h3>
            <p className="text-gray-300">
              Работаем только с проверенными производителями мебели
            </p>
          </div>
          
          <div className="pt-4">
            <h3 className="text-2xl font-bold mb-2">Консультация экспертов</h3>
            <p className="text-gray-300">
              Наши специалисты помогут с выбором идеальной мебели для вашего интерьера
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;


import InfoImg from "../assets/infoSection.png"
const InfoSection = () => {
  return (
    <section className="  pb-16 md:px-6 bg-black text-white">
      <div className="w-[100%] 
      relative 
      left-[-20px] 
      md:left-[-100px] 
      max-w-7xl mx-auto flex flex-row 
      gap-10 md:gap-16 items-center">
        {/* Left side - Image */}
        <div className=" relative rounded-lg overflow-hidden">
          <img 
            src={InfoImg}
            alt="Store location" 
            className="w-[60vw] md:w-[50vw]  object-cover" 
          />
        </div>
        
        {/* Right side - Information with dividing lines */}
        <div className="space-y-2 md:ml-10 md:space-y-6 w-[30vw] md:w-[40vw]">
          <div className="mb-2 md:pb-4 border-b border-gray-200">
            <h3 className="text-[14px] md:text-3xl font-regular mb-0 md:mb-2">На рынке более 3х лет</h3>
          </div>
          
          <div className="py-2 md:py-4 border-b border-gray-200">
            <h3 className="text-[14px] md:text-3xl font-regular mb-0 md:mb-2">Порядка 5 000 кв. торговая площадь</h3>
            
          </div>
          
          <div className="py-2 md:py-4 border-b border-gray-200">
            <h3 className="text-[14px] md:text-3xl font-regular mb-0 md:mb-2">Более 1 000 моделей по наличию</h3>
      
          </div>
          
          <div className="pt-2 md:pt-4">
            <h3 className="text-[14px] md:text-3xl font-regular mb-0 md:mb-2">Как жилые так и коммерческие помещения</h3>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

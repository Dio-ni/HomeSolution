
import InfoImg from "../assets/infoSection.png"
import { Icon } from "@iconify/react";


const InfoSection = () => {
  return (
    <section className=" pb-16 bg-black text-white">
      <div className=" 
      w-full mx-auto  
      gap-10 md:gap-16 ">
        {/* Left side - Image */}
        <div className="w-full  overflow-hidden">
          <img 
            src={InfoImg}
            alt="Store location" 
            className=" md:w-full   object-fill" 
          />
        </div>
        
        {/* Right side - Information with dividing lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 md:gap-y-14 px-6 md:px-16 py-16">
          <div className="flex items-start  pb-2 md:pb-4">
            <span className="text-3xl md:text-[45px] mr-4"><Icon icon="mingcute:time-line" /></span>
            <h3 className="text-[20px] md:text-3xl font-regular">На рынке более 3х лет</h3>
          </div>

          
          <div className="flex items-start  pb-2 md:pb-4">
            <span className="text-3xl md:text-[45px] mr-4"><Icon icon="uil:down-arrow" /></span>
            <h3 className="text-[20px] md:text-3xl font-regular">Более 1 000 моделей по наличию</h3>
          </div>
          <div className="flex items-start  pb-2 md:pb-4">
            <span className="text-3xl md:text-[45px] mr-4"><Icon icon="tabler:dimensions" /></span>
            <h3 className="text-[20px] md:text-3xl font-regular">Порядка 5 000 кв. торговая площадь</h3>
          </div>

          <div className="flex items-start">
            <span className="text-3xl md:text-[45px] mr-4"><Icon icon="cuida:building-outline" /></span>
            <h3 className="text-[20px] md:text-3xl font-regular">Как жилые так и коммерческие помещения</h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;

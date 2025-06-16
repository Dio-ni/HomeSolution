
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ContactImg from "../../assets/contactadress.png";

import { useLocation } from "react-router-dom"; // 👈 Add this

import Whatsapp from "../../assets/icons/whatsapp.svg"

interface ContactProps {
  backgroundImageUrl?: string;
}
const AddressContact = ({ backgroundImageUrl }: ContactProps)  => {
   const location = useLocation(); // 👈 Add this
  const isProductPage = location.pathname.includes("/product/"); // 👈 Add this
  

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
    const getImageWidthClass = () => {
      if (location.pathname.includes("sofas")) return "w-[80vw]";
      if (location.pathname.includes("beds")) return "w-[65vw]";
      if (location.pathname.includes("cabinets")) return "w-[50vw]";
      if (location.pathname.includes("sideboard")) return "w-[40vw]";
      return "w-full"; // по умолчанию
    };

    const imageWidthClass = getImageWidthClass();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData);
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="bg-black text-white relative pt-[40px] md:pt-10 pb-[40px] md:pb-16  px-14  text-black">
      {/* Background image with overlay */}
      
      
      <div className=" text-left relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 ">
        {/* Left side - Text content */}
        <div className="x">
           
          <p className="text-[14px] md:text-[30px] font-medium mb-6">
            Местоположение:
          </p>
          <p className="mt-[10px] md:mt-[20px] text-[12px] md:text-[22px]">
            Казахстан г. Астана - Коргалжын шоссе 13Д 
            
          </p>
          <p className="mt-[10px] md:mt-[20px] text-[12px] md:text-[22px]">
           Достык 3 -  МЦ Корме            
          </p>
          
          <p className="mt-[10px] md:mt-[20px] text-[12px] md:text-[22px]">
            +7 (700) 742-00-00
            </p>
          <p className="mt-[10px] md:mt-[20px] text-[12px] md:text-[22px]">
            saloni.kazakhstan@gmail.com
            
            </p>
        </div>
        
        {/* Right side - Contact form */}
        <div className="w-full
        rounded-[15px] md:rounded-[40px] 
        py-[16px] md:py-[40px] 
         md:px-[30px] ">
          <img src={ContactImg} />
        </div>
        
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-[70px]">
          <a
            className="max-w-[60vw] md:max-w-[400px] 
            w-full justify-center items-center flex 
            gap-[7px] md:gap-[10px] 
            bg-[#26D367] rounded-[10px] md:rounded-[20px] 
            text-white md:py-[10px] py-[10px] md:px-[40px] transition-colors"
            href="https://wa.me/77007420000?text=Здравствуйте!%0A%0AМожете%20отправить%20каталог%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} className="h-[14px] md:h-[26px]" />
            <span className="text-[16px] md:text-[24px]">Связаться с нами</span>
          </a>
        </div>
    </section>
  );
};

export default AddressContact;

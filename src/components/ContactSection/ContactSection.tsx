
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import "./ContactSection.css"
import ContactImage from "../../assets/contactSection.png"
interface ContactProps {
  backgroundImageUrl?: string;
}
const ContactSection = ({ backgroundImageUrl }: ContactProps)  => {
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
    <section id="contact" className="relative pt-[30px] md:pt-[200px] pb-[60px] md:pb-[270px] px-6 bg-[#F5F5F7] text-black">
      {/* Background image with overlay */}
      <div className="absolute bottom-0 left-0">
        <img 
          src={backgroundImageUrl} 
          alt="Background" 
          className="w-full  object-cover"
        />
      </div>
      
      <div className=" text-center md:text-left relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
        {/* Left side - Text content */}
        <div className=" ">
          <p className="text-[14px] md:text-[30px] font-medium mb-6">Мебель, созданная специально для вас! 
  
            Заполните форму, и мы свяжемся с вами, 
            чтобы обсудить все детали</p>
          
          <p className="mt-[20px] md:mt-[40px] text-[12px] md:text-[22px]">
          Наши специалисты помогут вам подобрать лучшее решение, ответят на все вопросы и оформят заказ!
            </p>
          
        </div>
        
        {/* Right side - Contact form */}
        <div className="bg-white 
        rounded-[15px] md:rounded-[40px] 
        py-[16px] md:py-[40px] 
        px-[13px] md:px-[30px] ">
          <form onSubmit={handleSubmit} className="space-y-[9px] md:space-y-[20px]">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input 
                font-regular 
                text-[11px] md:text-[24px] 
                bg-[#F5F5F7] 
                border-0 
                rounded-[6px] md:rounded-[15px] 
                py-[15px] 
                px-[20px] md:px-[30px]"
                required
                placeholder="Имя"
              />
            </div>
            
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="contact-input 
                font-regular 
                text-[11px] md:text-[24px] 
                bg-[#F5F5F7] 
                border-0 
                rounded-[6px] md:rounded-[15px] 
                py-[15px] 
                px-[20px] md:px-[30px]"
                placeholder="Телефон"
                required
              />
            </div>
            
           
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Введите сообщения"
                className="contact-input 
                font-regular 
                text-[11px] md:text-[24px] 
                bg-[#F5F5F7] 
                border-0 
                rounded-[6px] md:rounded-[15px] 
                py-[15px] 
                px-[20px] md:px-[30px]"
                ></textarea>
            </div>
            
            <Button type="submit" className="
            w-full bg-[#1378FB] 
            text-white text-[13px] md:text-[28px]
            py-[13px] md:py-[35px] fonr-semibold
            rounded-[6px] md:rounded-[15px] 
            ">
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

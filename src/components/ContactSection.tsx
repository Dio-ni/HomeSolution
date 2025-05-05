
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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
    <section id="contact" className="relative py-16 px-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
          
          <p className="mb-8 text-lg">
            Остались вопросы или хотите получить консультацию? Заполните форму, и наши менеджеры свяжутся с вами в ближайшее время.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-black">📍</span>
              </div>
              <div>
                <h3 className="font-medium">Адрес</h3>
                <p className="text-gray-300">ул. Примерная 123, Алматы</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-black">📞</span>
              </div>
              <div>
                <h3 className="font-medium">Телефон</h3>
                <p className="text-gray-300">+7 (123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-black">✉️</span>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-300">info@saloni.kz</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Contact form */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-1">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-white mb-1">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-1">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="contact-input"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100">
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import CatalogSection from "@/components/CatalogSection/CatalogSection";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import { FaWhatsapp } from "react-icons/fa";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import FixedSocialContacts from "@/components/FixedSocialContacts";

const Index = () => {
  
  const [activeCategory, setActiveCategory] = useState("sofas");
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main>
        <FixedSocialContacts/>
        <HeroSection />
        <CatalogSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <AdvantagesSection />
        <InfoSection />
        <ContactSection />
        <div className="realtive">
          <a className="fixed bottom-10px right-10px" href="#"><FaWhatsapp className="w-5 h-5"/></a>
        </div>
      </main>
      
      <Footer  setActiveCategory={setActiveCategory}/>
    </div>
  );
};

export default Index;

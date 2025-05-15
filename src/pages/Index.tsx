
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import CatalogSection from "@/components/CatalogSection/CatalogSection";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import { FaWhatsapp } from "react-icons/fa";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <CatalogSection />
        <AdvantagesSection />
        <InfoSection />
        <ContactSection backgroundImageUrl="/assets/contactSection.png"/>
        <div className="realtive">
          <a className="fixed bottom-10px right-10px" href="#"><FaWhatsapp className="w-5 h-5"/></a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

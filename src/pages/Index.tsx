
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import GallerySection from "@/components/GallerySection";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <CatalogSection />
        <AdvantagesSection />
        <GallerySection />
        <InfoSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

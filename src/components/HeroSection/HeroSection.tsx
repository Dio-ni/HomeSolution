import { useEffect, useState } from "react";
import VideoBack from "../../assets/video/video-herosection.mp4";
import MobileVideo from "../../assets/video/mobile-video.mp4";
import "./HeroSection.css";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="heroSection">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src={isMobile ? MobileVideo : VideoBack} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Scrolling News Banner */}
      <div className="scrolling absolute inset-0 text-white text-center px-4">
        <div className="hidden md:flex items-center justify-center w-full gap-6 my-6">
          <hr className="flex-grow border-t border-white opacity-50" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white whitespace-nowrap">
            Получить 3D визуализацию
          </h1>
          <hr className="flex-grow border-t border-white opacity-50" />
        </div>

        <div className="marquee-container">
          <div className="marquee">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[12px] md:text-[24px] text-white font-semibold">
                -20% скидки на диваны
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

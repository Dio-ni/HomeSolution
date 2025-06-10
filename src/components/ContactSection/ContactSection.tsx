// src/components/ContactForm.tsx
import { useEffect, useRef } from 'react';
// import { useAmoForm } from './AmoForm';

export const ContactSection = () => {
  // const isLoaded = useAmoForm();
  // const wrapperRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!isLoaded || !wrapperRef.current) return;

  //   const moveIframe = () => {
  //     const iframe = document.querySelector<HTMLIFrameElement>(
  //       "iframe[id^='amoforms_iframe_']"
  //     );
      
  //     if (iframe && wrapperRef.current && !wrapperRef.current.contains(iframe)) {
  //       console.log('Moving AMO iframe to container');
  //       wrapperRef.current.appendChild(iframe);
  //     }
  //   };

  //   // Проверяем каждые 300мс
  //   const interval = setInterval(moveIframe, 300);
  //   moveIframe(); // Проверяем сразу

  //   return () => clearInterval(interval);
  // }, [isLoaded]);

  return (
    <div className="p-4 rounded-lg">
      <div 
        id="amo-form-container"
        className="min-h-[45rem] md:min-h-[120vh] relative"
      >
        {/* {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            Загрузка формы...
          </div>
        )} */}
      </div>
    </div>
  );
};
export default ContactSection;
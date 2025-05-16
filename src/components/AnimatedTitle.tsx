import React, { useEffect, useRef, useState } from "react";

const AnimatedTitle = ({ text }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // если нужно анимировать только один раз
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <h3
      ref={containerRef}
      className="absolute  inset-x-0 -top-7 md:-top-16 z-0 flex flex-wrap justify-center items-start text-center pointer-events-none"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`
            inline-block text-5xl md:text-[115px] font-light text-black
            transition-all duration-500 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h3>
  );
};

export default AnimatedTitle;

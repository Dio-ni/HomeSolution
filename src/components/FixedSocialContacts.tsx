import React from "react";
import { GrInstagram } from "react-icons/gr";
import Insta from "../assets/icons/fixedinsta.svg"
import Whatsapp from "../assets/icons/fixedwhatsapp.svg"
import { FaWhatsapp } from "react-icons/fa";

const FixedSocialContacts = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 12000,
      }}
    >
      <a
        href="https://www.instagram.com/homesolution.kz/#"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#E1306C", fontSize: "28px" }}
        aria-label="Instagram"
      >
        <img src={Insta} className="w-16 h-16"/>
      </a>

      <a
        href="https://wa.me/77007420000?text=Здравствуйте!%0A%0AМожете%20отправить%20каталог%3F"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#25D366", fontSize: "28px" }}
        aria-label="WhatsApp"
      >
        <img src={Whatsapp} className="w-16 h-16"/>
      </a>
    </div>
  );
};

export default FixedSocialContacts;

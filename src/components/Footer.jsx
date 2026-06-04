import React from "react";
import "./Footer.css";
import logo from "../assets/images/Logo.png";
import rasm1 from "../assets/images/1rasim.png";
import rasm2 from "../assets/images/2rasim.png";
import rasm3 from "../assets/images/3rasim.png";
import rasm4 from "../assets/images/4rasim.png";
import rasm5 from "../assets/images/5rasim.png";
import rasm6 from "../assets/images/6rasim.png";
import rasm7 from "../assets/images/7rasim.png";
import rasm8 from "../assets/images/8rasim.png";

const Footer = () => {
  const categories = [
    { image: rasm1 },
    { image: rasm2 },
    { image: rasm3 },
    { image: rasm4 },
    { image: rasm5 },
    { image: rasm6 },
    { image: rasm7 },
    { image: rasm8 },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Floristman logo" />
        </div>

        {/* KATEGORIYALAR */}
        <div className="footer-grid">
          {categories.map((cat, i) => (
            <button key={i} className="footer-card">
              <div className="footer-card-img">
                <img src={cat.image} alt="" />
              </div>
            </button>
          ))}
        </div>

        {/* KONTAKTLAR */}
        <div className="footer-contacts">
          <h3 className="footer-contacts-title">Контакты:</h3>

          <div className="footer-contact-links">
            <a href="tel:+749500000000" className="footer-contact-link">
              +749500000000
            </a>
            <a href="mailto:Електоронный_адрес@gmail.com" className="footer-contact-link">
              Електоронный_адрес@gmail.com
            </a>
          </div>

          {/* SOCIAL */}
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" title="Viber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.8 1.3 5.4 3.4 7.2V22l3.8-2.1c.9.2 1.8.3 2.8.3 5.5 0 10-4.1 10-9.1S17.5 2 12 2z"/>
                <path d="M14.5 13.5c-.3-.2-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.1-.4.2-.7 0a8 8 0 01-2.3-1.4 8.3 8.3 0 01-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4-.1-.5-.7-1.7-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1 2.2 3.3 5.3 4.6c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4z"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" title="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>

          <p className="footer-copyright">©2021. Все права защищены</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
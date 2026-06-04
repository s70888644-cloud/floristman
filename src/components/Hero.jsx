import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/header-gull.png";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Rasm import qilinib img tag bilan berildi */}
      <img src={heroImage} alt="" className="hero-bg-img" />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Подарите ощущение праздника</p>
          <h1 className="hero-title">
            Собираем букеты,
            <br />
            созданные для Вас
          </h1>
          <button
            className="hero-btn"
            onClick={() => navigate("/catalog")}
          >
            Выбрать букет
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
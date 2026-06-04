import React from "react";
import "./WhyUs.css";

import modes from "../assets/images/modes.png";
import cake from "../assets/images/modes1.png";
import flowers from "../assets/images/modes2.png";

const blocks = [
  {
    img: modes,
    text: "Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант.",
    textClass: "card-text-1",

    width: "563px",
    height: "625px",

    imgTop: "0px",
    imgLeft: "743px",

    cardWidth: "586px",
    cardHeight: "280px",
    cardTop: "220px",
    cardLeft: "369px",
    cardPadding: "30px",
  },
  {
    img: cake,
    text: "Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант",
    textClass: "card-text-2",

    width: "697px",
    height: "390px",

    imgTop: "-120px",
    imgLeft: "134px",

    cardWidth: "470px",
    cardHeight: "219px",
    cardTop: "130px",
    cardLeft: "471px",
    cardPadding: "22px",
  },
  {
    img: flowers,
    text: "Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант",
    textClass: "card-text-3",

    width: "497px",
    height: "551px",

    imgTop: "-157px",
    imgLeft: "810px",

    cardWidth: "567px",
    cardHeight: "279px",
    cardTop: "30px",
    cardLeft: "343px",
    cardPadding: "28px",
  },
];

// =============================================
// 📦 BLOCK
// =============================================
const Block = ({
  img,
  text,
  textClass,
  width,
  height,
  imgTop,
  imgLeft,
  cardWidth,
  cardHeight,
  cardTop,
  cardLeft,
  cardPadding,
}) => {
  return (
    <div
      style={{ position: "relative", height: height, marginBottom: "120px" }}
    >
      {/* 🖼 RASM */}
      <div
        style={{
          position: "absolute",
          top: imgTop,
          left: imgLeft,
          width: width,
          height: height,
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={img}
          alt="rasim "
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* 📦 CARD */}
      <div
        style={{
          position: "absolute",
          top: cardTop,
          left: cardLeft,
          width: cardWidth,
          height: cardHeight,
          background: "#fff",
          borderRadius: "20px",
          padding: cardPadding,
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* ✅ dinamik class — har card o'z stilini oladi */}
        <p className={textClass}>{text}</p>
      </div>
    </div>
  );
};

// =============================================
const WhyUs = () => {
  return (
    <section style={{ background: "#f5ede4" }} className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Почему именно мы?</h2>

        {blocks.map((block, i) => (
          <Block key={i} {...block} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

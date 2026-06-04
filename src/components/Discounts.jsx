import React, { useState, useEffect } from "react";
import gull1 from "../assets/images/chigerma1.jpg";
import gull2 from "../assets/images/chigerma2.avif";
import gull3 from "../assets/images/chigerma3.webp";
import gull4 from "../assets/images/chigerma4.webp";
import gull5 from "../assets/images/chigerma5.jpg";
import gull6 from "../assets/images/chigerma6.jpg";
import gull7 from "../assets/images/chigerma7.jpg";
import gull8 from "../assets/images/chigerma8.webp";

const ITEMS_PER_PAGE = 4;

const Discounts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [discounts] = useState([
    {
      id: 1,
      name: '№225 "Ромашки для Наташки"',
      image: gull1,
      oldPrice: "5 400",
      newPrice: "3 700",
      discount: "50%",
      tags: ["ХИТ ПРОДАЖ", "НОВИНКА", "БУКЕТ ДНЯ"],
    },
    {
      id: 2,
      name: '№226 "Красивый букет"',
      image: gull2,
      oldPrice: "6 000",
      newPrice: "4 200",
      discount: "30%",
      tags: ["ХИТ ПРОДАЖ", "НОВИНКА"],
    },
    {
      id: 3,
      name: '№227 "Нежные розы"',
      image: gull3,
      oldPrice: "7 200",
      newPrice: "5 000",
      discount: "25%",
      tags: ["НОВИНКА", "БУКЕТ ДНЯ"],
    },
    {
      id: 4,
      name: '№228 "Весенний микс"',
      image: gull4,
      oldPrice: "5 800",
      newPrice: "4 100",
      discount: "20%",
      tags: ["ХИТ ПРОДАЖ"],
    },
    {
      id: 5,
      name: '№229 "Розовый стиль"',
      image: gull5,
      oldPrice: "6 500",
      newPrice: "4 900",
      discount: "35%",
      tags: ["НОВИНКА"],
    },
    {
      id: 6,
      name: '№230 "Белые цветы"',
      image: gull6,
      oldPrice: "4 900",
      newPrice: "3 600",
      discount: "15%",
      tags: ["БУКЕТ ДНЯ"],
    },
    {
      id: 7,
      name: '№231 "Летний букет"',
      image: gull7,
      oldPrice: "5 700",
      newPrice: "4 300",
      discount: "40%",
      tags: ["ХИТ ПРОДАЖ", "НОВИНКА"],
    },
    {
      id: 8,
      name: '№232 "Яркие эмоции"',
      image: gull8,
      oldPrice: "6 800",
      newPrice: "5 200",
      discount: "30%",
      tags: ["БУКЕТ ДНЯ"],
    },
  ]);

  const totalPages = Math.ceil(discounts.length / ITEMS_PER_PAGE);

  const visibleItems = discounts.slice(
    currentIndex * ITEMS_PER_PAGE,
    currentIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const tagColor = (tag) => {
    if (tag === "ХИТ ПРОДАЖ") return "#db2777";
    if (tag === "НОВИНКА") return "#22c55e";
    return "#fb923c";
  };

  return (
    <section style={{ backgroundColor: "#FCEFE4", padding: "64px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "48px",
          }}
        >
          Скидки
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "192px",
                  backgroundColor: "#e5e7eb",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: tagColor(tag),
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: "700",
                        padding: "3px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "#fde047",
                    color: "#111",
                    fontWeight: "700",
                    fontSize: "13px",
                    padding: "4px 12px",
                    borderRadius: "50px",
                  }}
                >
                  Скидка {item.discount}
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: 0,
                  }}
                >
                  {item.name}
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#9ca3af",
                      textDecoration: "line-through",
                      margin: "0 0 2px",
                    }}
                  >
                    {item.oldPrice} грн
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#111",
                      margin: 0,
                    }}
                  >
                    {item.newPrice} грн
                  </p>
                </div>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#db2777",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    padding: "10px 0",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#be185d")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#db2777")
                  }
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {Array.from({ length: totalPages }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentIndex(dot)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                backgroundColor: dot === currentIndex ? "#db2777" : "#f9a8d4",
                transition: "background 0.2s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discounts;
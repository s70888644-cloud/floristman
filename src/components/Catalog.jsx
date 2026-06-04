import React from "react";
import { useNavigate } from "react-router-dom";
import "./Catalog.css";
import { allProducts } from "../data/products";

import rasm1 from "../assets/images/dlya-kogo.png";
import rasm2 from "../assets/images/bukety.png";
import rasm3 from "../assets/images/rozy.png";
import rasm4 from "../assets/images/prazdnichnaya.png";
import rasm5 from "../assets/images/sladosti.png";
import rasm6 from "../assets/images/podarki.png";
import rasm8 from "../assets/images/komnatnye.png";

const Catalog = () => {
  const navigate = useNavigate();

  // Faqat birinchi 8 ta mahsulot
  const products = allProducts.slice(0, 8);

  const tiles = [
    { image: rasm1, col: 1, rowStart: 1, rowEnd: 4, className: "tile-1" },
    { image: rasm5, col: 1, rowStart: 4, rowEnd: 7, className: "tile-2" },
    { image: rasm6, col: 2, rowStart: 1, rowEnd: 3, className: "tile-3" },
    { image: rasm2, col: 2, rowStart: 3, rowEnd: 5, className: "tile-4" },
    { image: rasm3, col: 2, rowStart: 5, rowEnd: 7, className: "tile-5" },
    { image: rasm4, col: 3, rowStart: 1, rowEnd: 4, className: "tile-6" },
    { image: rasm8, col: 3, rowStart: 4, rowEnd: 7, className: "tile-7" },
  ];

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-inner">
        <h3 className="catalog-title">Каталог</h3>

        <div className="mosaic-grid">
          {tiles.map((tile, i) => (
            <button
              key={i}
              className={`mosaic-tile ${tile.className}`}
              style={{ gridColumn: tile.col, gridRow: `${tile.rowStart} / ${tile.rowEnd}` }}
            >
              <img src={tile.image} alt="" />
            </button>
          ))}
        </div>

        <h4 className="section-heading">
          <span className="icon">✿</span> Для кого
        </h4>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image">
                <img src={product.image} alt={product.name} />
                <div className="card-badges">
                  <span className="badge-hit">ХИТ ПРОДАЖ</span>
                  <span className="badge-new">НОВИНКА</span>
                  <span className="badge-day">БУКЕТ ДНЯ</span>
                </div>
                <span className="badge-discount">Скидка {product.discount}</span>
              </div>
              <div className="card-body">
                <p className="card-name">{product.name}</p>
                <div className="card-price-row">
                  <div className="card-prices">
                    <span className="price-old">{product.oldPrice.toLocaleString()} грн</span>
                    <span className="price-new">{product.newPrice.toLocaleString()} грн</span>
                  </div>
                  <button
                    className="btn-order"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="catalog-more">
          <button className="btn-more" onClick={() => navigate('/catalog')}>
            Перейти к каталогу →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

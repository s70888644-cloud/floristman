import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CatalogHero from "./CatalogHero";
import Footer from "../components/Footer";
import { allProducts } from "../data/products";
import "./CatalogPage.css";

const CatalogPage = () => {
  const navigate = useNavigate();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(9999);

  const handleAddToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    const found = existing.find((item) => item.id === product.id);
    let updated;
    if (found) {
      updated = existing.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updated = [...existing, { ...product, quantity: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(updated));
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      <Header />
      <CatalogHero />

      <div className="catalog-page">
        <aside className="catalog-sidebar">
          <div className="filter-group">
            <h4 className="filter-title">Категории</h4>
            {[
              "Категория",
              "Категория",
              "Категория",
              "Категория",
              "Категория",
              "Категория",
            ].map((item, i) => (
              <label key={i} className="filter-item">
                <input type="checkbox" /> {item}{" "}
                <span className="filter-count">(0)</span>
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Повод</h4>
            {["Повод", "Повод", "Повод", "Повод", "Повод", "Повод"].map(
              (item, i) => (
                <label key={i} className="filter-item">
                  <input type="checkbox" /> {item}{" "}
                  <span className="filter-count">(0)</span>
                </label>
              ),
            )}
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Кому</h4>
            {["Кому", "Кому", "Кому", "Кому", "Кому", "Кому", "Кому"].map(
              (item, i) => (
                <label key={i} className="filter-item">
                  <input type="checkbox" /> {item}{" "}
                  <span className="filter-count">(0)</span>
                </label>
              ),
            )}
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Фильтр</h4>
            <p className="filter-price-label">
              Цена: {priceMin} грн — {priceMax} грн
            </p>
            <input
              type="range"
              min="0"
              max="9999"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="filter-range"
            />
            <button className="filter-btn">Фильтровать</button>
          </div>
        </aside>

        <main className="catalog-products">
          <div className="products-grid">
            {allProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <div className="product-bottom">
                    <div>
                      <span className="product-old">
                        {product.oldPrice.toLocaleString()} грн
                      </span>
                      <span className="product-new">
                        {product.newPrice.toLocaleString()} грн
                      </span>
                    </div>
                    <button
                      className="product-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;

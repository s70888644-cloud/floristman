import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allProducts } from '../data/products';
import heroImage from '../assets/images/header-gull.png'; 
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const [quantity, setQuantity] = useState(1);

  const totalOld = product.oldPrice * quantity;
  const totalNew = product.newPrice * quantity;

  const related = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <div>
      <Header />

      {/* ✅ TUZATILDI: CartPage dagi kabi img tag bilan */}
      <div className="product-hero">
        <img src={heroImage} alt="" className="card-guli" />
        <div className="product-hero__content">
          <h1 className="product-hero__title">Букет №225 “Ромашки для Наташки”</h1>
        </div>
      </div>

      <div className="product-breadcrumb">
        <Link to="/">Главная</Link> / <span>{product.name}</span>
      </div>

      <div className="product-main">
        <div className="product-gallery">
          <div className="product-gallery__main">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-gallery__thumbs">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="product-gallery__thumb">
                <img src={product.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details">
          <div className="product-badges">
            <span className="badge-hit">ХИТ ПРОДАЖ</span>
            <span className="badge-discount">Скидка {product.discount}</span>
            <span className="badge-new">НОВИНКА</span>
            <span className="badge-day">БУКЕТ ДНЯ</span>
          </div>

          <p className="product-reviews">
            Отзывов (1) &nbsp;
            <span className="product-instock">Есть в наличие</span>
          </p>

          <div className="product-meta">
            <p><strong>Повод:</strong> 8 марта. 9 мая. Любовь</p>
            <p><strong>Кому:</strong> Маме. Девушке. Женщине. Учителю. Теще. Друзьям</p>
          </div>

          <div className="product-order-row">
            <div className="product-quantity">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <div className="product-prices">
              <span className="product-old-price">{totalOld.toLocaleString()} грн</span>
              <span className="product-new-price">{totalNew.toLocaleString()} грн</span>
            </div>
            <button className="product-cart-btn" onClick={handleAddToCart}>
              В корзину
            </button>
          </div>

          <div className="product-description">
            <h4>Описание:</h4>
            <p>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
          </div>
        </div>
      </div>

      <div className="product-reviews-section">
        <h3>Отзывы (1):</h3>
        <div className="review-card">
          <p className="review-author">Отзыв от <span>Лена Ленина</span></p>
          <p className="review-text">Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции.</p>
        </div>
      </div>

      <div className="product-related">
        <h3>Вместе покупают</h3>
        <div className="related-grid">
          {related.map((p) => (
            <div key={p.id} className="related-card">
              <div className="related-img">
                <img src={p.image} alt={p.name} />
                <div className="related-badges">
                  <span className="badge-hit">ХИТ ПРОДАЖ</span>
                  <span className="badge-new">НОВИНКА</span>
                  <span className="badge-day">БУКЕТ ДНЯ</span>
                </div>
                <span className="related-discount">Скидка {p.discount}</span>
              </div>
              <div className="related-info">
                <p className="related-name">{p.name}</p>
                <div className="related-bottom">
                  <div>
                    <span className="related-old">{p.oldPrice.toLocaleString()} грн</span>
                    <span className="related-new">{p.newPrice.toLocaleString()} грн</span>
                  </div>
                  <button
                    className="related-btn"
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="related-dots">
          {[0, 1, 2].map((d) => (
            <span key={d} className={`dot ${d === 0 ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
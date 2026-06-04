import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from '../assets/images/header-gull.png';
import './CartPage.css';

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  });

  const [payment, setPayment] = useState('delivery');
  const [deliveryType, setDeliveryType] = useState('courier');
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [buyerType, setBuyerType] = useState('new');
  const [submitted, setSubmitted] = useState(false);

  const changeQty = (id, delta) => {
    setCartItems(prev => {
      const updated = prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id) => {
    setCartItems(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = () => {
    if (!form.name.trim()) {
      alert('Пожалуйста, введите имя!');
      return;
    }
    if (!form.phone.trim()) {
      alert('Пожалуйста, введите телефон!');
      return;
    }
    if (!form.address.trim()) {
      alert('Пожалуйста, введите адрес доставки!');
      return;
    }
    localStorage.removeItem('cart');
    setCartItems([]);
    setSubmitted(true);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount;

  return (
    <div>
      <Header />

      {/* heroImage import qilinib, inline style bilan berildi */}
      <div className="cart-hero">
        <img src={heroImage} alt="" className='card-guli' />
        <div className="cart-hero__content">
          <h1 className="cart-hero__title">Корзина</h1>
        </div>
      </div>

      <div className="cart-page">

        <div className="cart-items">
          {cartItems.length === 0 && !submitted ? (
            <div className="cart-empty">
              <p>Корзина пуста</p>
              <button onClick={() => navigate('/catalog')} className="cart-go-catalog">
                Перейти к каталогу
              </button>
            </div>
          ) : !submitted ? (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__img" />
                <div className="cart-item__info">
                  <div className="cart-item__top">
                    <p className="cart-item__name">{item.name}</p>
                    <button
                      className="cart-item__delete"
                      onClick={() => removeItem(item.id)}
                      title="Удалить"
                    >
                      🗑
                    </button>
                  </div>
                  <div className="cart-item__bottom">
                    <div className="cart-item__prices">
                      <span className="cart-item__old">{(item.oldPrice * item.quantity).toLocaleString()} грн</span>
                      <span className="cart-item__new">{(item.newPrice * item.quantity).toLocaleString()} грн</span>
                    </div>
                    <div className="cart-item__qty">
                      <button onClick={() => changeQty(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQty(item.id, +1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : null}
        </div>

        {!submitted && (
          <div className="cart-summary">
            <h3 className="cart-summary__title">Сумма заказов</h3>

            <div className="cart-summary__row">
              <span>Общая сумма заказов:</span>
              <span>{subtotal.toLocaleString()} грн</span>
            </div>

            <div className="cart-summary__row cart-summary__row--top">
              <span>Способ оплаты:</span>
              <div className="cart-radio-group">
                {[
                  { value: 'delivery', label: 'Оплата при доставке' },
                  { value: 'card',     label: 'Оплата картой' },
                  { value: 'privat',   label: 'Оплата на карту ПриватБанк' },
                ].map(opt => (
                  <label key={opt.value} className="cart-radio">
                    <input
                      type="radio"
                      name="payment"
                      value={opt.value}
                      checked={payment === opt.value}
                      onChange={() => setPayment(opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="cart-summary__row cart-summary__row--top">
              <span>Доставка:</span>
              <div className="cart-radio-group">
                {[
                  { value: 'self',    label: 'Самовызов — Бесплатно' },
                  { value: 'courier', label: 'Курьером — 000 грн' },
                ].map(opt => (
                  <label key={opt.value} className="cart-radio">
                    <input
                      type="radio"
                      name="delivery"
                      value={opt.value}
                      checked={deliveryType === opt.value}
                      onChange={() => setDeliveryType(opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="cart-summary__row">
              <span>Скидка:</span>
              <span className="cart-discount">-10%</span>
            </div>

            <div className="cart-summary__row cart-summary__total">
              <span>Итого к оплате:</span>
              <span>{total.toLocaleString()} грн</span>
            </div>
          </div>
        )}

        <div className="cart-order">
          <h3 className="cart-order__title">Оформление заказа</h3>

          {submitted ? (
            <div className="cart-success">
              <div className="cart-success__icon">✓</div>
              <h4>Заказ принят!</h4>
              <p>Мы свяжемся с вами в ближайшее время</p>
              <button className="cart-go-catalog" onClick={() => navigate('/')}>
                На главную
              </button>
            </div>
          ) : (
            <>
              <div className="cart-buyer-tabs">
                <button
                  className={`cart-buyer-tab ${buyerType === 'new' ? 'active' : ''}`}
                  onClick={() => setBuyerType('new')}
                >
                  Новый покупатель
                </button>
                <button
                  className={`cart-buyer-tab ${buyerType === 'existing' ? 'active' : ''}`}
                  onClick={() => setBuyerType('existing')}
                >
                  Постоянный покупатель
                </button>
              </div>

              <div className="cart-form">
                <input
                  className="cart-input"
                  type="text"
                  placeholder="Имя"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
                <input
                  className="cart-input"
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
                <input
                  className="cart-input"
                  type="text"
                  placeholder="Адрес доставки"
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                />
                <div className="cart-form__btn-wrap">
                  <button className="cart-submit" onClick={handleSubmit}>
                    Подтверждение заказа
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
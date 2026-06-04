import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      <Header />

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Контакты</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="contact-breadcrumb">
        <Link to="/">Главная</Link> / <span>Контакты</span>
      </div>

      {/* XARITA + INFO */}
      <div className="contact-info-section">
        {/* Xarita */}
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sru!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Kontakt ma'lumotlar */}
        <div className="contact-details">
          <div className="contact-block">
            <h3 className="contact-block__title">Звоните нам или пишите в месенджер</h3>
            <p className="contact-block__item">
              <span className="contact-icon phone" />
              +74950000000 - Имя
            </p>
            <p className="contact-block__item">
              <span className="contact-icon phone" />
              +74950000000 - Имя
            </p>
            <p className="contact-block__item">
              <span className="contact-icon email" />
              Електоронный_адрес@gmail.com
            </p>
            <div className="contact-socials">
              <span>Мы в соц сетях:</span>
              <div className="contact-socials__icons">
                {['viber', 'facebook', 'whatsapp', 'instagram'].map(s => (
                  <a key={s} href="#" className={`social-icon social-icon--${s}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="contact-block">
            <h3 className="contact-block__title">Как нас найти?</h3>
            <p className="contact-block__item">
              <span className="contact-icon location" />
              Город, улица Название, дом 1
            </p>
            <p className="contact-block__item">
              <span className="contact-icon clock" />
              Режим работы: Пн-пт: 00:00-00:00
            </p>
            <p className="contact-block__item contact-block__item--indent">
              Сб-вс: 00:00-00:00
            </p>
          </div>
        </div>
      </div>

      {/* SAVOL FORMASI */}
      <div className="contact-form-section">
        <h2 className="contact-form__heading">Появились вопросы?</h2>

        {sent ? (
          <div className="contact-success">
            <div className="contact-success__icon">✓</div>
            <p>Ваш вопрос отправлен! Мы свяжемся с вами.</p>
          </div>
        ) : (
          <div className="contact-form">
            <input
              className="contact-input"
              type="text"
              placeholder="Имя"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              className="contact-input"
              type="tel"
              placeholder="Телефон"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            />
            <textarea
              className="contact-textarea"
              placeholder="Напишите свой вопрос"
              rows={6}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
            <button className="contact-submit" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
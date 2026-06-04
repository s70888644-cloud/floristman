import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSave = () => {
    const newErrors = {};
    if (!form.name.trim())     newErrors.name     = 'Введите ФИО';
    if (!form.phone.trim())    newErrors.phone    = 'Введите телефон';
    if (!form.email.trim())    newErrors.email    = 'Введите e-mail';
    if (!form.password.trim()) newErrors.password = 'Введите пароль';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const menuItems = [
    { key: 'personal',  label: 'Личные данные' },
    { key: 'address',   label: 'Адресная книга' },
    { key: 'reviews',   label: 'Отзывы' },
    { key: 'viewed',    label: 'Просмотренные' },
  ];

  return (
    <div>
      <Header />

      <div className="profile-page">

        <aside className="profile-sidebar">
          {menuItems.map(item => (
            <button
              key={item.key}
              className={`profile-sidebar__item ${activeTab === item.key ? 'active' : ''}`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="profile-sidebar__logout"
            onClick={() => {
              localStorage.removeItem('user');
              navigate('/');
            }}
          >
            Выйти
          </button>
        </aside>

        <main className="profile-content">
          <p className="profile-breadcrumb">
            <Link to="/">Главная</Link> / Личный кабинет
          </p>

          {activeTab === 'personal' && (
            <div className="profile-personal">
              <h2 className="profile-title">Личные данные</h2>

              <div className="profile-form">
                {[
                  { label: 'ФИО',     key: 'name',     type: 'text' },
                  { label: 'Телефон', key: 'phone',    type: 'tel' },
                  { label: 'E-mail',  key: 'email',    type: 'email' },
                  { label: 'Пароль',  key: 'password', type: 'password' },
                ].map(field => (
                  <div key={field.key} className="profile-field">
                    <label className="profile-field__label">{field.label}</label>
                    <div style={{ flex: 1 }}>
                      <input
                        className="profile-field__input"
                        type={field.type}
                        value={form[field.key]}
                        style={{
                          width: '100%',
                          borderColor: errors[field.key] ? '#e05478' : undefined,
                        }}
                        onChange={e => {
                          setForm(f => ({ ...f, [field.key]: e.target.value }));
                          setErrors(err => ({ ...err, [field.key]: '' }));
                        }}
                      />
                      {errors[field.key] && (
                        <p style={{ color: '#e05478', fontSize: '12px', margin: '4px 0 0 4px' }}>
                          ⚠ {errors[field.key]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  className={`profile-save-btn ${saved ? 'saved' : ''}`}
                  onClick={handleSave}
                >
                  {saved ? '✓ Сохранено!' : 'Сохранить'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'address' && (
            <div className="profile-empty-tab">
              <h2 className="profile-title">Адресная книга</h2>
              <p>Адреса не добавлены</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="profile-reviews">
              <h2 className="profile-title">Отзывы</h2>

              {[1, 2].map((_, i) => (
                <div key={i} className="profile-review-card">
                  <h4
                    className="profile-review__product"
                    onClick={() => navigate('/product/1')}
                  >
                    Отзыв о товаре №225 "Ромашки для Наташки"
                  </h4>
                  <p className="profile-review__text">
                    Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.
                  </p>
                  <p className="profile-review__date">12:00 12.12.2021</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'viewed' && (
            <div className="profile-empty-tab">
              <h2 className="profile-title">Просмотренные</h2>
              <p>Нет просмотренных товаров</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (!isLogin && !form.name.trim())  newErrors.name     = 'Введите имя';
    if (!form.email.trim())             newErrors.email    = 'Введите e-mail';
    if (!form.password.trim())          newErrors.password = 'Введите пароль';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    localStorage.setItem('user', form.email);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-image">
        <img src="/header-bg.png" alt="flowers" />
        <div className="auth-image__overlay">
          <h2>FLORISTMAN</h2>
          <p>Широкий выбор на любой вкус</p>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-box">

          <div className="auth-tabs">
            <button
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => { setIsLogin(false); setErrors({}); }}
            >
              Регистрация
            </button>
            <button
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => { setIsLogin(true); setErrors({}); }}
            >
              Войти
            </button>
          </div>

          <h2 className="auth-title">
            {isLogin ? 'Войдите в аккаунт' : 'Создайте аккаунт'}
          </h2>

          <button className="auth-google-btn">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36.5 24 36.5c-5.2 0-9.6-3.5-11.2-8.2l-6.5 5C9.5 39.8 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.2 5.2C41.3 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
            </svg>
            Продолжить с Google
          </button>

          <div className="auth-divider"><span>или</span></div>

          <div className="auth-fields">
            {!isLogin && (
              <div>
                <input
                  className="auth-input"
                  type="text"
                  placeholder="Имя"
                  value={form.name}
                  style={{ borderColor: errors.name ? '#e05478' : undefined }}
                  onChange={e => {
                    setForm(f => ({ ...f, name: e.target.value }));
                    setErrors(err => ({ ...err, name: '' }));
                  }}
                />
                {errors.name && <p className="auth-error">⚠ {errors.name}</p>}
              </div>
            )}
            <div>
              <input
                className="auth-input"
                type="email"
                placeholder="E-mail"
                value={form.email}
                style={{ borderColor: errors.email ? '#e05478' : undefined }}
                onChange={e => {
                  setForm(f => ({ ...f, email: e.target.value }));
                  setErrors(err => ({ ...err, email: '' }));
                }}
              />
              {errors.email && <p className="auth-error">⚠ {errors.email}</p>}
            </div>
            <div>
              <input
                className="auth-input"
                type="password"
                placeholder="Пароль"
                value={form.password}
                style={{ borderColor: errors.password ? '#e05478' : undefined }}
                onChange={e => {
                  setForm(f => ({ ...f, password: e.target.value }));
                  setErrors(err => ({ ...err, password: '' }));
                }}
              />
              {errors.password && <p className="auth-error">⚠ {errors.password}</p>}
            </div>
          </div>

          <button className="auth-submit-btn" onClick={handleSubmit}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>

          <p className="auth-switch">
            {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
            <button onClick={() => { setIsLogin(!isLogin); setErrors({}); }}>
              {isLogin ? 'Зарегистрируйтесь' : 'Войдите'}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

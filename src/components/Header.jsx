import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isLoggedIn = localStorage.getItem('user');

  return (
    <header
      style={{ backgroundColor: "#f5ede0", borderBottom: "1px solid #e0cfc0" , position: "sticky", top: 0, left: 0,  zIndex: 1000}}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          
        }}
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#c47a5a",
                borderRadius: "2px",
              }}
            />
          ))}
        </button>

        <div
          onClick={() => navigate('/')}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <ellipse cx="20" cy="16" rx="4" ry="7" fill="#e8a090" transform="rotate(-30 20 16)" />
            <ellipse cx="20" cy="16" rx="4" ry="7" fill="#d4756a" transform="rotate(30 20 16)" />
            <ellipse cx="20" cy="16" rx="4" ry="7" fill="#e8a090" transform="rotate(90 20 16)" />
            <ellipse cx="20" cy="16" rx="4" ry="7" fill="#d4756a" transform="rotate(-90 20 16)" />
            <circle cx="20" cy="16" r="4" fill="#c47a5a" />
            <line x1="20" y1="22" x2="18" y2="34" stroke="#7aaa6a" strokeWidth="1.5" />
            <ellipse cx="15" cy="30" rx="5" ry="3" fill="#8abb7a" transform="rotate(-20 15 30)" />
          </svg>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "700", color: "#2a2a2a", letterSpacing: "0.5px", margin: 0 }}>
              FLORISTMAN
            </h1>
            <p style={{ fontSize: "10px", color: "#888", margin: 0 }}>
              Широкий выбор на любой вкус
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c47a5a" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          <button
            onClick={() => navigate('/cart')}
            style={{ background: "none", border: "none", cursor: "pointer", position: "relative" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c47a5a" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  background: "#c47a5a",
                  color: "#fff",
                  fontSize: "9px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Profil */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              onClick={() => navigate('/profile')}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c47a5a" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            {!isLoggedIn && (
              <span
                onClick={() => navigate('/register')}
                style={{ fontSize: "13px", color: "#c47a5a", fontWeight: "600", cursor: "pointer" }}
              >
                Войдите
              </span>
            )}
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <nav style={{ borderTop: "1px solid #e0cfc0", backgroundColor: "#f5ede0", padding: "8px 24px" }}>
          {[
            { label: "Каталог",  path: "/catalog" },
            { label: "Корзина",  path: "/cart" },
            { label: "Профиль",  path: "/profile" },
            { label: "Контакты", path: "/contacts" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => { navigate(item.path); setMobileMenuOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 0",
                background: "none",
                border: "none",
                color: "#5a3a2a",
                fontSize: "15px",
                cursor: "pointer",
                borderBottom: "0.5px solid #e0cfc0",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
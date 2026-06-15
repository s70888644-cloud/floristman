import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Qaysi sahifadaligini bilish va aktiv rangni belgilash uchun

  // Savatcha va login holatlari (agar loyihangizda bo'lsa)
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isLoggedIn = localStorage.getItem('user');

  return (
    <header
      style={{ 
       backgroundColor: "rgba(251, 248, 243, 0.9)", // Chiroyli krem shaffof fon
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(196, 122, 90, 0.12)",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 4px 30px rgba(42, 26, 18, 0.02)",
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        {/* CHAP QISM: Logotip va Menyular (Toza display: flex) */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          
          {/* Logotip qismi */}
          <div
            onClick={() => navigate('/')}
            style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
          >
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <ellipse cx="20" cy="16" rx="4" ry="7" fill="#e8a090" transform="rotate(-30 20 16)" />
              <ellipse cx="20" cy="16" rx="4" ry="7" fill="#d4756a" transform="rotate(30 20 16)" />
              <circle cx="20" cy="16" r="4" fill="#c47a5a" />
              <line x1="20" y1="22" x2="18" y2="34" stroke="#7aaa6a" strokeWidth="1.5" />
            </svg>
            <span style={{ fontSize: "16px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "0.5px" }}>
              FLORISTMAN
            </span>
          </div>

          {/* Menyular: NVIDIA kabi chiziqli va uchta chiziqchasiz (Burger menyusiz) */}
          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {[
              { label: "Каталог", path: "/catalog" },
              { label: "Корзина", path: "/cart" },
              { label: "Профиль", path: "/profile" },
              { label: "Контакты", path: "/contacts" },
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  style={{
                    background: "none",
                    border: "none",
                    color: isActive ? "#000000" : "#2d3748",
                    // Aktiv bo'lganda muloyim kulrang fon (siz yuborgan rasmdagidek)
                    backgroundColor: isActive ? "rgba(0, 0, 0, 0.06)" : "transparent",
                    fontSize: "14px",
                    fontWeight: isActive ? "600" : "500",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.backgroundColor = "rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* O'NG QISM: Ikonkalar (Qidiruv, Savatcha, Profil) */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          
          {/* Qidiruv */}
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Savatcha */}
          <button onClick={() => navigate('/cart')} style={{ background: "none", border: "none", cursor: "pointer", position: "relative", padding: "4px", display: "flex" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: "-2px", right: "-2px", background: "#c47a5a", color: "#fff", fontSize: "8px", width: "12px", height: "12px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Profil / Kirish */}
          <div onClick={() => navigate(isLoggedIn ? '/profile' : '/register')} style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span style={{ fontSize: "13px", color: "#1a1a1a", fontWeight: "500" }}>
              {isLoggedIn ? "Профиль" : "Войдите"}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
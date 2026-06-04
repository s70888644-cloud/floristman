# 🚀 FLORISTMAN React - Quick Start Guide

## 60 Soniyada Boshlang!

### Step 1: Extract & Enter (10 sec)
```bash
unzip floristman-react.zip
cd floristman-react
```

### Step 2: Install (45 sec)
```bash
npm install
```

⏳ Kuting... `node_modules` yuklanmoqda...

### Step 3: Run (5 sec)
```bash
npm run dev
```

✨ **DONE!** Browser ochildi: `http://localhost:5173`

---

## 📁 Fayllar Strukturasi

```
floristman-react/
├── src/
│   ├── components/        # 8 ta React komponenti
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Discounts.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Catalog.jsx
│   │   ├── Delivery.jsx
│   │   ├── CustomBouquet.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── App.css
│   └── index.css
├── public/                # Rasmlar
│   ├── Хейдер.png
│   ├── Скидки.png
│   ├── Почему_именно_мы_.png
│   ├── Каталог.png
│   ├── Доставка.png
│   ├── Предложи_свой_букет.png
│   └── Футер.jpg
├── package.json           # Dependencies
├── vite.config.js         # Vite config
├── tailwind.config.js     # Tailwind config
├── index.html             # HTML entry
└── README.md              # Full docs
```

---

## 💻 Buyruqlar

| Buyruq | Nima qiladi |
|--------|------------|
| `npm run dev` | Dev server (http://localhost:5173) |
| `npm run build` | Production build (`dist/` folder) |
| `npm run preview` | Preview production build |

---

## 🛠️ Customize Qilish

### 1. Ranglar O'zgartirish
`tailwind.config.js`:
```javascript
colors: {
  pink: { 600: '#ff1493' }  // O'zingizning rangi
}
```

### 2. Text O'zgartirish
`src/components/Hero.jsx`:
```jsx
<h2>Sizning matniz</h2>
```

### 3. Rasmlar O'zgartirish
`public/` papkasiga yangi rasmlar qo'shing:
```jsx
<img src="/yangi-rasm.png" />
```

---

## 📱 Responsive Check

Browser DevTools (F12):
- **Mobile**: 375px
- **Tablet**: 768px  
- **Desktop**: 1024px+

Tailwind breakpoints: `sm:`, `md:`, `lg:`

---

## 🌐 Deploy Qilish

### Vercel (Eng oson - 1 click)
```bash
npm i -g vercel
vercel
```
Shunchalik! Vercel avtomatik deploy qiladi.

### Netlify
1. Build: `npm run build`
2. `dist/` folder Netlify-ga upload qiling
3. Done! ✅

### GitHub Pages
```bash
npm run build
# dist/ ni GitHub Pages-ga push qiling
```

---

## ⚡ Performance

- **Build Size**: ~50KB (gzipped)
- **Load Time**: < 2.5s
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS

---

## 🐛 Issues?

| Problem | Solution |
|---------|----------|
| Port busy | `npm run dev -- --port 3000` |
| Module not found | `rm -rf node_modules && npm install` |
| Images missing | Tekshiring `public/` papkasini |
| Build error | Node.js version tekshiring: `node -v` |

---

## 📚 Learn More

- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com
- **Vite**: https://vitejs.dev

---

## 🎯 Next Steps

1. ✅ Local sida run qiling
2. ✅ Contentni o'zgartiring
3. ✅ Custom domains/branding qo'shing
4. ✅ API integrate qiling
5. ✅ Deploy qiling!

---

**Tabriklaymiz! Sizning saytingiz hozir ishga tayyor!** 🎉

**Savollar?** README.md va FEATURES.md ni o'qib chiqing.

# FLORISTMAN - React Sayt 💐

Bu React-da yozilgan "FLORISTMAN" gul xizmatlari saytining to'liq va professional kopiyasi. Responsive dizayn, Tailwind CSS va barcha modern features bilan qurilgan.

## 📦 Komponentlar

1. **Header** - Responsive navigatsiya va logo
2. **Hero** - Bosh banner bilan buket rasmlari va CTA tugmasi
3. **Discounts** - Chegirmali buketlar carousel bilan
4. **WhyUs** - Nima uchun aynan biz bo'limi (Features)
5. **Catalog** - Katalog, kategoriyalar va mahsulotlar grid
6. **Delivery** - Dostavka haqida ma'lumot va xususiyatlari
7. **CustomBouquet** - Buyurtma formi va validatsiya
8. **Footer** - Kontaktlar, kategoriyalar va ijtimoiy media

## 🎨 Texnologiyalar

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS + Autoprefixer** - CSS processing

## 🚀 Ishni Boshlash

### 1. Papkani Aç
```bash
cd floristman-react
```

### 2. Dependencies O'rnatish
```bash
npm install
```

### 3. Development Serverini Ishga Tushirish
```bash
npm run dev
```

Server avtomatik ochiladi: `http://localhost:3000`

### 4. Production Uchun Build Qilish
```bash
npm run build
```

Build fayllari `dist/` papkasida bo'ladi.

### 5. Production Previewni Tekshirish
```bash
npm run preview
```

## 📁 Loyiha Tuzilishi

```
floristman-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigatsiya
│   │   ├── Hero.jsx             # Bosh banner
│   │   ├── Discounts.jsx        # Chegirmalar carousel
│   │   ├── WhyUs.jsx            # Xususiyatlari
│   │   ├── Catalog.jsx          # Katalog
│   │   ├── Delivery.jsx         # Dostavka
│   │   ├── CustomBouquet.jsx    # Buyurtma formi
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Bosh komponenti
│   ├── App.css                  # Global stillar
│   ├── index.jsx                # React entry point
│   └── index.css                # Tailwind imports
├── public/
│   ├── Хейдер.png               # Hero image
│   ├── Скидки.png               # Discounts image
│   ├── Почему_именно_мы_.png    # Why Us images
│   ├── Каталог.png              # Catalog image
│   ├── Доставка.png             # Delivery image
│   ├── Предложи_свой_букет.png  # Custom bouquet image
│   └── Футер.jpg                # Footer image
├── index.html                   # HTML entry point
├── package.json                 # NPM dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── .env                         # Environment variables
└── .gitignore                   # Git ignore file
```

## ✨ Asosiy Xususiyatlar

✅ **Responsive Dizayn** - Mobile, Tablet, Desktop
✅ **Smooth Scroll Navigatsiya** - Yumshoq o'tishlar
✅ **Carousel/Slider** - Chegirmalar uchun
✅ **Buyurtma Formi** - Form validatsiya va submission
✅ **Mahsulot Katalogi** - Kategoriya filtratsiyasi
✅ **Social Media Linklar** - Footer integration
✅ **Tailwind CSS** - Modern utility-based styling
✅ **Vite** - Super-fast build va development

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Tailwind CSS `md:` va `lg:` prefix'lari ishlatilgan.

## 🛠️ Customization

### Ranglarni O'zgartirish
`tailwind.config.js` da `colors` qismini o'zgartiring:
```javascript
theme: {
  extend: {
    colors: {
      pink: { ... }
    }
  }
}
```

### Fonts
`index.css` va `index.html` da system fonts ishlatiladi.

### Content
Har bir komponentdagi hardcoded textni o'zingizning kontentingiz bilan almashtirishingiz mumkin.

## 📝 Environment Variables

`.env` faylida:
```
VITE_APP_TITLE=FLORISTMAN
VITE_APP_DESCRIPTION=Gul va buket xizmatlari
VITE_API_URL=http://localhost:3000
```

## 🤝 Komandalash

Form submission uchun backend API ni integratsiya qilishingiz mumkin:

```javascript
// CustomBouquet.jsx da
const response = await fetch(import.meta.env.VITE_API_URL + '/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 📊 Performance Tips

- Images lar `.webp` formatiga o'tkazish
- Lazy loading qo'shish
- Code splitting qilish
- CDN ishlatish

## 🐛 Debugging

Browser DevTools:
- React DevTools extension
- Lighthouse audit
- Network tab checks

## 📚 Qo'shimcha Resurslar

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

## 📞 Kontakt

Savollar bo'lsa, yozing! 💬

---

**©2021. Barcha huquqlar himoyalangan.**

Made with ❤️ using React + Tailwind CSS

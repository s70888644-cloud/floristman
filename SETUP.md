# FLORISTMAN React - Setup Guide 🚀

## System Requirements

- **Node.js**: >= 16.0.0
- **npm**: >= 8.0.0
- **OS**: Windows, macOS, Linux
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## Installation Steps

### Step 1: Node.js O'rnatish

#### Windows
1. https://nodejs.org/en/download sitesiga boring
2. LTS versiyasini yuklab oling
3. Installer ni ishga tushiring va "Next" bosing
4. Installation tugagach, terminal ni aching va tekshiring:
```bash
node --version
npm --version
```

#### macOS
```bash
# Homebrew orqali
brew install node
```

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Proyektni Yuklab Oling

```bash
# Papkaga kiring
cd floristman-react

# Yoki, agar papka mavjud bo'lmasa:
# git clone <repository-url>
# cd floristman-react
```

### Step 3: Dependencies O'rnatish

```bash
npm install
```

Bu buyruq `package.json` dan barcha kerakli kutubxonalarni yuklab oladi:
- React 18
- Vite
- Tailwind CSS
- PostCSS

### Step 4: Development Server Ishga Tushirish

```bash
npm run dev
```

Output:
```
  VITE v5.2.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Brauzeringizda `http://localhost:5173/` ni oching.

## Common Issues va Solutions

### Issue 1: "npm: command not found"
**Sababi**: Node.js to'g'ri o'rnatilmagan
**Yechimi**: 
```bash
node --version
npm --version
```
Agar javab bo'lmasa, Node.js ni qayta o'rnatib ko'ring.

### Issue 2: Port 5173 allaqachon ishlatilmoqda
**Sababi**: Boshqa process port dan foydalanmoqda
**Yechimi**:
```bash
# Port ni o'zgartiring
npm run dev -- --port 3000
```

### Issue 3: Images ko'rinmayapti
**Sababi**: Public papka to'g'ri konfiguratsiya qilinmagan
**Yechimi**: 
```bash
# Public papkani tekshiring
ls public/
```
Barcha rasmlar `public/` papkasida bo'lishi kerak.

### Issue 4: "Module not found" xatoligi
**Sababi**: Dependencies o'rnatilmagan
**Yechimi**:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Production Build

### Build Qilish
```bash
npm run build
```

Output: `dist/` papkasida bu'ta sayt bo'ladi.

### Preview
```bash
npm run preview
```

Bu, production build ni local sida test qilish uchun.

## Deployment

### Vercel (Eng oson)
```bash
npm i -g vercel
vercel
```

### Netlify
1. https://app.netlify.com ga kiring
2. "New site from Git" bosing
3. GitHub repo ni tanlang
4. Deploy qilish avtomatik bo'ladi

### Boshqa Hosting

1. **AWS S3**: `npm run build` keyin S3 ga upload
2. **GitHub Pages**: README dagi instructions
3. **DigitalOcean**: VPS da Node.js server

## Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

## Customization

### Ranglarni O'zgartirish
`tailwind.config.js`:
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
`src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### API Integration
`src/components/CustomBouquet.jsx`:
```javascript
const response = await fetch('/api/orders', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

## Performance Optimization

### 1. Image Optimization
```javascript
// WebP format ishlatish
<img src="/image.webp" alt="..." />
```

### 2. Lazy Loading
```javascript
<img loading="lazy" src="/image.png" alt="..." />
```

### 3. Code Splitting
```javascript
const Component = lazy(() => import('./Component'));
```

## Testing

### Manual Testing Checklist
- [ ] Mobile responsive (375px, 768px, 1024px)
- [ ] Barcha linklar ishlaydi
- [ ] Form submission ishlaydi
- [ ] Images yoqlanadi
- [ ] Scrolling smooth
- [ ] Navigation ishlaydi

## Debug Mode

```bash
# Debug mode bilan
DEBUG=* npm run dev
```

Browser DevTools:
- F12 bosing
- Console tab
- Network tab
- Elements tab

## Tugallash

Tabriklaymiz! Saytingiz hozir ishga tayyor! 🎉

**Qo'shimcha yordam**:
- React Docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev

---

**Savollar bo'lsa, GitHub Issues ochishingiz mumkin.**

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Discounts from "./components/Discounts";
import WhyUs from "./components/WhyUs";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import CustomBouquet from "./components/CustomBouquet";
import Footer from "./components/Footer";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";

const HomePage = () => (
  <>
    <Header />
    <section id="home">
      <Hero />
    </section>
    <section id="discounts">
      <Discounts />
    </section>
    <section id="whyus">  
      <WhyUs />
    </section>
    <section id="catalog">
      <Catalog />
    </section>
    <section id="delivery">
      <Delivery />
    </section>
    <section id="custom">
      <CustomBouquet />
    </section>
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

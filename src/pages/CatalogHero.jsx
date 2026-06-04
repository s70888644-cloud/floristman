import "./CatalogHero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/header-gull.png";
const CatalogHero = () => {
  return (
    <div className="catalog-hero">
      <img src={heroImage} alt="Hero Image" className="catalog__img" />
      <div className="catalog-hero__content">
        <h1 className="catalog-hero__title">Каталог</h1>
        <p className="catalog-hero__breadcrumb">
          <Link to="/">Главная</Link> / <span>Каталог</span> /{" "}
          <span>Букеты</span>
        </p>
      </div>
    </div>
  );
};

export default CatalogHero;

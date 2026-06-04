import { useState } from "react";
import "./CustomBouquet.css";
import aygul from "../assets/images/aygull.png";

const CustomBouquet = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", idea: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ TO'G'RILANDI: faqat forma onSubmit ishlatiladi
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", idea: "" });
    }, 3000);
  };

  return (
    <section className="bouquet-section">
      <div className="bouquet-inner">
        <h2 className="bouquet-title">Предложи свой букет</h2>

        <div className="bouquet-grid">
          {/* FORMA */}
          <form className="bouquet-form" onSubmit={handleSubmit}>
            <input
              className="bouquet-input"
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bouquet-input"
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="bouquet-textarea"
              name="idea"
              placeholder="Ваша идея"
              value={formData.idea}
              onChange={handleChange}
              required
              rows={6}
            />

            {/* ✅ TO'G'RILANDI: onClick={handleSubmit} olib tashlandi, type="submit" qo'shildi */}
            <div className="bouquet-btn-wrap">
              <button
                type="submit"
                className={`bouquet-btn ${submitted ? "submitted" : ""}`}
              >
                {submitted ? "✓ Отправлено!" : "Отправить"}
              </button>
            </div>
          </form>

          {/* RASM */}
          <div className="bouquet-image-box">
            <img src={aygul} alt="bouquet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBouquet;

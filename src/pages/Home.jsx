import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const slides = [
  { id: 1, image: img1, title: "Terraplenagem Eficiente", desc: "Equipamentos modernos para o melhor serviço." },
  { id: 2, image: img2, title: "Demolição Segura", desc: "Atendimento com máxima segurança e qualidade." },
  { id: 3, image: img3, title: "Escavação Precisa", desc: "Equipe experiente e comprometida com o prazo." },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showSlide = (i) => {
    if (i < 0) setIndex(slides.length - 1);
    else if (i >= slides.length) setIndex(0);
    else setIndex(i);
  };

  return (
    <>
      <section className="carousel">
        <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-label={`${slide.title} - ${slide.desc}`}
              role="group"
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" aria-label="Slide anterior" onClick={() => showSlide(index - 1)}>
          &#10094;
        </button>
        <button className="carousel-button next" aria-label="Próximo slide" onClick={() => showSlide(index + 1)}>
          &#10095;
        </button>

        <div className="indicators" role="tablist" aria-label="Indicadores do carrossel">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`indicator ${i === index ? "active" : ""}`}
              role="tab"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              aria-label={`Slide ${i + 1}`}
              onClick={() => showSlide(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  showSlide(i);
                }
              }}
            />
          ))}
        </div>
      </section>

      <section className="intro container">
        <div className="intro-box">
          <h3>Especialistas em Terraplenagem, Demolição e Escavação</h3>
          <p>
            Atuamos com transporte de máquinas, demolições, escavações e limpeza de terrenos.<br />
            Atendemos toda a região de São Paulo com excelência, segurança e pontualidade.
          </p>
          <Link to="/contato" className="btn">Solicite um orçamento</Link>
        </div>
      </section>

      <a
        href="https://wa.me/5511981296287"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Converse conosco no WhatsApp"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Ícone WhatsApp" />
      </a>
    </>
  );
}

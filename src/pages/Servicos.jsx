import React from "react";
import "../styles/Servicos.css";
import terraplanagemImg from "../assets/terraplanagem.jpg";
import demolicaoImg from "../assets/demolicao.jpg";
import escavacaoImg from "../assets/escavacao.jpg";
import locacaoImg from "../assets/locacao.jpg";
import remocaoImg from "../assets/remocao.jpg";

export default function Servicos() {
  return (
    <main className="services-container" aria-label="Seção de serviços com fundo claro e efeito 3D">
      <section className="container" aria-label="Lista de Serviços">
        <h2>Nossos Serviços</h2>

        <article className="service-card" tabIndex={0}>
          <div className="service-image">
            <img src={terraplanagemImg} alt="Terraplenagem" />
          </div>
          <div className="service-content">
            <span className="material-icons service-icon" aria-hidden="true">terrain</span>
            <h3>Terraplenagem</h3>
            <p>Nivelamento de terrenos com precisão e eficiência para todo tipo de obra.</p>
          </div>
        </article>

        <article className="service-card" tabIndex={0}>
          <div className="service-image">
            <img src={demolicaoImg} alt="Demolições" />
          </div>
          <div className="service-content">
            <span className="material-icons service-icon" aria-hidden="true">construction</span>
            <h3>Demolições</h3>
            <p>Demolições manual e mecanizada, controladas em áreas residenciais, comerciais e industriais.</p>
          </div>
        </article>

        <article className="service-card" tabIndex={0}>
          <div className="service-image">
            <img src={escavacaoImg} alt="Escavação" />
          </div>
          <div className="service-content">
            <span className="material-icons service-icon" aria-hidden="true">engineering</span>
            <h3>Escavações</h3>
            <p>Abertura de valas e escavações para fundações e redes subterrâneas.</p>
          </div>
        </article>

        <article className="service-card" tabIndex={0}>
          <div className="service-image">
            <img src={locacaoImg} alt="Locação de Máquinas e Transportes" />
          </div>
          <div className="service-content">
            <span className="material-icons service-icon" aria-hidden="true">local_shipping</span>
            <h3>Locação de Máquinas e Transportes</h3>
            <p>Aluguel de máquinas pesadas e serviços de transporte com operadores experientes.</p>
          </div>
        </article>

        <article className="service-card" tabIndex={0}>
          <div className="service-image">
            <img src={remocaoImg} alt="Remoção de Entulho" />
          </div>
          <div className="service-content">
            <span className="material-icons service-icon" aria-hidden="true">delete_sweep</span>
            <h3>Remoção de Entulho</h3>
            <p>Limpeza pós-obra e descarte correto de resíduos de construção.</p>
          </div>
        </article>
      </section>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511981296287"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Converse conosco no WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="Ícone WhatsApp"
          width={32}
          height={32}
        />
      </a>
    </main>
  );
}

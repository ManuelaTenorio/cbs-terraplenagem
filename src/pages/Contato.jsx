import React from "react";
import "../styles/Contato.css"; 

export default function Contato() {
  return (
    <main className="contato-container">
      <div
        className="contact-box"
        role="region"
        aria-label="Informações de contato da CBS Terraplenagem e Demolição"
      >
        <h2>Fale Conosco</h2>

        <div className="contact-info">
          <p>
            <strong>Telefone:</strong> (11) 5050-4820
          </p>
          <p>
            <strong>WhatsApp:</strong> (11) 98129-6287
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:cbs21terraplenagem@gmail.com"
              className="link-primario"
            >
              cbs21terraplenagem@gmail.com
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/cbs_terraplenagem"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primario"
            >
              @cbs_terraplenagem
            </a>
          </p>
        </div>

        <a
          href="https://wa.me/5511981296287"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale no WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i> Fale no WhatsApp
        </a>
      </div>
    </main>
  );
}

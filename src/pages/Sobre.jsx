import React, { useEffect } from "react";
import "../styles/Sobre.css";

export default function Sobre() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 150);
    });
  }, []);

  return (
    <main className="about-section container" aria-label="Sobre a CBS Terraplenagem e Demolição">
      <h2>Sobre Nós</h2>

      <div className="topics-container" role="list">
        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Quem Somos</h3>
          <p>
            <strong>CBS Terraplenagem e Demolição</strong> é uma empresa com <strong>15 anos de experiência</strong> no ramo de terraplenagem, escavação e demolições controladas. Atuamos com soluções modernas, seguras e eficientes para obras de todos os portes.
          </p>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Missão</h3>
          <p>Oferecer serviços de alta qualidade, com foco em agilidade, segurança e total satisfação dos nossos clientes.</p>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Visão</h3>
          <p>Ser referência em soluções de terraplenagem e demolição no estado de São Paulo, reconhecida pela inovação, ética e excelência no atendimento.</p>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Valores</h3>
          <ul>
            <li>Ética e transparência</li>
            <li>Comprometimento com o cliente</li>
            <li>Segurança em primeiro lugar</li>
            <li>Responsabilidade ambiental</li>
            <li>Inovação contínua</li>
          </ul>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Máquinas para Locação</h3>
          <ul>
            <li>Mini Carregadeira</li>
            <li>Mini Escavadeira</li>
            <li>Escavadeira Hidráulica</li>
            <li>Retro-Escavadeira</li>
            <li>Rolo Compactador</li>
          </ul>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Serviços Oferecidos</h3>
          <ul>
            <li><strong>Demolição:</strong> Pequeno e médio porte, mecanizada e manual.</li>
            <li><strong>Terraplenagem:</strong> Escavação de valas, remoção de solo, retirada de entulho e limpeza de terreno.</li>
            <li><strong>Transporte de Maquinários:</strong> Caminhão prancha hidráulica (10 metros de comprimento).</li>
          </ul>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Regiões Atendidas</h3>
          <p>Atuamos em todo o estado de São Paulo, oferecendo atendimento rápido e eficiente para diversas regiões.</p>
        </article>

        <article className="timeline-item" role="listitem" tabIndex={0}>
          <span className="marker" aria-hidden="true"></span>
          <h3>Diferenciais</h3>
          <p>
            Nosso diferencial está na especialização para diferentes tipos de terreno, uso de maquinário avançado, qualidade no serviço, comunicação clara e resolução ágil de problemas. Com uma reputação sólida e clientes satisfeitos, somos a <strong>CBS TERRAPLENAGEM</strong>.
          </p>
        </article>
      </div>

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
          width={28}
          height={28}
        />
      </a>
    </main>
  );
}

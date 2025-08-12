import React, { useState } from "react";
import "../styles/FAQ.css";

const faqs = [
  {
    id: "faq1",
    question: "1. Quando a terraplenagem é necessária?",
    answer:
      "A terraplenagem é necessária em terrenos com declives acentuados, áreas com desníveis, ou quando a construção exige um terreno nivelado e estável.",
  },
  {
    id: "faq2",
    question: "2. Quais são as etapas da terraplenagem?",
    answer:
      "As principais etapas incluem limpeza da área, escavação, aterro (se necessário), compactação do solo e, em alguns casos, drenagem para evitar problemas de umidade e erosão.",
  },
  {
    id: "faq3",
    question: "3. O que é aterro e desaterro?",
    answer:
      "Aterro é o processo de preenchimento de áreas com terra para elevar o nível do terreno e realizar o nivelamento da área, enquanto desaterro é a remoção do excesso de terra.",
  },
  {
    id: "faq4",
    question: "4. Quais os custos?",
    answer:
      "O custo é variável e depende de fatores como tamanho do terreno, tipo de solo, volume de terra a ser movimentado e serviços adicionais, como maquinário especializado, transporte e remoção de material.",
  },
  {
    id: "faq5",
    question: "5. É preciso de autorização para fazer terraplenagem?",
    answer:
      "Sim, em muitos casos é necessária a obtenção de licenças e alvarás, especialmente em áreas urbanas ou com restrições ambientais.",
  },
  {
    id: "faq6",
    question: "6. Quanto tempo leva para fazer a terraplenagem?",
    answer:
      "O tempo de execução pode variar de algumas semanas, dias a alguns meses, dependendo do tamanho do projeto, complexidade do terreno e condições climáticas.",
  },
  {
    id: "faq7",
    question: "7. Quanto custa uma demolição?",
    answer:
      "O valor pode variar dependendo do tamanho da construção, tipo de demolição (manual ou mecânica), e complexidade do projeto.",
  },
  {
    id: "faq8",
    question: "8. Qual o destino do material retirado?",
    answer:
      "É importante que o material “terra ou entulho” seja destinado corretamente a locais de reciclagem ou aterros licenciados.",
  },
  {
    id: "faq9",
    question: "9. É possível demolir sem o Alvará?",
    answer:
      "Não. Demolir sem o alvará é considerado ilegal e pode resultar em multas, embargos de obra, entre outras penalidades. O alvará de demolição é fornecido quando a obra pode ser demolida, desde que não afete os imóveis vizinhos.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="faq-section" aria-label="Perguntas Frequentes - FAQ">
      <h2>FAQ - Perguntas Frequentes</h2>

      {faqs.map(({ id, question, answer }) => (
        <div className="faq-item" key={id}>
          <button
            className={`faq-question ${openId === id ? "active" : ""}`}
            aria-expanded={openId === id}
            aria-controls={id}
            id={`${id}-btn`}
            onClick={() => toggleFAQ(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleFAQ(id);
              }
            }}
          >
            {question}
          </button>
          <div
            id={id}
            className={`faq-answer ${openId === id ? "open" : ""}`}
            role="region"
            aria-labelledby={`${id}-btn`}
            tabIndex={openId === id ? 0 : -1}
          >
            <p>{answer}</p>
          </div>
        </div>
      ))}

      {/* Botão WhatsApp flutuante */}
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

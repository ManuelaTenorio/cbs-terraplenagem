import "../components/WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511981296287"
      className="whatsapp-float"
      target="_blank"
      aria-label="Converse conosco no WhatsApp"
      rel="noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="Ícone WhatsApp"
        width="32"
        height="32"
      />
    </a>
  );
}

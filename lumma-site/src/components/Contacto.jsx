import React from "react";

function Contacto() {
  return (
    <section className="contacto" id="contacto" data-aos="fade-up">
      <h2>Contacto</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Endereço</h3>
          <p>Rua Mateus Sansão Muthemba, 412<br />Maputo, Moçambique</p>

          <h3>Telefone</h3>
          <p><a href="tel:+258851912063">+258 851 912 063</a></p>

          <h3>Email</h3>
          <p><a href="mailto:contacto@lumma.mz">contacto@lumma.mz</a></p>

          <h3>Instagram</h3>
          <p><a href="https://instagram.com/lumma.mz" target="_blank">@lumma.mz</a></p>

          <a href="https://wa.me/258851912063" className="whatsapp-btn" target="_blank">
            📲 Reservar via WhatsApp
          </a>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Rua+Mateus+Sans%C3%A3o+Muthemba,+Maputo,+Mozambique&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="extra-section">
        <h3> Perguntas Frequentes</h3>
        <details>
          <summary>Posso reservar para eventos privados?</summary>
          <p>Sim! Oferecemos reservas para aniversários, jantares empresariais e outros eventos.</p>
        </details>
        <details>
          <summary>Qual é o horário de funcionamento?</summary>
          <p>Aberto de Terça a Domingo, das 12h às 23h.</p>
        </details>
        <details>
          <summary>Há opções vegetarianas?</summary>
          <p>Claro! Nosso menu inclui pratos vegetarianos e veganos preparados com cuidado.</p>
        </details>
      </div>

      <div className="prato-do-dia">
        <h3>Prato do Dia</h3>
        <p>Polvo grelhado com purê de batata-doce e redução de vinho tinto.</p>
      </div>

      <div className="contador">Mais de <strong>89</strong> reservas feitas este mês!
      </div>
    </section>
  );
}

export default Contacto;

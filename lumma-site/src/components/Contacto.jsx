import React from "react";
import { FiMapPin, FiPhone, FiMail, FiInstagram } from "react-icons/fi";

function Contacto() {
  return (
    <section className="contacto" id="contacto" data-aos="fade-up">
      <h2>Contacto</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>
            <FiMapPin style={{ marginRight: "8px" }} />
            Endereço
          </h3>
          <p>
            Rua Mateus Sansão Muthemba, 412
            <br />
            Maputo, Moçambique
          </p>

          <h3>
            <FiPhone style={{ marginRight: "8px" }} />
            Telefone
          </h3>
          <p>
            <a href="tel:+258851912063">+258 851 912 063</a>
          </p>

          <h3>
            <FiMail style={{ marginRight: "8px" }} />
            Email
          </h3>
          <p>
            <a href="mailto:contacto@lumma.mz">contacto@lumma.mz</a>
          </p>

          <h3>
            <FiInstagram style={{ marginRight: "8px" }} />
            Instagram
          </h3>
          <p>
            <a
              href="https://instagram.com/lumma.mz"
              target="_blank"
              rel="noreferrer"
            >
              @lumma.mz
            </a>
          </p>

          <a
            href="https://wa.me/258851912063"
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            Reservar via WhatsApp
          </a>
        </div>

        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.7028155485978!2d32.58827499999999!3d-25.9777852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b4b876f0989%3A0x76e0824a1d8f05a0!2sLumma!5e0!3m2!1sen!2smz!4v1752696227278!5m2!1sen!2smz"
            allowFullScreen
            loading="lazy"
            title="Mapa do Lumma"
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

      <div className="contador">
        Mais de <strong>89</strong> reservas feitas este mês!
      </div>
    </section>
  );
}

export default Contacto;

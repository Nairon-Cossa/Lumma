import React from "react";

function Sobre() {
  return (
    <section className="sobre" id="sobre" data-aos="fade-up">
      <div className="container sobre-container">
        <div className="sobre-texto">
          <h2>Sobre Nós</h2>
          <p>
            Localizado na sofisticada Rua Mateus Sansão Muthemba, o LUMMA é mais do que um restaurante — é uma experiência sensorial que combina a riqueza da culinária moçambicana com toques internacionais de alta gastronomia.
          </p>
          <p>
            Nossa missão é oferecer pratos preparados com ingredientes frescos e selecionados, em um ambiente elegante e acolhedor, perfeito para momentos inesquecíveis.
          </p>
          <p>
            Com uma equipe dedicada e apaixonada pela arte culinária, garantimos um atendimento personalizado e uma carta de vinhos cuidadosamente selecionada para harmonizar com cada prato.
          </p>
        </div>
        <div className="sobre-imagem">
          <img src="assets/about.jpg" alt="Restaurante LUMMA" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;

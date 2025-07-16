import React from "react";

function Menu() {
  return (
    <section className="menu" id="menu" data-aos="fade-up">
      <h2>Nosso Menu</h2>
      <div className="menu-items">
        <div className="item">
          <div className="dish-name">Bife Tomahawk</div>
          <div className="dish-desc">Corte premium grelhado à perfeição com legumes salteados e molho da casa.</div>
        </div>
        <div className="item">
          <div className="dish-name">Polvo Grelhado</div>
          <div className="dish-desc">Servido com purê de abóbora e pimentão defumado.</div>
        </div>
        <div className="item">
          <div className="dish-name">Ravioli de Camarão</div>
          <div className="dish-desc">Ravioli artesanal ao molho cremoso de vinho branco.</div>
        </div>
      </div>
    </section>
  );
}

export default Menu;

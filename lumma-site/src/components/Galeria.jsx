import React from "react";

const imagens = [
  { src: "assets/food1.jpg", alt: "Prato 1" },
  { src: "assets/food2.jpg", alt: "Prato 2" },
  { src: "assets/food3.jpg", alt: "Prato 3" },
];

function Galeria() {
  return (
    <section className="galeria" id="galeria" data-aos="fade-up">
      <h2>Galeria</h2>
      <p>Explore os sabores e momentos vividos no LUMMA.</p>
      <div className="gallery-images">
        {imagens.map(({ src, alt }, i) => (
          <img key={i} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
}

export default Galeria;

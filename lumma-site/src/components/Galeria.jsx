// src/components/Galeria.jsx
const imagens = [
  "../assets/food1.jpg",
  "../assets/food2.jpg",
  "../assets/food3.jpg",
];

const Galeria = () => (
  <section id="galeria" className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 transition-all">
    <div className="max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-lumma-gold mb-10">
  Galeria
</h2>

      <p className="text-center text-zinc-600 dark:text-zinc-300 mb-8">
        Explore os sabores e momentos vividos no LUMMA.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {imagens.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagem ${i + 1}`}
            className="w-full h-72 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Galeria;

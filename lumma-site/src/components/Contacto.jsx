// src/components/Contacto.jsx
const Contacto = () => (
  <section
    id="contacto"
    className="py-20 px-6 bg-white dark:bg-zinc-900 transition-all"
    data-aos="fade-up"
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Detalhes de contacto */}
      <div className="md:w-1/2 space-y-6">
       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lumma-gold">
  Contacto
</h2>
        <div>
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Endereço</h3>
          <p className="text-zinc-600 dark:text-zinc-300">
            Rua Mateus Sansão Muthemba, 412<br />
            Maputo, Moçambique
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Telefone</h3>
          <p><a href="tel:+258851912063" className="text-amber-700 dark:text-amber-400 hover:underline">+258 851 912 063</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Email</h3>
          <p><a href="mailto:contacto@lumma.mz" className="text-amber-700 dark:text-amber-400 hover:underline">contacto@lumma.mz</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Instagram</h3>
          <p><a href="https://instagram.com/lumma.mz" target="_blank" className="text-amber-700 dark:text-amber-400 hover:underline">@lumma.mz</a></p>
        </div>
      </div>

      {/* Mapa */}
      <div className="md:w-1/2 rounded overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Rua+Mateus+Sans%C3%A3o+Muthemba,+Maputo,+Mozambique&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md w-full"
        />
      </div>
    </div>
  </section>
);

export default Contacto;

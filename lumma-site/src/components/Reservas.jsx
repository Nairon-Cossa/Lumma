// src/components/Reservas.jsx
const Reservas = () => (
  <section id="reservas" className="py-20 px-4 bg-gray-100 dark:bg-zinc-800">
    <div className="max-w-xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-lumma-gold">
  Fazer Reserva
</h2>

      <form className="space-y-4">
        <input type="text" placeholder="Nome" className="w-full p-3 rounded border dark:bg-zinc-700" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded border dark:bg-zinc-700" />
        <input type="tel" placeholder="Telefone" className="w-full p-3 rounded border dark:bg-zinc-700" />
        <input type="date" className="w-full p-3 rounded border dark:bg-zinc-700" />
        <textarea placeholder="Notas (opcional)" className="w-full p-3 rounded border dark:bg-zinc-700" rows="4" />
        <button type="submit" className="bg-lumma-gold text-lumma-dark hover:bg-lumma-dark hover:text-lumma-beige transition px-4 py-2 rounded">
          Reservar Agora
        </button>
      </form>
    </div>
  </section>
);

export default Reservas;

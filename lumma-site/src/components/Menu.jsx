// src/components/Menu.jsx
const pratos = [
  { nome: "Bacalhau à Brás", preco: "€14" },
  { nome: "Francesinha", preco: "€12" },
  { nome: "Arroz de Polvo", preco: "€15" },
  { nome: "Picanha Grelhada", preco: "€16" },
];

const Menu = () => (
  <section id="menu" className="py-20 px-4 bg-white dark:bg-zinc-900">
    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lumma-gold">
  Nosso Menu
</h2>

      <ul className="grid md:grid-cols-2 gap-6 text-left">
        {pratos.map((prato, i) => (
          <li key={i} className="p-4 border-b border-gray-300 dark:border-zinc-700">
            <div className="flex justify-between">
              <span className="font-medium">{prato.nome}</span>
              <span>{prato.preco}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Menu;

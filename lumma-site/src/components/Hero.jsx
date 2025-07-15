// src/components/Hero.jsx
const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url('/assets/hero.jpg')` }}>
    <div className="absolute inset-0 bg-black bg-opacity-60" />
    <div className="relative text-center text-white z-10 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao LUMMA</h1>
      <p className="text-lg md:text-xl">Sabores autênticos, experiências memoráveis</p>
    </div>
  </section>
);

export default Hero;

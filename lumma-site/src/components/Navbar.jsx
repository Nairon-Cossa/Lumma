import { useEffect, useState } from "react";

const Navbar = ({ toggleDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <img src="/assets/Logo.jpg" alt="LUMMA" className="h-10" />

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#reservas" className="hover:underline">Reservas</a>
          <a href="#galeria" className="hover:underline">Galeria</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              document.getElementById("reservas").scrollIntoView({ behavior: "smooth" })
            }
            className="bg-lumma-gold text-lumma-dark hover:bg-lumma-dark hover:text-lumma-beige transition px-4 py-2 rounded text-sm"
          >
            Reservar
          </button>
          <button onClick={toggleDark} className="text-xl">🌓</button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl ml-2 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 text-white px-4 py-4 space-y-2">
          <a href="#sobre" className="block" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#menu" className="block" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#reservas" className="block" onClick={() => setMenuOpen(false)}>Reservas</a>
          <a href="#galeria" className="block" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#contacto" className="block" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

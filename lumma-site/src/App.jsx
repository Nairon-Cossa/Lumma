// src/App.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans`}>
      <div className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-all duration-300">
        <Navbar toggleDark={() => setDarkMode(!darkMode)} />
        <Hero />
        <Sobre />
        <Menu />
        <Reservas />
        <Galeria />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;

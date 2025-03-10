import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Piero Guerrero</h1>

        {/* Contenedor de los botones en móvil */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Botón para cambiar el tema */}
          <button 
            onClick={toggleTheme} 
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Botón del menú hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl z-50 relative"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú de navegación */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 transition-transform transition-opacity duration-300 md:relative md:h-auto md:flex-row md:space-x-6 md:space-y-0 md:bg-transparent md:p-0 ${
            menuOpen 
              ? "translate-x-0 opacity-100"  // Aparece suavemente
              : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0" // Se oculta correctamente
          }`}
        >

          <li><Link to="/" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/about" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Sobre Mí</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Habilidades</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>

        {/* Botón de modo oscuro en escritorio */}
        <div className="hidden md:block">
          <button 
            onClick={toggleTheme} 
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

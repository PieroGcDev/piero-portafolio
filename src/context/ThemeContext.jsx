import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del tema
export function ThemeProvider({ children }) {
  // Estado para almacenar el tema
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Efecto para actualizar el `localStorage` y la clase del `html`
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";

export default function Home() {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* Texto de Bienvenida con Animación */}
      <motion.h1
        id="home"
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a mi Portafolio
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Descubre mis proyectos y habilidades en desarrollo web y tecnología.
      </motion.p>

      {/* Carrusel de Tecnologías */}
      <div className="w-full overflow-hidden mt-12">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm mt-2 text-gray-800 dark:text-gray-300">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botón Animado "Ver Proyectos" */}
      <motion.div
        className="mt-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <Link to="/projects">
          <button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition duration-300 shadow-lg">
            Ver Proyectos
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Sistema de Detección de Ciberataques",
    description:
      "Implementación de un sistema basado en Machine Learning para la detección y prevención de ciberataques.",
    image: "/images/ciberataques.jpg",
    link: "https://github.com/PieroGuerrero/proyecto-ciberataques",
  },
  {
    id: 2,
    title: "Gestor de Donaciones para Arzobispado",
    description:
      "Plataforma web para registrar y gestionar donaciones de iglesias en un arzobispado.",
    image: "/images/donaciones.jpg",
    link: "https://github.com/PieroGuerrero/proyecto-donaciones",
  },
  {
    id: 3,
    title: "Portafolio Personal",
    description: "Este mismo portafolio creado con React y Tailwind CSS.",
    image: "/images/portafolio.jpg",
    link: "https://github.com/PieroGuerrero/piero-portafolio",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-6 pt-28"
      initial={{ opacity: 0, y: 30 }} // Menos movimiento hacia arriba
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }} // Transición más rápida
    >
      {/* Animación del título corregida */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }} // Ya no se mueve tanto hacia arriba
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Mis Proyectos
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25, // ⬅ Un solo transition
              delay: project.id * 0.1,
              ease: "easeOut",
          }}
        >
        
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 dark:text-blue-300 hover:underline"
            >
              Ver en GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

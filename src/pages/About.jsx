import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Sobre Mí</h2>
      <div className="max-w-3xl text-center">
        <motion.img
          src="/perfil.jpeg"
          alt="Foto de Piero Guerrero"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <p className="text-lg leading-relaxed">
          ¡Hola! Soy <span className="text-blue-400 font-bold">Piero Guerrero</span>, desarrollador apasionado por la creación de aplicaciones web y móviles.  
          Me especializo en tecnologías como <strong>React, Node.js, Python</strong> y <strong>UI/UX</strong>.  
          Busco innovar con soluciones tecnológicas eficientes y de alto impacto.
        </p>
        <p className="mt-4">
          Actualmente, estoy explorando el mundo de <strong>la inteligencia artificial y la automatización</strong>, aplicándolos en proyectos para mejorar la productividad y eficiencia.
        </p>
      </div>
    </motion.section>
  );
}

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-100">Contáctame</h2>
      <motion.form
        className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold">Nombre</label>
          <input
            type="text"
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tucorreo@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Mensaje</label>
          <textarea
            rows="4"
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition p-2 rounded font-semibold shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

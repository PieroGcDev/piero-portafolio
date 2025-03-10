import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <motion.div
              className="text-5xl transition-transform hover:scale-125"
              whileHover={{ scale: 1.25 }}
            >
              {skill.icon}
            </motion.div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

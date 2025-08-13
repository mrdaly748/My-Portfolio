import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";

const techStack = [
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={70} /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" size={70} /> },
  { name: "React.js", icon: <FaReact color="#61DBFB" size={70} /> },
  { name: "Node.js", icon: <FaNodeJs color="#8CC84B" size={70} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" size={70} /> },
];

export default function TechStack() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Portfolio-wide header component */}
        <TitleHeader
          title="My Tech Stack"
          sub="⚡ The main technologies I work with to bring projects to life"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

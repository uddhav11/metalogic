import { SectionTitle } from '../common/SectionTitle';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker } from 'react-icons/si';

const technologies = [
  { icon: <FaReact size={32} className="text-blue-500" />, name: "React" },
  { icon: <SiTypescript size={32} className="text-blue-600" />, name: "TypeScript" },
  { icon: <SiNextdotjs size={32} className="text-black" />, name: "Next.js" },
  { icon: <SiTailwindcss size={32} className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={32} className="text-green-600" />, name: "Node.js" },
  { icon: <FaPython size={32} className="text-blue-400" />, name: "Python" },
  { icon: <FaAws size={32} className="text-orange-500" />, name: "AWS" },
  { icon: <SiDocker size={32} className="text-blue-400" />, name: "Docker" },
];

export const TechStackSection = () => {
  return (
    <section id="tech" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Tech Stack" 
          subtitle="Modern technologies we work with"
        />
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
            >
              {tech.icon}
              <span className="mt-2 text-sm font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
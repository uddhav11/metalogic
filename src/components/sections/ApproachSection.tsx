import { SectionTitle } from '../common/SectionTitle';
import { motion } from 'framer-motion';
import { FiLayers, FiUsers, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';

const approachSteps = [
  {
    icon: <FiLayers size={24} className="text-indigo-600" />,
    title: "Discovery",
    description: "We analyze your requirements and define project scope."
  },
  {
    icon: <FiUsers size={24} className="text-indigo-600" />,
    title: "Design",
    description: "We create user-centric designs and architecture."
  },
  {
    icon: <FiRefreshCw size={24} className="text-indigo-600" />,
    title: "Development",
    description: "We build your solution with agile methodologies."
  },
  {
    icon: <FiCheckCircle size={24} className="text-indigo-600" />,
    title: "Delivery",
    description: "We deploy and maintain your application."
  }
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Approach" 
          subtitle="A proven process for delivering successful projects"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-50 rounded-full mr-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
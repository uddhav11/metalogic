import { motion } from 'framer-motion';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Software Development Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We build scalable, high-performance applications tailored to your business needs.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
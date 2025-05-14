import { Button } from '../common/Button';
import { motion } from 'framer-motion';

export const CtaSection = () => {
  return (
    <section id="contact" className="py-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="w-full sm:w-auto">
              Contact Us
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
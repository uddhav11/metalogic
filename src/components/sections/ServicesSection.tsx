import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { FiCode, FiDatabase, FiSmartphone, FiCloud } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode size={32} className="text-indigo-600" />,
    title: "Custom Web Development",
    description: "Tailored web applications built with modern frameworks to meet your specific business requirements."
  },
  {
    icon: <FiSmartphone size={32} className="text-indigo-600" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that deliver seamless user experiences across devices."
  },
  {
    icon: <FiDatabase size={32} className="text-indigo-600" />,
    title: "Backend Development",
    description: "Robust backend systems with scalable architecture to power your applications."
  },
  {
    icon: <FiCloud size={32} className="text-indigo-600" />,
    title: "Cloud Solutions",
    description: "Cloud-native applications and migration services to optimize your infrastructure."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive solutions for your digital transformation"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
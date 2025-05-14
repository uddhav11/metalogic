import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
// import { ServicesSection } from './components/sections/ServicesSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { CtaSection } from './components/sections/CtaSection';
import {ServicesSection} from './components/sections/ServicesSection.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <TechStackSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
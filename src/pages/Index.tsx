
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;

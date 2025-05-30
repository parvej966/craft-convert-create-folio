
const services = [
  {
    title: "UX/UI Design",
    description: "Complete digital product design from research to high-fidelity prototypes that convert visitors into customers.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
    price: "Starting at $5,000"
  },
  {
    title: "Conversion Optimization",
    description: "Data-driven improvements to existing designs that boost your conversion rates and revenue.",
    features: ["Conversion Audits", "A/B Testing Strategy", "Landing Page Optimization", "User Flow Analysis"],
    price: "Starting at $3,000"
  },
  {
    title: "Design Strategy",
    description: "Strategic design consultation to align your product vision with user needs and business goals.",
    features: ["Design Strategy Workshop", "Competitive Analysis", "User Journey Mapping", "Design Roadmap"],
    price: "Starting at $2,500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services that scale your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need a complete redesign or optimization of existing products, I deliver design solutions that directly impact your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  {service.price}
                </div>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service fits your needs?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 text-lg"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

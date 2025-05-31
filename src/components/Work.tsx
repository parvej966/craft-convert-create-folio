
const projects = [
  {
    id: 1,
    title: "FinTech Mobile App Redesign",
    description: "Increased user engagement by 85% through intuitive navigation and streamlined onboarding for a leading financial platform.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile Design", "UX Research", "Prototyping"]
  },
  {
    id: 2,
    title: "E-commerce Platform Optimization",
    description: "Boosted conversion rates by 45% with strategic redesign of checkout flow and product discovery for fashion retailer.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["E-commerce", "Conversion Optimization", "A/B Testing"]
  },
  {
    id: 3,
    title: "SaaS Dashboard Interface",
    description: "Reduced user onboarding time by 60% with clean data visualization and progressive disclosure for analytics platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Dashboard Design", "Data Visualization", "Enterprise UX"]
  },
  {
    id: 4,
    title: "Healthcare App Redesign",
    description: "Improved patient satisfaction scores by 70% through accessible design and simplified appointment booking system.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Healthcare", "Accessibility", "User Research"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. Here's how I've helped businesses transform their digital presence into conversion machines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg"
          >
            Get a Free Design Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;

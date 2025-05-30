
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            I craft digital experiences that{' '}
            <span className="text-gray-600">convert</span>, not just impress.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Strategic UX/UI design for ambitious brands who want to turn visitors into customers and ideas into measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg"
            >
              Let's Build Something Great
            </button>
            
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 text-lg"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

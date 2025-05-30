
const skills = [
  "User Experience Design", "User Interface Design", "Design Systems", 
  "Prototyping", "User Research", "A/B Testing", "Conversion Optimization", "Figma", "Adobe Creative Suite"
];

const testimonials = [
  {
    quote: "Ahmed transformed our conversion rate from 2% to 7% in just 8 weeks. Her strategic approach to UX is unmatched.",
    author: "Sarah Chen",
    title: "VP of Product, TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Working with Ahmed was a game-changer. She doesn't just design – she solves business problems through design.",
    author: "Marcus Johnson",
    title: "Founder, GrowthLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Design that drives results, not just applause.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Parvej Ahmed, a conversion-focused UX/UI designer with 3+ years of experience turning complex business challenges into intuitive digital solutions.
              </p>
              
              <p>
                After helping 50+ companies increase their conversion rates by an average of 67%, I've learned that great design isn't just about aesthetics – it's about understanding human psychology and business goals.
              </p>
              
              <p>
                When I'm not optimizing user flows, you'll find me mentoring junior designers, speaking at design conferences, or exploring the latest in behavioral psychology.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <img 
                src="https://unsplash.com/photos/b_oPtsbWXrw&auto=format&fit=crop&w=600&q=80"
                alt="Parvej Ahmed"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What clients say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

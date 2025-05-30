
import { useState } from 'react';
import { linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to boost your conversions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how strategic design can transform your business. I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's start a conversation
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a href="mailto:alex@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    alex@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <linkedin className="w-6 h-6 text-gray-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <a href="https://linkedin.com/in/alexmorgan" className="text-gray-600 hover:text-gray-900 transition-colors">
                    linkedin.com/in/alexmorgan
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">What to expect:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Response within 24 hours</li>
                <li>• Free 30-minute consultation call</li>
                <li>• Custom proposal tailored to your needs</li>
                <li>• Transparent pricing and timeline</li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="ux-ui-design">UX/UI Design</option>
                  <option value="conversion-optimization">Conversion Optimization</option>
                  <option value="design-strategy">Design Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Tell me about your project goals, timeline, and any specific challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg"
              >
                Contact Me Today
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

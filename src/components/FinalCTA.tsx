import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        location: ''
      });
    }, 1000);
  };

  const handleGetStarted = () => {
    alert('Thank you for your interest! In a real implementation, this would open a contact form or redirect to a booking page.');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I want to build a website for my business at ₹33/day', '_blank');
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-teal-900 via-green-900 to-sky-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full mb-8 font-semibold">
          <CheckCircle className="w-5 h-5" />
          Ready to Get Started?
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Be Visible. Be Trusted.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Be Found Online.
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of Northeast tourism businesses that are growing online. Let's build your website today.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-white text-sm font-semibold mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Your Business Name"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="location" className="block text-white text-sm font-semibold mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="City, State"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-lg text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? 'Submitting...' : 'Get Started Today'}
            {!isSubmitting && <ArrowRight className="w-5 h-5" />}
          </button>

          {submitMessage && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-100 text-center">
              {submitMessage}
            </div>
          )}
        </form>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={handleGetStarted}
            className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            Start My Website @ ₹33/Day
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="group px-10 py-5 bg-green-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Talk to Our Team on WhatsApp
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">₹999/mo</div>
              <div className="text-sm text-gray-300">Just ₹33 per day</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5-7 Days</div>
              <div className="text-sm text-gray-300">Your site goes live</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction guarantee</div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mt-8">
          No setup fees • Cancel anytime • Free updates for 1 year
        </p>
      </div>
    </section>
  );
}

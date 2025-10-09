import { Globe, TrendingUp, Mail, Share2, Award, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Appear on Google',
    description: 'Get discovered when tourists search for services in your area',
    color: 'from-blue-500 to-sky-500'
  },
  {
    icon: Award,
    title: 'Build Trust',
    description: 'A professional website makes your business look credible and reliable',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Mail,
    title: 'Get Direct Inquiries',
    description: 'Let customers contact you directly without middlemen or commissions',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Share2,
    title: 'Link Your Social Media',
    description: 'Connect Instagram, Facebook, WhatsApp all in one place',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Boost Credibility',
    description: 'Stand out from competitors who only have social media pages',
    color: 'from-red-500 to-orange-500'
  }
];

export default function Solution() {
  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full mb-6">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Website is the Heart of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">
              Your Online Presence
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.slice(0, 3).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.slice(3).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-sky-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Build My Website
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

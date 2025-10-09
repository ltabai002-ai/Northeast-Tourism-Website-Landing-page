import { Award, Briefcase, HeadphonesIcon, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '5+ Years in Web Design',
    description: 'Proven track record of creating successful websites for businesses across Northeast India',
    color: 'from-blue-500 to-sky-500'
  },
  {
    icon: Briefcase,
    title: '50+ Tourism Projects',
    description: 'Specialized experience in travel, hospitality, and tourism website development',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: HeadphonesIcon,
    title: '100% Local Support',
    description: 'Based in Northeast India. We understand your market and speak your language',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Zap,
    title: 'Free Hosting & SEO Setup',
    description: 'Your website will be fast, secure, and optimized for Google search from day one',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function WhyTrustUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full mb-6 font-semibold">
            <Award className="w-5 h-5" />
            Your Trusted Partner
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Businesses<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">
              Trust Us
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent hover:-translate-y-2"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-sky-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We're not just building websites — we're building partnerships
          </h3>
          <p className="text-lg text-teal-100 max-w-3xl mx-auto">
            Our success is measured by your growth. When you get more bookings, we celebrate with you.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Zap, Check, ArrowRight, Clock } from 'lucide-react';

const features = [
  'Custom Tourism Website Design',
  'Free Domain & Hosting Included',
  'Mobile-Responsive Layout',
  'Google Search Integration',
  'Social Media Links Setup',
  'Contact Form & WhatsApp Button',
  'Photo Gallery',
  'Free Updates for 1 Year'
];

export default function UrgencyOffer() {
  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 font-semibold animate-pulse">
            <Zap className="w-5 h-5" />
            Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Now's Your Chance — Get a Professional<br />
            Website at Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">₹33/Day</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a tourism-ready website designed, hosted, and maintained — for the <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">cost of one cup of tea</span> per day.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-500">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-4">
                <Clock className="w-4 h-4" />
                Limited: Only 25 Spots Available
              </div>
              <div className="text-white">
                <div className="text-6xl md:text-7xl font-bold mb-2">₹33</div>
                <div className="text-2xl md:text-3xl mb-2">per day</div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Everything You Need to Get Started:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 mb-8 border border-orange-200">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Limited Offer — Only for 25 Northeast Businesses</h4>
                    <p className="text-gray-700">
                      We're launching this special pricing for the first 25 tourism businesses from Northeast India. Once spots are filled, pricing returns to ₹1,999/month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Claim My Website @ ₹33/Day
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-500 mt-4">No setup fees. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

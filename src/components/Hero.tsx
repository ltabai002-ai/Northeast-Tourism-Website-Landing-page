import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Northeast India Mountains"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The World Is Discovering the Northeast India —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-300">
              Are They Discovering You?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Be visible on Google. Build trust. Grow your tourism business with a professional website — starting at just <span className="font-bold text-yellow-300">₹33/day</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get My Website Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

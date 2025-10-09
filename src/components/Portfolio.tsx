import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    type: 'Homestay',
    name: 'Mountain View Homestay',
    location: 'Shillong, Meghalaya',
    image: 'bg-gradient-to-br from-teal-400 via-green-500 to-emerald-600',
    result: 'Direct bookings increased by 60% in first 3 months',
    rating: 4.9
  },
  {
    type: 'Travel Agency',
    name: 'Northeast Explorer Tours',
    location: 'Guwahati, Assam',
    image: 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600',
    result: 'Now appearing on first page of Google for key searches',
    rating: 4.8
  },
  {
    type: 'Café',
    name: 'Cloud 9 Café & Bistro',
    location: 'Gangtok, Sikkim',
    image: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-600',
    result: 'Website visits converted to 40% more walk-ins',
    rating: 4.9
  },
  {
    type: 'Handicrafts',
    name: 'Tribal Artisan Collective',
    location: 'Kohima, Nagaland',
    image: 'bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600',
    result: 'Online sales now 50% of total revenue',
    rating: 5.0
  },
  {
    type: 'Adventure Tours',
    name: 'Wild Arunachal Adventures',
    location: 'Tawang, Arunachal Pradesh',
    image: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600',
    result: 'Bookings tripled after website launch',
    rating: 4.9
  },
  {
    type: 'Hotel',
    name: 'Heritage Stay Inn',
    location: 'Imphal, Manipur',
    image: 'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600',
    result: 'Reduced dependency on OTAs by 70%',
    rating: 4.7
  }
];

const testimonials = [
  {
    quote: "After launching our site, we got more direct bookings and saved thousands in commission fees!",
    author: "Rajesh Kumar",
    business: "Mountain View Homestay"
  },
  {
    quote: "The team understood our local market perfectly. Now tourists find us on Google before they even arrive.",
    author: "Priya Sharma",
    business: "Northeast Explorer Tours"
  },
  {
    quote: "Best investment we made. Our website pays for itself every single week.",
    author: "David Lyngdoh",
    business: "Cloud 9 Café"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-6 py-3 rounded-full mb-6 font-semibold">
            <Star className="w-5 h-5" />
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped Northeast tourism businesses grow their online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-2">
                    {project.type}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-gray-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(project.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{project.rating}</span>
                </div>
                <p className="text-gray-600 italic">"{project.result}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="text-6xl text-teal-200 absolute -top-4 -left-2">"</div>
                <div className="relative z-10 pt-6">
                  <p className="text-gray-700 mb-4 italic leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

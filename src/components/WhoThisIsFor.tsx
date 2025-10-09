import { Plane, Home, Coffee, ShoppingBag, Car, Calendar } from 'lucide-react';

const businesses = [
  { icon: Plane, label: 'Travel Agencies', color: 'from-sky-500 to-blue-500' },
  { icon: Home, label: 'Hotels & Homestays', color: 'from-teal-500 to-green-500' },
  { icon: Coffee, label: 'Cafés & Restaurants', color: 'from-orange-500 to-red-500' },
  { icon: ShoppingBag, label: 'Handicrafts', color: 'from-purple-500 to-pink-500' },
  { icon: Car, label: 'Rental Services', color: 'from-yellow-500 to-orange-500' },
  { icon: Calendar, label: 'Event Organizers', color: 'from-indigo-500 to-purple-500' },
];

export default function WhoThisIsFor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            If You're Part of Northeast's Tourism Growth,<br />
            <span className="text-teal-600">This is for You!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If you're running a travel agency, homestay, hotel, café, adventure or event business, congratulations — you're contributing to Northeast's growing tourism economy. But <span className="font-semibold text-gray-900">are you visible online?</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${business.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{business.label}</h3>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${business.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

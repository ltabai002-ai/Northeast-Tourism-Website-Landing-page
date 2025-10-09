import { TrendingUp, Users, MapPin, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '3x', label: 'Domestic Visitors', sublabel: 'Last 3 Years', color: 'from-blue-500 to-sky-500' },
  { icon: MapPin, value: '5x', label: 'Business Listings', sublabel: 'Online Growth', color: 'from-teal-500 to-green-500' },
  { icon: Star, value: '₹5000Cr+', label: 'Tourism Revenue', sublabel: 'Annual Growth', color: 'from-orange-500 to-yellow-500' },
  { icon: TrendingUp, value: '40%', label: 'Year-on-Year', sublabel: 'Tourist Increase', color: 'from-purple-500 to-pink-500' }
];

export default function TourismBoom() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-green-800 to-sky-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full mb-6 font-semibold">
            <TrendingUp className="w-5 h-5" />
            The Perfect Time
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The World Is Discovering the Northeast —<br />
            <span className="text-yellow-300">Are They Discovering You?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            In the last few years, tourism in Northeast India has grown rapidly. Now is the best time to establish your business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The tourism wave is here. Will you ride it or watch from the shore?
          </h3>
          <p className="text-lg text-gray-800">
            Businesses with a strong online presence are capturing the majority of this growth.
          </p>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Sparkles } from 'lucide-react';

export default function TourismBoom() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-green-800 to-sky-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full mb-6 font-semibold">
            <TrendingUp className="w-5 h-5" />
            The Perfect Time
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Turn Tourists into Customers —<br />
            <span className="text-yellow-300">Build a Stunning Website<br />for Your Northeast Business</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            <p>
              In the past few years, the Northeast has transformed into one of India's most loved travel destinations.
            </p>
            <p className="font-semibold text-white">
              Over 1.25 crore travelers explored the region in 2023, up from just 95 lakh in 2019 — and the growth shows no signs of slowing.
            </p>
            <p>
              Tourists are flooding into our hills, cafés, homestays, and adventure spots — but online, they only find the businesses that are visible.
            </p>
            <p className="font-semibold text-yellow-300">
              This is your chance to stand out.
            </p>
            <p>
              Build a professional website, show up on Google, and let travelers choose you when they plan their next trip.
            </p>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl">
            <Sparkles className="w-6 h-6" />
            This is not a trend — it's your moment.
          </div>
        </div>
      </div>
    </section>
  );
}

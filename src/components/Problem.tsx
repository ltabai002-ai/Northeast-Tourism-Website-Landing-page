import { Search, AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">The Visibility Gap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            People Search Before They Travel.<br />
            <span className="text-red-600">Are You Being Found?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tourists from outside the Northeast search for <span className="font-semibold text-gray-900">services on Google</span> and Instagram before they arrive. If your <span className="font-semibold text-gray-900">business website doesn't appear</span> there, you're <span className="font-semibold text-red-600">losing real customers</span>. Website build trust and make your business a brand and tourists always prefer website.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-teal-600 to-sky-600 p-6">
              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value="Best homestay in Shillong"
                  disabled
                  className="flex-1 text-gray-700 font-medium bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mountain View Homestay</h4>
                  <p className="text-sm text-gray-600">Professional website • Direct bookings • 50+ reviews</p>
                  <p className="text-xs text-green-600 mt-2 font-medium">✓ This business appears first</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl opacity-50">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                  ?
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Your Business Name</h4>
                  <p className="text-sm text-gray-500">No website • Not visible on Google</p>
                  <p className="text-xs text-red-600 mt-2 font-medium">✗ Missing from search results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

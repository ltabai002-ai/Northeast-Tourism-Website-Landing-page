export default function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById('final-cta');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/ltabai logo.jpg"
              alt="LTAB AI Logo"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              LTAB AI
            </h1>
          </div>
          <button
            onClick={scrollToForm}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </header>
  );
}

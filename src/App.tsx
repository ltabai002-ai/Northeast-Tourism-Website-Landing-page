import Header from './components/Header';
import Hero from './components/Hero';
import WhoThisIsFor from './components/WhoThisIsFor';
import Problem from './components/Problem';
import Solution from './components/Solution';
import TourismBoom from './components/TourismBoom';
import UrgencyOffer from './components/UrgencyOffer';
import WhyTrustUs from './components/WhyTrustUs';
import Portfolio from './components/Portfolio';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TourismBoom />
      <Problem />
      <WhoThisIsFor />
      <UrgencyOffer />
      <Solution />
      <WhyTrustUs />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;

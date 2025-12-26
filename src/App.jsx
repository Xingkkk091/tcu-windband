import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import About from './components/About';
import Faculty from './components/Faculty';
import Instruments from './components/Instruments';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import AudioVisualizer from './components/AudioVisualizer';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home Page Component
const Home = () => (
  <div className="bg-gray-50 min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900">
    <Navbar />
    <main>
      <Hero />
      <AudioVisualizer />
      <News />
      <About />
      <Gallery />
      <Faculty />
      <Instruments />
      <Team />
      <Schedule />
    </main>
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
);

function App() {
  return (
    <Router basename="/tcu-windband">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

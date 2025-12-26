import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <AudioVisualizer />
    <News />
  </>
);

const App = () => {
  // Determine basename based on environment
  const basename = import.meta.env.MODE === 'production' ? '/tcu-windband' : '/';

  return (
    <Router basename={basename}>
      <ScrollToTopOnMount />
      <div className="font-sans text-gray-900 bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;

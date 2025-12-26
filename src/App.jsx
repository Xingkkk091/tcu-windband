import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import About from './components/About';
import Faculty from './components/Faculty';
import Instruments from './components/Instruments';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home Page Component
const Home = () => (
  <div className="bg-gray-50 min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900">
    <Navbar />
    <main>
      <Hero />
      <News />
      <About />
      <Faculty />
      <Instruments />
      <Team />
      <Schedule />
    </main>
    <Contact />
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

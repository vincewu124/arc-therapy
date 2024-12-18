import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Faq from './components/faq/Faq';
import Terms from './components/terms/Terms';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Header></Header>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

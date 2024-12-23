import React, { useEffect, useState } from 'react';
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
  const [images, setImages] = useState([]);

  useEffect(() => {
    const preloadImages = (srcArray) => {
      const loadedImages = srcArray.map((src) => {
        const img = new Image();
        img.src = src;
        return img.src;
      });
      return loadedImages;
    };

    const imagePaths = [
      new URL('./assets/services/serviceMassage.jpg', import.meta.url).href,
      new URL('./assets/services/servicePhysio.jpg', import.meta.url).href,
      new URL('./assets/services/serviceKin.jpg', import.meta.url).href,
      new URL('./assets/services/serviceChiro.jpg', import.meta.url).href,
      new URL('./assets/services/serviceAcu.jpg', import.meta.url).href,
    ];

    setImages(preloadImages(imagePaths));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Header></Header>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services images={images} />} />
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

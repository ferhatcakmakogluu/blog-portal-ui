import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Details from './pages/Details.tsx';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import About from './pages/About';
import './App.css';
import { AlertProvider } from './context/AlertContext';
import AOS from 'aos';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <AlertProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/haber/:id" element={<Details />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/galeri/:id" element={<GalleryDetail />} />
            <Route path="/hakkimizda" element={<About />} />
          </Routes>
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;

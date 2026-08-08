import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Consultancy from './pages/Consultancy';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyWidgets from './components/StickyWidgets';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StickyWidgets />
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

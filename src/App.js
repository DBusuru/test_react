import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from './components/Body';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

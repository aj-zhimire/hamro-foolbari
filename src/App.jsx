import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Curriculum from './pages/Curriculum';
import Governance from './pages/Governance';
import WhyRamechhap from './pages/WhyRamechhap';
import Progress from './pages/Progress';
import Transparency from './pages/Transparency';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/why-ramechhap" element={<WhyRamechhap />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/transparency" element={<Transparency />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;

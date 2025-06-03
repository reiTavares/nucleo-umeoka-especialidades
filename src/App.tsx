import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import Exams from './components/Exams';
import Facility from './components/Facility';
import Insurance from './components/Insurance';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Exams />
        <Facility />
        <Insurance />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;

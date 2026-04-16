
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import QuoteRequest from './components/QuoteRequest';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <QuoteRequest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

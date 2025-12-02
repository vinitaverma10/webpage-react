import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import FeaturesBanner from './components/FeaturesBanner';
import ContactModal from './components/ContactModal';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Products />
      <FeaturesBanner />
      <ContactModal />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
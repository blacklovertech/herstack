import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BuildingTogether } from './components/BuildingTogether';
import { DeveloperJourney } from './components/DeveloperJourney';
import { Impact } from './components/Impact';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <BuildingTogether />
        <DeveloperJourney />
        <Impact />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

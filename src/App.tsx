import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;
import React from 'react';
import { ArrowRight, Calendar, Play } from 'lucide-react';

const CTA = () => {
  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            If you don't know
            <span className="text-red-400 block mt-2">what's working</span>
            <span className="text-gray-400 block mt-2">you're flying blind.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop guessing where your best users come from. Start tracking wallet-based attribution that actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25 flex items-center space-x-2">
              <Calendar className="w-5 h-5 group-hover:animate-pulse" />
              <span>Book Discovery Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-gray-600 hover:border-sky-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-sky-400/10 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:text-sky-400" />
              <span>View Demo</span>
            </button>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p>✓ 5-minute setup • ✓ No code required • ✓ 14-day free trial</p>
            <p>Join 150+ Web3 teams who stopped guessing and started growing</p>
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4 z-50 lg:hidden">
        <div className="max-w-sm mx-auto">
          <button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Book Discovery Call</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-white">JsonAnalytix</span>
            </div>
            
            <div className="flex space-x-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2024 JsonAnalytix. Built for Web3 teams who refuse to fly blind.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTA;
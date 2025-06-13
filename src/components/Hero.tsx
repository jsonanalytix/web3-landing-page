import React, { useEffect, useState } from 'react';
import { BarChart3, Zap, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-sky-400 rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <BarChart3 className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                JsonAnalytix
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Guessing.
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Start Tracking
            </span>
            <br />
            Wallet-Based Growth.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We help Web3 teams discover where their best users come from — and what they do after they connect.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25 flex items-center space-x-2">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>Book a Discovery Call</span>
            </button>
            <button className="group border-2 border-gray-600 hover:border-sky-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-sky-400/10 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:text-sky-400" />
              <span>See Dashboard Demo</span>
            </button>
          </div>

          {/* Dashboard preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-400 ml-4 font-mono">dashboard.jsonanalytix.com</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {['Active Wallets', 'Conversion Rate', 'Attribution Score'].map((label, i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-sky-400">
                          {i === 0 ? '12.4K' : i === 1 ? '23.7%' : '8.9/10'}
                        </div>
                        <div className="text-sm text-gray-400">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-32 bg-gray-700/30 rounded-lg flex items-end justify-between px-4 pb-4">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-sky-500 to-cyan-400 rounded-t"
                        style={{ height: `${40 + Math.random() * 60}%`, width: '6%' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
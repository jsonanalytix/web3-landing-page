import React, { useEffect, useRef, useState } from 'react';
import { Activity, Target, Filter } from 'lucide-react';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Activity,
      title: "Track On-Chain Funnels",
      description: "See how wallets move through staking, bridging, minting, and more.",
      features: ["Real-time transaction tracking", "Multi-chain support", "Custom event mapping"],
      gradient: "from-sky-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Source Attribution",
      description: "UTM + campaign-level insights tied to wallet actions.",
      features: ["Campaign performance", "Influencer ROI tracking", "Cross-platform attribution"],
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      icon: Filter,
      title: "Segment by Value",
      description: "Filter whales, lurkers, and loyal users by behavior + holdings.",
      features: ["Whale identification", "Behavior clustering", "Value-based segmentation"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Introducing
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
              Wallet-Native Analytics
            </span>
            for Web3
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sky-400 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-400/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Stop flying blind. See exactly what's driving your Web3 growth.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
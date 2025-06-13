import React, { useEffect, useRef, useState } from 'react';
import { Quote, TrendingUp, Zap } from 'lucide-react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ wallets: 0, protocols: 0, attribution: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { wallets: 2.4, protocols: 150, attribution: 89 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        wallets: Number((targets.wallets * progress).toFixed(1)),
        protocols: Math.floor(targets.protocols * progress),
        attribution: Math.floor(targets.attribution * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const testimonials = [
    {
      quote: "Uncovered 6-figure wallets driven by one Discord collab.",
      author: "Sarah Chen",
      role: "Growth Lead at DeFiProtocol",
      impact: "+340% whale acquisition"
    },
    {
      quote: "Increased staking completion by 27% after funnel visibility.",
      author: "Marcus Rodriguez",
      role: "Head of Product at StakeDAO",
      impact: "27% conversion boost"
    },
    {
      quote: "Finally know which influencers actually drive value, not just noise.",
      author: "Alex Kim",
      role: "Marketing Director at NFTMarket",
      impact: "60% better ROI"
    }
  ];

  const logos = [
    "DeFiProtocol", "StakeDAO", "NFTMarket", "ChainBridge", "TokenSwap", "MetaVault"
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {counters.wallets}M+
            </div>
            <div className="text-gray-400">Wallets Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {counters.protocols}+
            </div>
            <div className="text-gray-400">Web3 Protocols</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {counters.attribution}%
            </div>
            <div className="text-gray-400">Attribution Accuracy</div>
          </div>
        </div>

        {/* Social Proof Header */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Used by DeFi, DAOs & NFT Projects
          </h2>
          <p className="text-xl text-gray-400">Join teams that stopped guessing and started growing</p>
        </div>

        {/* Logo Cloud */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3 hover:border-sky-400/50 transition-colors duration-300"
            >
              <span className="text-gray-300 font-semibold">{logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-sky-400 mb-4" />
              <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1">
                  <span className="text-sm text-green-400 font-medium">{testimonial.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
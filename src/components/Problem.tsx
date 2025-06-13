import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const Problem = () => {
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

  const problems = [
    {
      icon: TrendingDown,
      text: "You spent $20K on influencers — which wallets actually converted?",
      delay: 0
    },
    {
      icon: Users,
      text: "Where do your whales come from?",
      delay: 200
    },
    {
      icon: AlertCircle,
      text: "40% of your users connect… and then disappear.",
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Web3 Growth is
            <span className="text-red-400 block mt-2">Blind Without Attribution</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem statements */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${problem.delay}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Animated funnel visualization */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-300">Your Current Attribution</h3>
              
              <div className="space-y-4">
                {/* Funnel stages */}
                {[
                  { label: 'Traffic Sources', width: '100%', users: '10,000', color: 'bg-gray-500' },
                  { label: 'Wallet Connects', width: '60%', users: '6,000', color: 'bg-yellow-500' },
                  { label: 'First Action', width: '35%', users: '3,500', color: 'bg-orange-500' },
                  { label: 'Converts', width: '12%', users: '1,200', color: 'bg-red-500' }
                ].map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">{stage.label}</span>
                      <span className="text-sm font-mono text-gray-300">{stage.users}</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-8 overflow-hidden">
                      <div
                        className={`h-full ${stage.color} transition-all duration-1000 ease-out flex items-center justify-end pr-4`}
                        style={{ 
                          width: isVisible ? stage.width : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        {index === 3 && (
                          <span className="text-xs font-semibold text-white animate-pulse">
                            ???
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-400 text-center font-medium">
                  88% drop-off with zero visibility into what's working
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Shield, Eye, Zap } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      icon: Shield,
      question: "Is this GDPR safe?",
      answer: "Yes. We only track public wallet addresses and on-chain activities. No personal data is collected or stored. All data is anonymized and aggregated for privacy compliance."
    },
    {
      icon: Eye,
      question: "Does it require KYC?",
      answer: "No KYC required. Our analytics focus on wallet behavior patterns and public blockchain data. Users maintain complete anonymity while you get actionable insights."
    },
    {
      icon: Zap,
      question: "How fast is the data?",
      answer: "Real-time tracking with sub-second latency. See wallet connections, transactions, and conversions as they happen across multiple chains."
    },
    {
      question: "Which chains do you support?",
      answer: "Ethereum, Polygon, Arbitrum, Optimism, BSC, and 15+ other major chains. Multi-chain tracking comes standard with cross-chain user journey mapping."
    },
    {
      question: "Can I track specific campaigns?",
      answer: "Absolutely. Use UTM parameters, custom referral codes, or our SDK to track campaigns down to individual influencer posts, Discord shares, or Twitter threads."
    },
    {
      question: "What about wallet privacy?",
      answer: "We never expose individual wallet data. All reporting is aggregated and anonymized. Users can opt-out anytime, and we respect all privacy preferences."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions?
            <span className="text-sky-400 block mt-2">We've Got Answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-500 hover:border-sky-400/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/20 rounded-xl transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  {faq.icon && (
                    <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-sky-400" />
                    </div>
                  )}
                  <span className="text-lg md:text-xl font-semibold text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-sky-400' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="px-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="text-sky-400 hover:text-sky-300 font-semibold transition-colors duration-300">
            Schedule a technical deep-dive →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
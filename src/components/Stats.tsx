import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Award, Briefcase } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  onComplete?: () => void;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', onComplete }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const startTime = Date.now();
    const countUp = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      if (progress < 1) {
        countRef.current = Math.floor(end * progress);
        setCount(countRef.current);
        frameRef.current = requestAnimationFrame(countUp);
      } else {
        setCount(end);
        onComplete?.();
      }
    };

    frameRef.current = requestAnimationFrame(countUp);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, onComplete]);

  return (
    <span className="text-4xl font-bold">
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
  { icon: Target, label: 'Projects Completed', value: 85, suffix: '+' },
  { icon: Award, label: 'Awards Won', value: 25, suffix: '' },
  { icon: Briefcase, label: 'Years Experience', value: 5, suffix: '+' },
];

const Stats = ({ scrollY }: { scrollY: number }) => {
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

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl transform -skew-y-6"
        style={{
          transform: `skewY(-6deg) translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative group"
                style={{
                  transform: `translateY(${Math.min(50, Math.max(0, (scrollY - 1200) * 0.1))}px)`,
                  opacity: Math.min(1, (scrollY - 1200) / 400),
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-center group-hover:bg-gray-800/70 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="relative">
                    {isVisible && (
                      <Counter
                        end={stat.value}
                        duration={2000}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  
                  <p className="mt-2 text-gray-400">{stat.label}</p>
                  
                  <div className="absolute inset-0 rounded-xl bg-blue-400/5 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
import React, { useState, useEffect } from 'react';
import { Download, Send, ChevronDown, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const titles = ['Strategist', 'Enthusiast'];

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 15 : 35; // Increased writing speed

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 800);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentTitle.slice(0, prev.length + 1);
      });
    }, typeSpeed);

    return () => clearTimeout(timeout); // Correctly clearing the timeout
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float top-10 -left-20" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed top-40 -right-20" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-white mb-4">Digital Marketing</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block min-w-[280px]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              Crafting Digital Success Stories Through Strategic Marketing
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </button>

              <a 
                href="https://wa.link/gq2xv0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group px-8 py-4 border-2 border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 inline-flex"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Contact Me
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-8"
            >
              {/* <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">2+</span>
                <span className="text-sm text-gray-400">Years Learning</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-purple-400">10+</span>
                <span className="text-sm text-gray-400">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-pink-400">5+</span>
                <span className="text-sm text-gray-400">Certifications</span>
              </div> */}
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className=" lg:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-blue-400">
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="rounded-full overflow-hidden border-4 border-blue-400 group-hover:animate-glow">
                  <img
                    src="https://media-hosting.imagekit.io//735d4a500ce54194/WhatsApp%20Image%202025-01-23%20at%2023.46.58_432a7100.jpg?Expires=1832265494&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ITPjGhgk8BOuEnaySEik98uPcBUYJwWhw0RDg4d5rq0jFc14UeBSRVjPJdjMm44-GF5j5iUBQRkPmJZxHCZ2tUPaZbymijk2von5cRQmTYHG1lkZtWPFyO62MQBWnsJDFjRMs5tlWw0ia~o-0JhkR5G5JKF-kqMK9SX7vUVhsgfmWTNCvNKQl1IqYW-qEk3PAtOX5JpU2phbhPyBDGRxZbEooV6D5oslXDmhrYeAvPBpGbSSIsuVufPx949GhKxYnWmtYiKpOJ5vi9-hToot5KFjETWTru3I0sXRbOzN9jMWId0UpF4R40ueUJjDuxHN4eV6TLsNwgYA1xoSrAtPIA__"
                    alt="Professional Portrait"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

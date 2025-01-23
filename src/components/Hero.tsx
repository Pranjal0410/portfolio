import React, { useState, useEffect } from 'react';
import { Download, Send } from 'lucide-react';

const titles = ['Enthusiast', 'Strategist'];

const Hero = () => {
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
    <section
      id="home"
      className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Marketing
            <br />
            <span className="text-blue-400 inline-block min-w-[280px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Aspiring Digital Marketer | Content Creator | Learning SEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </button>
            <button className="group flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-full transition-all duration-300 hover:scale-105">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Contact Me
            </button>
          </div>
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
      </div>
    </section>
  );
};

export default Hero;

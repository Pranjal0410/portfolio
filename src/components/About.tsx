import React from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = ({ scrollY }: { scrollY: number }) => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translateY(${Math.min(50, scrollY * 0.1)}px)`,
          opacity: Math.min(1, (scrollY - 300) / 400),
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <User className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
            <p className="text-gray-300">
              A passionate digital marketing enthusiast with a drive to learn and grow in the field. Currently focusing on building a strong foundation in modern marketing practices.
            </p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Briefcase className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">What I'm Learning</h3>
            <p className="text-gray-300">
              Actively studying SEO optimization, content creation, and brand strategy development. Committed to staying updated with the latest digital marketing trends.
            </p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <GraduationCap className="w-8 h-8 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-300">
              B.Tech CSE student at Chitkara University, combining technical knowledge with marketing skills for a unique perspective.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <h3 className="text-2xl font-semibold mb-4">Learning Goals</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-2">
                <Award className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                Master the fundamentals of digital marketing through hands-on projects and real-world applications.
              </p>
              <p className="flex items-start gap-2">
                <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                Build a strong portfolio showcasing my growth and achievements in the field.
              </p>
              <p className="flex items-start gap-2">
                <Award className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                Develop expertise in modern marketing tools and technologies.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Currently focused on building practical experience through personal projects and learning from industry experts.
              </p>
              <p>
                Actively participating in digital marketing workshops and online courses to enhance my skill set.
              </p>
              <p>
                Seeking opportunities to apply my growing knowledge in real-world marketing scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
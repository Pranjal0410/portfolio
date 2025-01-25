import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Mail, Share2, Globe, Megaphone, Target, Palette, BarChart2 } from 'lucide-react';

interface SkillsProps {
  scrollY: number;
}

const Skills: React.FC<SkillsProps> = ({ scrollY }) => {
  const skills = [
    {
      icon: <Globe size={32} className="text-blue-400" />,
      title: 'Digital Marketing',
      description: 'Creating impactful online presence and brand strategies',
      tools: ['HubSpot Marketing Hub', 'Klaviyo', 'Caption Ai'],
      color: 'from-blue-400 to-purple-400',
      bgColor: 'from-blue-400/10 to-purple-400/10'
    },
    {
      icon: <Target size={32} className="text-purple-400" />,
      title: 'SEO & Analytics',
      description: 'Optimizing content and analyzing performance metrics',
      tools: ['Google Analytics','SEMRush', 'Ubersuggest'],
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-400/10 to-pink-400/10'
    },
    {
      icon: <Palette size={32} className="text-pink-400" />,
      title: 'Content Creation',
      description: 'Developing engaging content for various platforms',
      tools: ['Canva', 'Adobe Express', 'Capcut'],
      color: 'from-pink-400 to-red-400',
      bgColor: 'from-pink-400/10 to-red-400/10'
    },
    {
      icon: <BarChart2 size={32} className="text-red-400" />,
      title: 'Growth Marketing',
      description: 'Implementing strategies for sustainable growth',
      tools: ['Zapier', 'Amplitude', 'Optimizely'],
      color: 'from-red-400 to-orange-400',
      bgColor: 'from-red-400/10 to-orange-400/10'
    },
    {
      icon: <Mail size={32} className="text-orange-400" />,
      title: 'Email Marketing',
      description: 'Creating effective email campaigns and newsletters',
      tools: ['Mailchimp', 'HubSpot', 'Sendinblue'],
      color: 'from-orange-400 to-yellow-400',
      bgColor: 'from-orange-400/10 to-yellow-400/10'
    },
    {
      icon: <Share2 size={32} className="text-yellow-400" />,
      title: 'Social Media',
      description: 'Managing and growing social media presence',
      tools: ['Caption Ai', 'Capcut', 'VN video'],
      color: 'from-yellow-400 to-green-400',
      bgColor: 'from-yellow-400/10 to-green-400/10'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg" />
      
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Marketing Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously developing expertise in various aspects of digital marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${skill.bgColor})` }} />
              
              <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${skill.bgColor} mb-4 
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                </div>

                <h3 className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}>
                  {skill.title}
                </h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${skill.bgColor} 
                        text-gray-300 group-hover:text-white transition-colors duration-300`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

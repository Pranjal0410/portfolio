import { useEffect, useRef } from 'react';
import { Search, BarChart2, PenTool, Share2, Target, Mail, TrendingUp, Activity } from 'lucide-react';

const skills = [
  { name: 'SEO & SEM', level: 85, icon: Search },
  { name: 'Content Strategy', level: 80, icon: PenTool },
  { name: 'Social Media Management', level: 90, icon: Share2 },
  { name: 'Paid Advertising', level: 75, icon: Target },
  { name: 'Analytics & Reporting', level: 80, icon: BarChart2 },
  { name: 'Email Marketing', level: 70, icon: Mail },
  { name: 'Marketing Automation', level: 75, icon: Activity },
  { name: 'Branding & Campaign Management', level: 85, icon: TrendingUp },
];

const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill-progress');
          }
        });
      },
      { threshold: 0.2 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Key Expertise for Digital Marketing Success
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => (skillRefs.current[index] = el)}
                className="p-6 bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                </div>

                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

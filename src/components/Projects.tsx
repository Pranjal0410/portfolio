import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Chitkara Event Management Platform',
    description: 'Developed a full-stack event management platform for university events using React.js, enabling seamless event registrations and real-time updates.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    metrics: ['Successful Platform Sale', 'Improved Event Management', 'Real-time Updates'],
    tags: ['React.js', 'TypeScript', 'REST API']
  },
  {
    title: 'Social Media Campaign Optimization',
    description: 'Led comprehensive social media optimization campaign resulting in significant engagement and traffic improvements.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868',
    metrics: ['30% Higher Engagement', '20% Traffic Increase', '15% Better Email Opens'],
    tags: ['Social Media', 'Analytics', 'Email Marketing']
  },
  {
    title: 'University Event Promotion Campaign',
    description: 'Designed and executed promotional campaigns for cultural and technical events using modern design tools.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    metrics: ['20% More Participation', 'Enhanced Brand Visibility', 'Improved Engagement'],
    tags: ['Event Marketing', 'Content Creation', 'Social Media']
  },
  {
    title: 'Small Business Marketing Strategy',
    description: 'Developed and implemented marketing strategies for small businesses as a Digital Marketing Intern.',
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1',
    metrics: ['30% Engagement Boost', '12% Email Open Rate', 'Improved SEO'],
    tags: ['Digital Marketing', 'SEO', 'Email Marketing']
  }
];

const Projects = ({ scrollY }: { scrollY: number }) => {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              style={{
                transform: `translateY(${Math.min(100, Math.max(0, (scrollY - 1400) * 0.2))}px)`,
                opacity: Math.min(1, (scrollY - 1400) / 400),
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    transform: `scale(1.1) translateY(${scrollY * 0.02}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.metrics.map(metric => (
                      <div
                        key={metric}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
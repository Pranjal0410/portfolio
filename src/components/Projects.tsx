import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Chitkara Event Management Platform',
    description: 'Developed a full-stack event management platform for university events using React.js, enabling seamless event registrations and real-time updates.',
    image: 'https://www.chitkara.edu.in/wp-content/uploads/2022/08/cultural-night-banner.jpg',
    metrics: ['Platform Successfully Implemented', 'Streamlined Event Management', 'Enhanced User Experience'],
    tags: ['React.js', 'TypeScript', 'REST API'],
    url: 'https://github.com/your-username/chitkara-event-platform'
  },
  {
    title: 'Social Media Campaign Optimization',
    description: 'Led comprehensive social media optimization campaign resulting in significant engagement and traffic improvements.',
    image: 'https://th.bing.com/th/id/OIP.lZo_Y22WIubzg0HoSRKi4gHaFP?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    metrics: ['Substantial Engagement Growth', 'Increased Website Traffic', 'Improved Email Performance'],
    tags: ['Social Media', 'Analytics', 'Email Marketing'],
    url: 'https://comprehensive-social-med-klehdvo.gamma.site/'
  },
  {
    title: 'University Event Promotion Campaign',
    description: 'Designed and executed promotional campaigns for cultural and technical events using modern design tools.',
    image: 'https://media-hosting.imagekit.io//fea83a9b58524c4c/Capture.PNG?Expires=1832417764&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gpJFKKiKAxByn~5M5KGIpyoolTY2SYkxgvXAwkyvNcIIIwE2N2CINRMyNP7R4dHte76FjFgCAX17XgYj4zKAGZ8Ub4ZkI6Z3N7ZkCT~Z2FFCB4OFgkLP15EeJjd1MINwfF3fB7fGjZp-yIifGxEySXYoNN4UGOp6xEJzjkexa56FvrH8VYjrxdsFecGFCCM5h8JKDgwzrzuQqnE9NGyugirfe-GAlBR9H-mRrOtUb4v-dAfmCvxWPSbiolCaMiNSL91~6P8R5h~HicKezmTrRGF~nm1QgrCAdVByxaWzmGFKtUSHNVhP9Ypj~fUQFCDk-hecOLBb0mQbYEa5L0fUWA__',
    metrics: ['Record Event Participation', 'Enhanced Brand Recognition', 'Strong Community Engagement'],
    tags: ['Event Marketing', 'Content Creation', 'Social Media'],
    url: 'https://rangrezz.chitkara.edu.in/'
  },
  {
    title: 'Small Business Marketing Strategy',
    description: 'Developed and implemented marketing strategies for small businesses as a Digital Marketing Intern.',
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1',
    metrics: ['Significant Engagement Growth', 'Improved Email Campaign Results', 'Enhanced Search Rankings'],
    tags: ['Digital Marketing', 'SEO', 'Email Marketing'],
    url: 'https://boosting-small-restauran-wv9xwcy.gamma.site/'
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

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
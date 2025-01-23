import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Maximizing Event Marketing Success in Universities',
    excerpt: 'Learn how I increased student participation by 20% through strategic event promotion and social media campaigns at Chitkara University.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    date: '2024-05-15',
    readTime: '5 min read',
    category: 'Event Marketing'
  },
  {
    title: 'Email Marketing Strategies That Work',
    excerpt: 'Discover the techniques that helped improve email open rates by 12% using Mailchimp for small business campaigns.',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec',
    date: '2024-05-10',
    readTime: '7 min read',
    category: 'Email Marketing'
  },
  {
    title: 'Social Media Engagement: A Beginner\'s Guide',
    excerpt: 'How I achieved a 30% boost in social media engagement through targeted content and audience interaction strategies.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868',
    date: '2024-05-05',
    readTime: '6 min read',
    category: 'Social Media'
  }
];

const Blog = ({ scrollY }: { scrollY: number }) => {
  return (
    <section id="blog" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Latest Insights
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group"
              style={{
                transform: `translateY(${Math.min(100, Math.max(0, (scrollY - 2600) * 0.2))}px)`,
                opacity: Math.min(1, (scrollY - 2600) / 400),
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      transform: `scale(1.1) translateY(${scrollY * 0.02}px)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
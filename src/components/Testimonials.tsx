import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'An exceptional digital marketer with a natural talent for understanding brand needs and delivering outstanding results.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'Impressed by the strategic approach to our marketing challenges. The results exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Content Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Exceptional creativity combined with data-driven decision making. A true professional in digital marketing.',
    rating: 5
  }
];

const Testimonials = ({ scrollY }: { scrollY: number }) => {
  return (
    <section id="testimonials" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Client Testimonials
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative"
              style={{
                transform: `translateY(${Math.min(100, Math.max(0, (scrollY - 2000) * 0.2))}px)`,
                opacity: Math.min(1, (scrollY - 2000) / 400),
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/20" />
                
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
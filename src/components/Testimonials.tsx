import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sushant',
    role: 'Chitkara University Society President',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEgrYwuuDPHJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683096181237?e=1743033600&v=beta&t=Eh_bgL12lXU8fVNbX3qO613dJ_j6H8cdx2UATQqgE4o',
    content: "The event management website Pranjal developed for our society has transformed how we organize and promote events. It's intuitive, user-friendly, and helped us boost attendance this semester",
    rating: 5
  },
  {
    name: 'Neeraj',
    role: 'Preschool Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'Pranjal helped us create a targeted social media strategy that increased our online presence significantly.',
    rating: 5
  },
  {
    name: 'Aastha',
    role: 'Event Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHYymGHTjlD2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728719600555?e=1743033600&v=beta&t=sRm74gC1qvd9a-2WJI4h5o9hb6A4KTBYA_lzM28MZaA',
    content: 'Working with Pranjal was a game-changer for our event promotion. Her strategic approach to digital marketing and user engagement drove impressive turnout and visibility. ',
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
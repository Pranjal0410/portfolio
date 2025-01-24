import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
            <p className="text-gray-400">
              Passionate digital marketer with a focus on creating impactful online presence and driving measurable results.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="mailto:contact@example.com" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@example.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> by [Your Name] © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { FaBook, FaLightbulb, FaEnvelope, FaGraduationCap, FaComments } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Quick Link Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <FaBook className="w-4 h-4 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg">Quick Link</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Subscribe Course</h4>
                <p className="text-sm text-gray-600 max-w-md">
                  Eduift offers interactive modules, live sessions, and certifications, empowering learners with personalized content for professional and personal growth.
                </p>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLightbulb className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg">About us</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <FaBook className="w-4 h-4 text-gray-400" />
                <span>Modules</span>
              </li>
              <li className="flex items-center gap-2">
                <FaGraduationCap className="w-4 h-4 text-gray-400" />
                <span>Courses</span>
              </li>
              <li className="flex items-center gap-2">
                <FaComments className="w-4 h-4 text-gray-400" />
                <span>Testimonials</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FaEnvelope className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="font-bold text-lg">Subscribe our newsletter to get more updates</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <div className="relative flex-1 w-full">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg">😊</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-1">
                Subscribe 
                <span>&gt; &gt;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>© 2025 All rights reserved by Subtansoft.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
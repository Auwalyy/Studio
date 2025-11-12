import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* First Column - Logo, Description and Book Icon */}
          <div className="space-y-4">
            <img src={logo} alt="Sultansoft Logo" className='w-30 h-12'/>
            <p className="text-gray-300 text-sm leading-relaxed">
              Edufit offers interactive modules, live sessions, and certifications, 
              empowering learners with personalized content for professional and personal growth.
            </p>
            {/* Book Icon */}
            <div className="text-blue-400">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
          </div>

          {/* Second Column - Quick Links and Bulb Icon */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="hover:text-white cursor-pointer transition-colors">About us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
              <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">Modules</li>
            </ul>
            {/* Bulb Icon */}
            <div className="text-yellow-400 mt-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
          </div>

          {/* Third Column - Subscribe Course with Emoji */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Subscribe Course</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for our new update
            </p>
            
            {/* Email Input */}
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              
              {/* Subscribe Button with Emoji */}
              <button className="w-full bg-[#336699CC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
                Subscribe 
                <span className="text-lg">🚀</span>
                <span className="flex">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-3xl text-white">
            <p>© 2025 All rights reserved by Sultansoft.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
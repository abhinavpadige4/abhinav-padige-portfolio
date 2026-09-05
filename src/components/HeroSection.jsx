import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 opacity-20"></div>
      
      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mb-6">
          Abhinav Padige
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          AI Engineer & Full Stack Developer
        </p>
        <a 
          href="/resume_test" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-purple-500/30 backdrop-blur-sm border border-white/20"
        >
          View Resume
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l4 4-4 4" />
          </svg>
        </a>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-rose-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-10 w-16 h-16 bg-gradient-to-r from-purple-300/10 via-pink-300/10 to-rose-300/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-200/10 via-pink-200/10 to-rose-200/10 rounded-full animate-pulse delay-4000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
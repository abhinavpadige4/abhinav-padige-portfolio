import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 opacity-20 pointer-events-none"></div>
      
      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
          Abhinav Padige
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
          AI Engineer & Full Stack Developer
        </p>
        <a 
          href="/resume_test" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20 backdrop-blur-sm"
        >
          View Resume
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300 opacity-15 blur-2xl animate-float-reverse"></div>
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 opacity-5 blur-xl animate-float-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
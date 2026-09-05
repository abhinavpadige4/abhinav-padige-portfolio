import React from 'react';
import { FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* Glassmorphism Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 backdrop-blur-sm pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500">
          Abhinav Padige
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          AI Engineer & Full Stack Developer
        </p>
        <a href="/resume_test" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/10 border border-white/20">
          <FaDownload className="mr-3" />
          View Resume
        </a>
      </div>
      
      {/* Subtle animated gradient particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-full blur-3xl animate-pulse slow" />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 rounded-full blur-3xl animate-pulse slow delay-150" />
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate AI engineer and full-stack developer with expertise in machine learning, deep learning, and cloud technologies. I enjoy building scalable applications and solving complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
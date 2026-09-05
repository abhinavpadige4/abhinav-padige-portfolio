import React from 'react';

const SkillsSection = () => {
  const skills = [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'FastAPI',
    'Docker',
    'AWS',
    'Azure'
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 text-sm font-medium text-gray-200 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
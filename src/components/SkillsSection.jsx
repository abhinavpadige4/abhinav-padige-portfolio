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
              className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
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
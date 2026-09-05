import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-purple-200 border border-purple-300/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
      {skill}
    </span>
  );
};

export default SkillBadge;
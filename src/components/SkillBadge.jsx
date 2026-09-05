import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200">
      {skill}
    </span>
  );
};

export default SkillBadge;
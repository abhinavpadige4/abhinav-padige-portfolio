import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
            {techStack.split(',')[0].trim()}
          </span>
          {techStack.split(',').slice(1).map((stack, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 ml-2">
              {stack.trim()}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 flex-1"
            >
              View on GitHub
            </a>
          )}
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200 flex-1"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
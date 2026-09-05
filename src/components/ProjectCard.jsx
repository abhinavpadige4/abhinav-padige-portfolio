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
          <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs mr-2 mb-1">
            {techStack.split(',')[0].trim()}
          </span>
          <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs mr-2 mb-1">
            {techStack.split(',')[1]?.trim() || ''}
          </span>
          <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs mr-2 mb-1">
            {techStack.split(',')[2]?.trim() || ''}
          </span>
        </div>
        <div className="flex space-x-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 00-2 2zM12 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              GitHub
            </a>
          )}
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
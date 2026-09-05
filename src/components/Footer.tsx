import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Abhinav Padige. All rights reserved.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://github.com/abhinavpadige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhinavpadige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/abhinavpadige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h10a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2zm0 0a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">B.Tech in Computer Science and Engineering</h3>
                <p className="text-gray-300 mb-1">CVR College of Engineering</p>
                <p className="text-gray-300">CGPA: 8.42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
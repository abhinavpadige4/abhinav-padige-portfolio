import React from 'react';

const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h7a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2v-7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">B.Tech in Computer Science and Engineering</h3>
                <p className="text-gray-300 mb-2">CVR College of Engineering</p>
                <p className="flex items-center gap-2 text-purple-300 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                  </svg>
                  CGPA: 8.42
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
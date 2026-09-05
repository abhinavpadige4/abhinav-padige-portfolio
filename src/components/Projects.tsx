import React from 'react';

const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Analyzer",
    description: "Built a full-stack application using FastAPI and React to analyze resumes against job descriptions using NLP and ML models. Achieved 92% accuracy in skill matching.",
    tech: ["Python", "FastAPI", "React", "spaCy", "scikit-learn", "Docker"],
    image: "/projects/resume-analyzer.jpg",
    github: "https://github.com/abhinavpadige/resume-analyzer",
    demo: "https://resume-analyzer.vercel.app"
  },
  {
    id: 2,
    title: "Real-Time Stock Predictor",
    description: "Developed a LSTM-based deep learning model for predicting stock prices with real-time data ingestion from Yahoo Finance API. Deployed on AWS EC2 with auto-scaling.",
    tech: ["Python", "TensorFlow", "LSTM", "AWS", "EC2", "Docker", "REST API"],
    image: "/projects/stock-predictor.jpg",
    github: "https://github.com/abhinavpadige/stock-predictor",
    demo: "https://stock-predictor.abhinavpadige.me"
  },
  {
    id: 3,
    title: "Smart Campus Assistant",
    description: "Created a multilingual chatbot using Azure Cognitive Services and Dialogflow to help students with campus queries. Integrated with college ERP system.",
    tech: ["Azure", "Dialogflow", "Node.js", "TypeScript", "REST API", "Cosmos DB"],
    image: "/projects/campus-assistant.jpg",
    github: "https://github.com/abhinavpadige/campus-assistant",
    demo: "https://campus-assistant.abhinavpadige.me"
  },
  {
    id: 4,
    title: "FinTech Fraud Detection System",
    description: "Implemented an ensemble ML model (XGBoost + Isolation Forest) to detect fraudulent transactions in real-time. Reduced false positives by 37%.",
    tech: ["Python", "XGBoost", "Isolation Forest", "Kafka", "Spark", "Azure ML"],
    image: "/projects/fraud-detection.jpg",
    github: "https://github.com/abhinavpadige/fraud-detection",
    demo: "https://fraud-detection.abhinavpadige.me"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/30 to-gray-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-xs font-medium rounded-full text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/70 text-white rounded-lg transition-colors border border-white/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Resume Analyzer",
    description: "A full-stack application that uses NLP and computer vision to analyze resumes, extract skills, and provide feedback for improvement. Built with FastAPI backend and React frontend.",
    tech: ["Python", "FastAPI", "React", "TensorFlow", "AWS S3", "Docker"],
    image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Resume+Analyzer",
    github: "https://github.com/abhinavpadige/resume-analyzer",
    live: "https://resume-analyzer.vercel.app"
  },
  {
    id: 2,
    title: "Real-Time Stock Prediction Dashboard",
    description: "A dashboard that predicts stock prices using LSTM neural networks and visualizes trends with real-time data streaming. Deployed on Azure Kubernetes Service.",
    tech: ["Python", "PyTorch", "LSTM", "Azure AKS", "Plotly Dash", "Redis"],
    image: "https://via.placeholder.com/400x300/a855f7/ffffff?text=Stock+Prediction",
    github: "https://github.com/abhinavpadige/stock-prediction",
    live: "https://stock-dashboard.azurewebsites.net"
  },
  {
    id: 3,
    title: "Voice-Controlled Smart Home Assistant",
    description: "An IoT system that controls home appliances via voice commands using speech recognition and custom wake word detection. Integrated with Alexa and Google Assistant.",
    tech: ["Python", "TensorFlow Lite", "Raspberry Pi", "MQTT", "AWS IoT Core", "Docker"],
    image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Smart+Home+Assistant",
    github: "https://github.com/abhinavpadige/smart-home-assistant",
    live: "#"
  },
  {
    id: 4,
    title: "Medical Image Segmentation with U-Net",
    description: "Deep learning model for segmenting tumors in MRI scans using U-Net architecture. Achieved 94.2% Dice coefficient on BraTS dataset.",
    tech: ["Python", "PyTorch", "U-Net", "OpenCV", "AWS SageMaker", "MLflow"],
    image: "https://via.placeholder.com/400x300/6d28d9/ffffff?text=Medical+Segmentation",
    github: "https://github.com/abhinavpadige/medical-segmentation",
    live: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors border border-transparent"
                    >
                      Live Demo
                    </a>
                  )}
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
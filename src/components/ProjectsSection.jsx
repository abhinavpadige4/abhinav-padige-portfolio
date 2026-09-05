import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Resume Analyzer",
      description: "A full-stack application that uses NLP and machine learning to analyze resumes, extract key information, and provide feedback on improvements. Built with FastAPI backend and React frontend.",
      techStack: "Python, FastAPI, React, TensorFlow, Docker, AWS",
      githubLink: "https://github.com/abhinavpadige/resume-analyzer",
      liveDemoLink: "https://resume-analyzer.vercel.app"
    },
    {
      title: "Real-time Stock Prediction Dashboard",
      description: "A deep learning-based stock price prediction system using LSTM networks with real-time data visualization. Features include model training, backtesting, and interactive charts.",
      techStack: "Python, PyTorch, React, D3.js, Docker, Azure",
      githubLink: "https://github.com/abhinavpadige/stock-predictor",
      liveDemoLink: "https://stock-predictor.azurewebsites.net"
    },
    {
      title: "Cloud-Native E-Commerce Platform",
      description: "A scalable microservices-based e-commerce platform deployed on Kubernetes with CI/CD pipelines. Includes payment integration, inventory management, and admin dashboard.",
      techStack: "Node.js, React, Docker, AWS, Kubernetes, PostgreSQL",
      githubLink: "https://github.com/abhinavpadige/ecommerce-platform",
      liveDemoLink: "https://ecommerce.abhinavpadige.dev"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
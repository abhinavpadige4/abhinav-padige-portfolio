import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Resume Analyzer",
      description: "A full-stack application that uses NLP and machine learning to analyze resumes, provide feedback on skills, experience, and formatting, and suggest improvements for better ATS compatibility.",
      techStack: "Python, FastAPI, React, TensorFlow, AWS",
      githubLink: "https://github.com/abhinavpadige/resume-analyzer",
      liveDemoLink: "https://resume-analyzer.vercel.app"
    },
    {
      title: "Real-Time Object Detection System",
      description: "Built a YOLOv5-based real-time object detection system for surveillance applications with Docker containerization and deployment on Azure Cloud for scalable inference.",
      techStack: "Python, PyTorch, OpenCV, Docker, Azure",
      githubLink: "https://github.com/abhinavpadige/object-detection",
      liveDemoLink: "https://object-detection-demo.azurewebsites.net"
    },
    {
      title: "Cloud-Native E-Commerce Platform",
      description: "Developed a scalable microservices-based e-commerce platform using FastAPI, deployed on AWS with CI/CD pipelines, featuring product catalog, payment integration, and admin dashboard.",
      techStack: "FastAPI, Docker, AWS, PostgreSQL, React",
      githubLink: "https://github.com/abhinavpadige/ecommerce-platform",
      liveDemoLink: "https://ecommerce-platform.abhinavpadige.com"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
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
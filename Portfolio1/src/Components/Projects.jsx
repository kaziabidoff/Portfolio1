import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A sleek and modern portfolio built with React. Reload and explore!",
    techStack: ["React", "CSS"],
    link: "http://localhost:5173/",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "I am learning every day. Stay tuned for upcoming projects!",
    techStack: ["Next.js", "Node.js", "MongoDB"],
    link: "#", // Update when ready
  },
  {
    id: 3,
    title: "Noob Projects",
    description: "Small projects like meme generators & single-page sites for learning.",
    techStack: ["JavaScript", "CSS", "HTML"],
    link: "https://codepen.io/Kazi-Abid",
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="check-out-btn">
              Check Out
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Zomato Clone",
      description:
        "A food delivery web application built using React, Node.js, Express.js and MongoDB.",
      tech: "React • Node.js • Express • MongoDB",
      live: "#",
      github: "#",
    },
    {
      title: "Health Monitoring System",
      description:
        "A web-based health monitoring system designed to manage and display health-related information.",
      tech: "HTML • CSS • JavaScript",
      live: "#",
      github: "#",
    },
    {
      title: "My Portfolio",
      description:
        "A modern and responsive personal portfolio website showcasing my skills, projects and experience.",
      tech: "React • CSS • JavaScript",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <p className="projects-subtitle">My Recent Work</p>
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      category: "React",
      name: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website developed using React. It contains sections like Home, About, Skills, Projects, and Contact. The website also supports dark mode and mobile-friendly navigation.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite"
      ],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.vercel.app"
    },

    {
      id: 2,
      category: "JavaScript",
      name: "Weather Application",
      description:
        "A weather application that fetches live weather information using an external API. Users can search any city and view temperature, humidity, wind speed, weather conditions, and icons.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "OpenWeather API"
      ],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-demo.netlify.app"
    },

    {
      id: 3,
      category: "React",
      name: "Student Management System",
      description:
        "A CRUD-based student management application where users can add, edit, delete, and search student records with a clean interface.",
      technologies: [
        "React",
        "JavaScript",
        "CSS"
      ],
      github: "https://github.com/yourusername/student-management",
      demo: "https://student-system.vercel.app"
    },

    {
      id: 4,
      category: "C",
      name: "Library Management System",
      description:
        "A console-based Library Management System developed in C. It manages book records, issue and return operations, searching, and file handling.",
      technologies: [
        "C",
        "File Handling",
        "Structures"
      ],
      github: "https://github.com/yourusername/library-management",
      demo: ""
    },

    {
      id: 5,
      category: "React",
      name: "To-Do Application",
      description:
        "A responsive task management application where users can create, update, delete, and mark tasks as completed with local storage support.",
      technologies: [
        "React",
        "CSS",
        "Local Storage"
      ],
      github: "https://github.com/yourusername/todo-app",
      demo: "https://todo-demo.netlify.app"
    },

    {
      id: 6,
      category: "JavaScript",
      name: "Calculator",
      description:
        "A responsive scientific calculator supporting arithmetic operations, percentage calculations, and keyboard input using JavaScript.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github: "https://github.com/yourusername/calculator",
      demo: "https://calculator-demo.netlify.app"
    }
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects-container">

      <div className="section-heading">

        <h1>My Projects</h1>

        <p>
          These projects demonstrate my understanding of programming,
          frontend development, problem-solving, and software development
          using modern technologies.
        </p>

      </div>

      <div className="filter-buttons">

        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "React" ? "active" : ""}
          onClick={() => setFilter("React")}
        >
          React
        </button>

        <button
          className={filter === "JavaScript" ? "active" : ""}
          onClick={() => setFilter("JavaScript")}
        >
          JavaScript
        </button>

        <button
          className={filter === "C" ? "active" : ""}
          onClick={() => setFilter("C")}
        >
          C
        </button>

      </div>

      <div className="projects-grid">

        {filteredProjects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-header">

              <span className="project-category">
                {project.category}
              </span>

              <h2>{project.name}</h2>

            </div>

            <div className="project-body">

              <p>{project.description}</p>

              <h4>Technologies Used</h4>

              <div className="technology-container">

                {project.technologies.map((tech, index) => (

                  <span
                    className="technology-badge"
                    key={index}
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            <div className="project-footer">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub Repository
              </a>

              {project.demo !== "" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

      <div className="project-summary">

        <div className="summary-box">

          <h2>{projects.length}</h2>

          <p>Total Projects</p>

        </div>

        <div className="summary-box">

          <h2>3</h2>

          <p>React Projects</p>

        </div>

        <div className="summary-box">

          <h2>2</h2>

          <p>JavaScript Projects</p>

        </div>

        <div className="summary-box">

          <h2>1</h2>

          <p>C Project</p>

        </div>

      </div>

    </section>
  );
}

export default Projects;
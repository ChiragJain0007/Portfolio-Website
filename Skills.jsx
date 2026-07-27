import "../styles/Skills.css";

function Skills() {
  const frontendSkills = [
    {
      name: "HTML5",
      level: 95,
      description: "Semantic HTML, Forms, Tables, Accessibility"
    },
    {
      name: "CSS3",
      level: 90,
      description: "Flexbox, Grid, Animations, Responsive Design"
    },
    {
      name: "JavaScript",
      level: 85,
      description: "ES6+, DOM Manipulation, Array Methods, Async Basics"
    },
    {
      name: "React.js",
      level: 80,
      description: "Components, Hooks, Props, State Management"
    }
  ];

  const programmingSkills = [
    {
      name: "C",
      level: 85,
      description: "Functions, Arrays, Pointers, Structures"
    },
    {
      name: "Java",
      level: 75,
      description: "OOP, Exception Handling, Collections"
    },
    {
      name: "Python",
      level: 70,
      description: "Basics, Data Analysis, Machine Learning Libraries"
    }
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Linux",
    "Netlify",
    "Vercel",
    "Chrome DevTools",
    "npm"
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Teamwork",
    "Leadership",
    "Adaptability",
    "Time Management",
    "Fast Learner"
  ];

  const learning = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures",
    "Algorithms"
  ];

  return (
    <section className="skills-container">

      <div className="section-heading">

        <h1>My Skills</h1>

        <p>
          These are the technologies and tools I have learned and continue
          improving every day through projects and practice.
        </p>

      </div>

      <div className="skills-category">

        <h2>Frontend Development</h2>

        <div className="skill-grid">

          {frontendSkills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-header">

                <h3>{skill.name}</h3>

                <span>{skill.level}%</span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

              <p>{skill.description}</p>

            </div>

          ))}

        </div>

      </div>

      <div className="skills-category">

        <h2>Programming Languages</h2>

        <div className="skill-grid">

          {programmingSkills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-header">

                <h3>{skill.name}</h3>

                <span>{skill.level}%</span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

              <p>{skill.description}</p>

            </div>

          ))}

        </div>

      </div>

      <div className="skills-category">

        <h2>Development Tools</h2>

        <div className="tool-grid">

          {tools.map((tool, index) => (

            <div className="tool-card" key={index}>

              <div className="tool-icon">
                🛠️
              </div>

              <h3>{tool}</h3>

            </div>

          ))}

        </div>

      </div>

      <div className="skills-category">

        <h2>Soft Skills</h2>

        <div className="soft-grid">

          {softSkills.map((skill, index) => (

            <div className="soft-card" key={index}>

              <span>✔</span>

              <p>{skill}</p>

            </div>

          ))}

        </div>

      </div>

      <div className="skills-category">

        <h2>Currently Learning</h2>

        <div className="learning-grid">

          {learning.map((item, index) => (

            <div className="learning-card" key={index}>

              <h3>{item}</h3>

              <p>
                Continuously improving my knowledge by building projects,
                reading documentation, and practicing implementation.
              </p>

            </div>

          ))}

        </div>

      </div>

      <div className="summary-section">

        <h2>Skill Summary</h2>

        <div className="summary-grid">

          <div className="summary-card">
            <h1>10+</h1>
            <p>Technologies Explored</p>
          </div>

          <div className="summary-card">
            <h1>15+</h1>
            <p>Mini Projects Built</p>
          </div>

          <div className="summary-card">
            <h1>500+</h1>
            <p>Hours of Learning</p>
          </div>

          <div className="summary-card">
            <h1>100%</h1>
            <p>Passion for Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
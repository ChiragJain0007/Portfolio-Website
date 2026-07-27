import "../styles/About.css";

function About() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      stream: "Computer Science and Engineering",
      institute: "University of Petroleum and Energy Studies (UPES)",
      duration: "2024 - 2028",
      description:
        "Currently pursuing B.Tech in Computer Science with a strong interest in Web Development, Artificial Intelligence, Machine Learning, and Software Engineering."
    }
  ];

  const objectives = [
    "Build modern and responsive web applications.",
    "Strengthen problem-solving and programming skills.",
    "Contribute to open-source projects on GitHub.",
    "Learn advanced React and full-stack development.",
    "Work on real-world industry projects.",
    "Continuously improve technical and communication skills."
  ];

  const interests = [
    "Web Development",
    "React.js",
    "JavaScript",
    "Machine Learning",
    "Artificial Intelligence",
    "C Programming",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design",
    "Problem Solving"
  ];

  const strengths = [
    {
      title: "Quick Learner",
      description:
        "I enjoy learning new technologies and adapting to new challenges quickly."
    },
    {
      title: "Problem Solver",
      description:
        "I like solving logical problems and implementing efficient solutions."
    },
    {
      title: "Team Player",
      description:
        "I can collaborate effectively with teammates while also working independently."
    },
    {
      title: "Self Motivated",
      description:
        "I continuously improve my skills through projects, courses, and practice."
    }
  ];

  return (
    <section className="about-container">

      <div className="section-title">
        <h1>About Me</h1>
        <p>
          Get to know more about my background, education, interests,
          and career aspirations.
        </p>
      </div>

      <div className="about-content">

        <div className="about-left">

          <h2>Who Am I?</h2>

          <p>
            Hello! I'm <strong>Chirag Jain</strong>, a passionate Computer
            Science student with a strong interest in frontend web development.
            I enjoy creating clean, responsive, and user-friendly websites
            using modern web technologies.
          </p>

          <p>
            I believe that technology should solve real-world problems while
            providing an excellent user experience. My goal is to become a
            skilled software developer capable of building scalable and
            impactful applications.
          </p>

          <p>
            Apart from coding, I enjoy learning new technologies,
            reading technical blogs, exploring open-source projects,
            and continuously improving my development skills.
          </p>

        </div>

        <div className="about-right">

          <h2>Personal Information</h2>

          <div className="info-grid">

            <div className="info-card">
              <h4>Name</h4>
              <p>Chirag Jain</p>
            </div>

            <div className="info-card">
              <h4>Age</h4>
              <p>20 Years</p>
            </div>

            <div className="info-card">
              <h4>Email</h4>
              <p>chiragjain@example.com</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Dehradun, India</p>
            </div>

            <div className="info-card">
              <h4>Languages</h4>
              <p>English, Hindi</p>
            </div>

            <div className="info-card">
              <h4>Freelance</h4>
              <p>Available</p>
            </div>

          </div>

        </div>

      </div>

      <div className="education-section">

        <h2>Education</h2>

        {education.map((item, index) => (
          <div className="education-card" key={index}>

            <h3>{item.degree}</h3>

            <h4>{item.stream}</h4>

            <p className="college">
              {item.institute}
            </p>

            <span>{item.duration}</span>

            <p>
              {item.description}
            </p>

          </div>
        ))}

      </div>

      <div className="objective-section">

        <h2>Career Objective</h2>

        <p>
          My objective is to become a professional software developer by
          continuously learning modern technologies and building projects
          that create meaningful solutions. I aim to contribute to an
          organization where I can grow professionally while delivering
          high-quality software products.
        </p>

        <div className="objective-grid">

          {objectives.map((goal, index) => (
            <div className="objective-card" key={index}>
              {goal}
            </div>
          ))}

        </div>

      </div>

      <div className="interests-section">

        <h2>Technical Interests</h2>

        <div className="interest-grid">

          {interests.map((interest, index) => (
            <div className="interest-card" key={index}>
              {interest}
            </div>
          ))}

        </div>

      </div>

      <div className="strength-section">

        <h2>My Strengths</h2>

        <div className="strength-grid">

          {strengths.map((strength, index) => (

            <div className="strength-card" key={index}>

              <h3>{strength.title}</h3>

              <p>{strength.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;
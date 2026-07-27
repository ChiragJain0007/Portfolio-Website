import "../styles/Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  const personalInfo = {
    name: "Chirag Jain",
    title: "Frontend Developer | React Developer",
    intro:
      "I am a passionate Computer Science student who enjoys building responsive and interactive web applications using modern technologies. I love learning new skills, solving real-world problems, and continuously improving as a developer.",
    email: "chiragjain@example.com",
    location: "Dehradun, Uttarakhand, India"
  };

  const highlights = [
    "React.js Development",
    "Responsive Web Design",
    "JavaScript (ES6+)",
    "Git & GitHub",
    "Problem Solving",
    "C Programming"
  ];

  return (
    <section className="home-container">

      <div className="home-left">

        <p className="greeting">
          Hello, I'm
        </p>

        <h1 className="home-name">
          {personalInfo.name}
        </h1>

        <h2 className="home-title">
          {personalInfo.title}
        </h2>

        <p className="home-description">
          {personalInfo.intro}
        </p>

        <div className="home-details">

          <div className="detail-card">
            <h3>Email</h3>
            <p>{personalInfo.email}</p>
          </div>

          <div className="detail-card">
            <h3>Location</h3>
            <p>{personalInfo.location}</p>
          </div>

        </div>

        <div className="highlight-section">

          <h3>What I Do</h3>

          <div className="highlight-grid">

            {highlights.map((skill, index) => (
              <div className="highlight-card" key={index}>
                {skill}
              </div>
            ))}

          </div>

        </div>

        <div className="button-group">

          <a
            href="/resume.pdf"
            download
            className="btn primary-btn"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>

        </div>

      </div>

      <div className="home-right">

        <div className="image-container">

          <img
            src={profile}
            alt="Profile"
            className="profile-image"
          />

        </div>

        <div className="stats-container">

          <div className="stat-box">
            <h2>10+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h2>5+</h2>
            <p>Technologies Learned</p>
          </div>

          <div className="stat-box">
            <h2>100+</h2>
            <p>Coding Problems Solved</p>
          </div>

          <div className="stat-box">
            <h2>2+</h2>
            <p>Years Learning Programming</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
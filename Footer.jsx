import "../styles/Footer.css";

function Footer() {
  const quickLinks = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Skills",
      link: "#skills"
    },
    {
      name: "Projects",
      link: "#projects"
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Instagram",
      link: "https://instagram.com/yourusername"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yourusername"
    }
  ];

  const technologies = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub"
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Portfolio</h2>

          <p>
            Thank you for visiting my personal portfolio website.
            I enjoy building responsive, interactive, and modern web
            applications while continuously learning new technologies.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            {quickLinks.map((item, index) => (

              <li key={index}>

                <a href={item.link}>
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

        </div>

        <div className="footer-technologies">

          <h3>Technologies</h3>

          <div className="technology-list">

            {technologies.map((technology, index) => (

              <span
                key={index}
                className="technology-item"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

        <div className="footer-social">

          <h3>Connect With Me</h3>

          <ul>

            {socialLinks.map((social, index) => (

              <li key={index}>

                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <hr />

        <p>
          © {year} Your Name. All Rights Reserved.
        </p>

        <p>
          Designed and Developed using React.js
        </p>

      </div>

    </footer>
  );
}

export default Footer;
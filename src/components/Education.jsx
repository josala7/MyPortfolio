import React from "react";
import "../App.css";

function Education() {
  const education = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Alexandria University",
      period: "Sep 2021 — Jun 2024",
      description:
        "Studied computer science with a focus on software development, problem solving, and modern computing technologies.",
      skills: [
        "Web Development",
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Networks",
        "AI",
        "Java",
        "Databases",
      ],
    },
    {
      title: "Digital Egypt Pioneers Initiative",
      institution: "Ministry of Communications and IT",
      period: "Apr 2024 — Oct 2024",
      description:
        "Completed an intensive training program focused on full-stack web development and professional skills.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Communication",
        "Presentation",
      ],
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="section-heading">
          <span className="section-number">03.</span>
          <h2>Education</h2>
          <span className="heading-line"></span>
        </div>

        <p className="education-intro">
          My academic background and professional training have helped me
          build a strong foundation in software development.
        </p>

        <div className="education-grid">
          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-card-top">
                <span className="education-icon">
                  🎓
                </span>

                <span className="education-period">
                  {item.period}
                </span>
              </div>

              <h3>{item.title}</h3>

              <h4>{item.institution}</h4>

              <p className="education-description">
                {item.description}
              </p>

              <div className="education-skills">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;

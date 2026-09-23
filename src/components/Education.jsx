import React from "react";
import "../App.css";

function Education() {
  const education = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Alexandria University",
      period: "Sep 2021 — Jun 2024",
      description:
        "Studied computer science with a focus on software development and problem solving.",
      courses: [
        "Web Development",
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence",
        "Java",
        "Databases",
      ],
    },
    {
      title: "Digital Egypt Pioneers Initiative (DEPI)",
      institution: "Ministry of Communications and Information Technology",
      period: "Apr 2024 — Oct 2024",
      description:
        "Completed an intensive training program focused on modern web development and professional skills.",
      courses: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Communication",
        "Presentation Skills",
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

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={index}>

              <div className="timeline-marker">
                <span></span>
              </div>

              <div className="education-card">

                <div className="education-header">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.institution}</h4>
                  </div>

                  <span className="education-period">
                    {item.period}
                  </span>
                </div>

                <p className="education-description">
                  {item.description}
                </p>

                <div className="education-skills">
                  {item.courses.map((course, courseIndex) => (
                    <span key={courseIndex}>{course}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;

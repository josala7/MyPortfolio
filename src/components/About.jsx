import me from "../assets/img/me..jpeg";
function About() {
  return (
    <div className="About" id="about">
      <h2>About Me</h2>
      <div className="aboutinfo">
        <div className="img">
          <img src={me} alt="Header Img" />
        </div>

        <p>
           I recently graduated with a degree in a Computer Science departement from faculty of science in Alexandria university, building a strong foundation in programming, algorithms,
           and problem-solving. Passionate about web development, I enjoy blending design and functionality to create intuitive digital experiences.
           Now, as a Wordpress Developer,
           I’m eager to apply my skills and creativity to crafting seamless and engaging user interfaces.
        </p>
      </div>
    </div>
  );
}

export default About;

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
          Hi, I'm Yousef, a 22-year-old front-end developer driven by a deep
          passion for web technologies and a desire to continuously learn and
          improve. I pride myself on being hardworking, detail-oriented, and
          always eager to tackle new challenges. With a strong foundation in
          front-end development, I am committed to delivering high-quality,
          user-focused solutions that contribute to meaningful digital
          experiences. My journey is fueled by a constant curiosity and a
          dedication to growing both personally and professionally in the tech
          industry.
        </p>
      </div>
    </div>
  );
}

export default About;

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import personal2 from "../assets/img/personal2.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/Facebook.png";
import navIcon2 from "../assets/img/instagram.png";
import navIcon3 from "../assets/img/linkedin.png";
import navIcon4 from "../assets/img/github.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const MainBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["I'm a WordPress Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <>
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  
                  <h1>

                    {`Hi! I'm Yousef`}{" "} <br/>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "WordPress Developer" ]'
                      >
                      <span className="wrap">{text}</span>
                    </span>
                      
                  </h1>
                  
                  <p>
                  Hi, I’m Yousef — a WordPress developer with a strong passion for learning and solving problems.
                     I’m dedicated, hardworking, and always looking for new challenges that push me to grow and improve my skills in web development.

                  </p>
              
                               
                  <div className="social-icon">
                    <a
                      href="https://www.facebook.com/profile.php?id=100011305060509"
                      target="_blank"
                    >
                      <img src={navIcon1} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/yousefmohamed9557/"
                      target="_blank"
                    >
                      <img src={navIcon2} alt="" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yousefmohamed23/"
                      target="_blank"
                    >
                      <img src={navIcon3} alt="" />
                    </a>
                    <a href="https://github.com/josala7" target="_blank">
                      <img src={navIcon4} alt="" />
                    </a>
                  </div>
                  {/* <button>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
                </>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={personal2} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

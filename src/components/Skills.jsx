import html from "../assets/img/skill1.png";
import css from "../assets/img/skill2.png";
import js from "../assets/img/skill3.png";
import react from "../assets/img/skill4.png";
import redux from "../assets/img/redux1.png";
import bootstrap from "../assets/img/skill5.jpeg";
import tailwind from "../assets/img/skill6.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/leftArrow.png";
// import arrow2 from "../assets/img/rightArrow.png";
// import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have gained hands-on experience with various tools and
                technologies that allow me to bring ideas to life on the web.
                Below are some of the key skills that I have developed
                throughout my career:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

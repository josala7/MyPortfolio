import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProductCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/p2.png";
import projImg5 from "../assets/img/charts.png";
import projImg6 from "../assets/img/home.png";
import stayin from "../assets/img/Stay-in.jpg"
import Pali from "../assets/img/Pali.jpg"
import copalin from "../assets/img/copalin.jpg"
import ERA from "../assets/img/ERA.jpg"
import VoiLuna from "../assets/img/VoiLuna.jpg"
import egyglove from "../assets/img/egyglove.png";
import metal from "../assets/img/metal.png";
import onehoster from "../assets/img/onehoster.png";

import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const BasicsProjects=[
    {
      title: "solar panel",
      description:
        "A responsive landing page showcasing the company's solar panel services and providing information about the company, the website built with HTML5 and CSS3.",
      Live: "https://solarpanel-landingpage.netlify.app/",
      Repo: "https://github.com/josala7/landingPage",
      imgUrl: projImg6,
    },
    {
      title: "cloth shop",
      description: "E-commerce Application",
      Live: "https://ecommercewithvanillajs.netlify.app/",
      Repo: "https://github.com/josala7/EcommerceVanillaJS",
      imgUrl: projImg3,
    },
  ]
  const ReactProjects = [
    
    {
      title: "Hotel Dashboard",
      description:
        "A Real world Dashboard that enables employees to manage their hotel operations with many features",
      Live: "https://the-wild-oasis-self-kappa.vercel.app/login",
      Repo: "https://github.com/josala7/Hotel-Dashboard",
      imgUrl: projImg5,
    },
    {
      title: "Pizza Store",
      description:
        "A professional React application for delivering pizzas to customers",
      Live: "https://pizza-store-rust.vercel.app/",
      Repo: "https://github.com/josala7/Pizza-Store",
      imgUrl: projImg4,
    },
    {
      title: "Agena Graduation project",
      description: "Dashboard and ecommerce mern stack Application",
      Live: "https://graduation-project-inky.vercel.app",
      Repo: "https://github.com/josala7/Graduation-Project",
      imgUrl: projImg1,
      
    },
    {
      title: "usePopcorn website",
      description: "movie react website",
      Live: "https://use-popcorn-nine-psi.vercel.app/",
      Repo: "https://github.com/josala7/usePopcorn",
      imgUrl: projImg2,
    },
    
  ];
  const WordpressProjects=[

   {
      title: "Copalin",
      description:
        " Copalin is Chemical Industries Company specializing in protective, marine, and decorative coatings.",
      Live: "https://copalin.com/web/",
      imgUrl: copalin,
    },
   {
      title: "ERA-TBOT",
      description:
        "UAE-based trading technology firm specializing in high-performance automated solutions for MetaTrader 4.",
      Live: "https://eratbot.com/",
      imgUrl: ERA,
    },
   {
      title: "Metal Technology",
      description:
        " Metal Technology is a leading manufacturer of electrical distribution panels in Egypt, offering innovative, high-quality solutions",
      Live: "https://metaltechnology.org/",
      imgUrl: metal,
    },
    {
      title: "Egyglove",
      description:
        " EGYGLOVE Company is a leading medical latex powder free gloves manufacturer based in Egypt",
      Live: "https://egyglove.com/web/",
      imgUrl: egyglove,
    },
   
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">WordPress</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React.js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Html,CSS & JS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {WordpressProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {ReactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                          <Row>
                          {BasicsProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

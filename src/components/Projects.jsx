import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProductCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg4 from "../assets/img/p2.png";
import projImg5 from "../assets/img/charts.png";
import projImg6 from "../assets/img/home.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "solar panel",
      description:
        "A responsive landing page showcasing the company's solar panel services and providing information about the company, the website built with HTML5 and CSS3.",
      Demo: "https://solarpanel-landingpage.netlify.app/",
      Repo: "https://github.com/josala7/landingPage",
      imgUrl: projImg6,
    },
    {
      title: "Hotel Dashboard",
      description:
        "A Real world Dashboard that enables employees to manage their hotel operations with many features",
      Demo: "https://the-wild-oasis-self-kappa.vercel.app/login",
      Repo: "https://github.com/josala7/Hotel-Dashboard",
      imgUrl: projImg5,
    },
    {
      title: "Pizza Store",
      description:
        "A professional React application for delivering pizzas to customers",
      Demo: "https://pizza-store-rust.vercel.app/",
      Repo: "https://github.com/josala7/Pizza-Store",
      imgUrl: projImg4,
    },
    {
      title: "Agena Graduation project",
      description: "Dashboard and ecommerce mern stack Application",
      Demo: "graduation-project-inky.vercel.app",
      Repo: "https://github.com/josala7/Graduation-Project",
      imgUrl: projImg1,
      onclick,
    },
    {
      title: "usePopcorn website",
      description: "movie react website",
      Demo: "https://use-popcorn-nine-psi.vercel.app/",
      Repo: "https://github.com/josala7/usePopcorn",
      imgUrl: projImg2,
    },
    {
      title: "cloth shop",
      description: "E-commerce Application",
      Demo: "https://ecommercewithvanillajs.netlify.app/",
      Repo: "https://github.com/josala7/EcommerceVanillaJS",
      imgUrl: projImg3,
    },
  ];

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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>No projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>No projects</p>
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

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
import tfc from "../assets/img/tfc.png";
import elhoda from "../assets/img/elhoda.png";
import melt from "../assets/img/melt.png";
import noprshr from "../assets/img/noprshr.png";
import elborg from "../assets/img/elborg.png";
import nasons from "../assets/img/nasons.png";
import TripleE from "../assets/img/TripleE.png";
import alderbynight from "../assets/img/alderbynight.jpg";
import elraielaam from "../assets/img/elraielaam.jpg";
import malaeb from "../assets/img/malaeb.jpg";

import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Buisnesses=[
    {
      title: "El Hoda",
      description:
        " premier Egyptian company serving the healthcare sector for over two decades",
      Live: "https://elhodatrade.com/",
      imgUrl: elhoda,
    },
    {
      title: "TFC Finance",
      description:
        "non-bank financial institution providing structured financing solutions.",
      Live: "https://tfc-finance.com/",
      imgUrl: tfc,
    },
    {
      title: "Melt",
      description:
        "Misr Emirates Life Takaful - Salama Company is providing Takaful Life Insurance in Egypt ",
      Live: "https://melt.themirrorful.com/",
      imgUrl: melt,
    },
    {
      title: "alderbynight",
      description:
        "sports podcast website built to showcase football-focused episodes, featured guests, and podcast content.",
      Live: "https://alderbynight.com/",
      imgUrl: alderbynight,
    },
    {
      title: "elraielaam",
      description:
        "Arabic news and media website featuring categorized news coverage across politics, economy, sports and technology ",
      Live: "https://elraielaam.com/",
      imgUrl: elraielaam,
    },
    {
      title: "malaeb",
      description:
        "A responsive Arabic sports news platform covering local and international sports",
      Live: "https://malaeb.info/",
      imgUrl: malaeb,
    },
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
  const Ecommerce = [
     {
      title: "Nasons",
      description:
        "NASONS Electric is a leading manufacturer of heat-shrink products and electrical cable accessories",
      Live: "https://nasons.com/",
      imgUrl: nasons,
    },
     {
      title: "NO PRSHR",
      description:
        "NO PRSHR is a specialty coffee roastery built on patience, precision, and respect for the process",
      Live: "https://noprshr.com/",
      imgUrl: noprshr,
    },
     {
      title: "El Borg",
      description:
        "ELBORG FOUNDRY FOR THE MANUFACTURING OF CUSTOMISED, HIGH QUALITY, HEAT AND WEAR RESISTANT, SPECIAL STEELS AND ALLOYS, SPARE PARTS.",
      Live: "https://elborgfoundry.com/",
      imgUrl: elborg,
    },

    
  ];
  const Elearning=[
     {
      title: "Triple E",
      description:
        "Institute for Teaching University Students ",
      Live: "https://www.tripleeedu.com/",
      imgUrl: TripleE,
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
                  <h2>WordPress Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Buisness</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Ecommerce</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Elearning</Nav.Link>
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
                          {Buisnesses.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Ecommerce.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                          <Row>
                          {Elearning.map((project, index) => {
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

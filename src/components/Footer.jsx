import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon3 from "../assets/img/linkedin.png";
import navIcon4 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="https://portfolio-swart-eight.vercel.app/">

            <img src={logo} alt="Logo" />
          </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yousefmohamed23/">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/josala7" target="_blank">
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

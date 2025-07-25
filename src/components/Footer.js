import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="contacts" >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chaker-chourouk-a32841257/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ChakerChourouk"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:mc_chaker@esi.dz"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

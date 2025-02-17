import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import certificat1 from "../assets/img/Certificat1.jpg";
import certificat2 from "../assets/img/Certificat2.jpg";
import certificat3 from "../assets/img/Certificat3.jpg";
import certificat4 from "../assets/img/CHAKER CHOUROUK.jpg";
import certificat5 from "../assets/img/CertificateOfCompletion.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Certifications.css'; // Import your CSS file

export const Certifications = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: certificat1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: certificat2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: certificat3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: certificat4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: certificat5,
    },
  ];

  return (
    <section className="project" id="certification">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certifications</h2>
                <p>  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} sm={12} md={4} className="mb-4"> {/* Ensures 3 pictures per row */}
                                <ProjectCard
                                  {...project}
                                  />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

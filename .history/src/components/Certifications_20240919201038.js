import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import certificat1 from "../assets/img/Certificat1.png";
import certificat2 from "../assets/img/Certificat2.jpg";
import certificat3 from "../assets/img/Certificat3.jpg";
/*import certificat4 from "../assets/img/Cert";
import certificat5 from "../assets/img/Certificat3.png";*/
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
    }
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
                              <ProjectCard
                                key={index}
                                {...project}
                                />
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
  )
}

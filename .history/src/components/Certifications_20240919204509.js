import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard2";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {

  const projects = [
    {
      title: "Introduction to Web Development",
      organization: "FreeCodeCamp",
      date: "June 2023",
      skills: ["HTML", "CSS", "JavaScript"],
      certificateUrl: "https://www.example.com/certificate1",
    },
    {
      title: "Data Science for Beginners",
      organization: "Coursera",
      date: "August 2023",
      skills: ["Python", "Pandas", "Machine Learning"],
      certificateUrl: "https://www.example.com/certificate2",
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
                <p>Here are some of the certifications I have earned.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} sm={12} md={4} className="mb-4">
                                <ProjectCard
                                  title={project.title}
                                  organization={project.organization}
                                  date={project.date}
                                  skills={project.skills}
                                  certificateUrl={project.certificateUrl}
                                />
                              </Col>
                            );
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
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

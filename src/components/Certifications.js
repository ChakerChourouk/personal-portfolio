import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard2";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {

  const projects = [
    {
      title: "Product Management",
      organization: "RDSI",
      date: "Feb 2025",
      skills: ["Product Management", "Market Research & User Research", " Agile & Scrum Methodologies","UX/UI Thinking for Products"],
      certificateUrl: "https://www.example.com/certificate1",
    },
    {
      title: "Développement Web (Django & Python)",
      organization: "RDSI",
      date: "Dec 2024",
      skills: ["Django Framework", "Django REST Framework (DRF)", "Python for Web Development" ,"Database Management (PostgreSQL, SQLite, etc.)"],
      certificateUrl: "https://www.example.com/certificate2",
    },
    {
      title: "Python",
      organization: "Kaggle",
      date: "Feb 2025",//Python Programming · Data Structures · Functions & Loops · Data Handling (Lists, Dictionaries, Pandas) · Jupyter Notebooks
      skills: ["Python Programming", "Data Structures", "Functions & Loops" ,"Data Handling","Jupyter Notebooks"],
      certificateUrl: "https://www.example.com/certificate2",
    },
    {
      title: "Pandas",
      organization: "Kaggle",
      date: "Feb 2025",//Data Analysis · Data Manipulation · Data Visualization
      skills: ["Data Analysis", "Data Manipulation", "Data Visualization"],
      certificateUrl: "https://www.example.com/certificate2",
    },//What Is Generative AI?
    {
      title: "Intro to Machine Learning",
      organization: "Kaggle",
      date: "Feb 2025",//Machine Learning · Model Validation · Kaggle Competitions · Random Forests · Overfitting & Underfitting
      skills: ["Machine Learning", "Model Validation", "Kaggle Competitions" ,"Random Forests","Overfitting & Underfitting"],
      certificateUrl: "https://www.example.com/certificate2",
    },
    {
      title: "What Is Generative AI?",
      organization: "LinkedIn",
      date: "Feb 2025",//Artificial Intelligence (AI) · Generative AI · Generative AI Tools
      skills: ["Artificial Intelligence (AI)", "Generative AI", "Generative AI Tools"],
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

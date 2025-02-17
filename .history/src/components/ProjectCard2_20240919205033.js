import { Card, Button } from "react-bootstrap";
import './ProjectCard2.css'; // Import the CSS file

export const ProjectCard = ({ title, organization, date, skills, certificateUrl }) => {
  return (
    <Card className="custom-card h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{organization}</Card.Subtitle>
        <Card.Text>
          <strong>Date:</strong> {date}<br />
          <strong>Skills Learned:</strong> {skills.join(", ")}
        </Card.Text>
        <Button variant="primary" href={certificateUrl} target="_blank" className="rainbow-button">
          View Credentials
        </Button>
      </Card.Body>
    </Card>
  );
};

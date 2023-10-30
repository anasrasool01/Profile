import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import metamask from "../../Assets/Projects/metamask.jpg";
import design from "../../Assets/Projects/design.jpg";
import ProjectCard from "./ProjectCards"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metamask}
              title="Design Web site"
              description="Developed Amazing Ui with react.js, Material-UI. Have features which allows user to connect to meta mask with Web 3."
              ghLink="https://github.com/anasrasool01/ConnectEtherem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              title="Design the Front End"
              description="Developed Amazing Ui of Market PLace with react.js. Have features of attacing to meta mask and doing other operation like Minting,Uploading Images and description"
              ghLink="https://github.com/anasrasool01/PrivateMarketPlace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              title="Front End Mobile Design"
              description="Developed Amazing Ui of Market PLace with REact native. Have features of attacing to meta mask and doing other operation like Minting,Uploading Images and description"
              ghLink="https://github.com/anasrasool01/PrivateMarketPlace"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

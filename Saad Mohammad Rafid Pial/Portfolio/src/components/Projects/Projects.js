import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import dxBall from "../../Assets/Projects/dxBall.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dxBall}
              isBlog={false}
              title="Dx-Ball Game"
              description="Recreation of the classic Dx Ball using the igraphics library in C for 1-1 term final project."
              link="https://github.com/saadmrp1038/Dx-Ball"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;

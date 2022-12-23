import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studybud from "../../Assets/Projects/StudyBud.png";
import notes from "../../Assets/Projects/Notes.png";
import states from "../../Assets/Projects/States.png";

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
              imgPath={studybud}
              isBlog={false}
              title="StudyBud"
              description="StudyBud is a community app that is built with Django which connects people with similar interests. Users can create a new topics, follow existing ones, comment, view recent activity and more."
              ghLink="https://github.com/Abhinav-CHD/StudyBud"
              demoLink="https://studybud-u3jj.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes App"
              description="An intuitive and handy notes app built entirely with React. It supports features like deleting existing notes and adding new notes, and best of all, it has a toggle to switch between light and dark mode"
              ghLink="https://github.com/Abhinav-CHD/Notes"
              demoLink="https://notesprimary.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={states}
              isBlog={true}
              title="Indian States Guessing Game"
              description="This is an interactive game built with Tkinter and turtle module to teach students about Indian States. Additionally, this game is very versatile, so you can use it to teach other topics such as location of rivers, deserts, rainforests, and so on."
              ghLink="https://github.com/Abhinav-CHD/Indian-States-Guessing-Game"
              // demoLink="link"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

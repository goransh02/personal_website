import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

function Experience() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Convener, IIT Bombay Sports Council]"
              date="May 2021 - Present"
              content={[
                "Providing technical support for over 100+ sports activities,  devloping a centralised sports app for ease of access",
              ]}
            />
            <Resumecontent
              title="Web and Marketing, IIT Bombay Racing]"
              date="May 2021 - Present"
              content={[
                "Modifying the website of IIT Bombay racing, along with bringing in the sponsors for the team",
                // "Imploying NeuroDiffEq package to solve partial differential equations like Stelle gravity equation",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Indian Institute of Technology, Bombay"
              date="2019 - Present"
              content={[
                "B.Tech in MEMS",
                "Minors in CSE, IIT Bombay",

              ]}
            />
            <Resumecontent
              title="St. Paul's School, Jodhpur"
              date="2020"
              content={["Intermediate/+2 | Precentage: 95.4%"]}
            />
            <Resumecontent
              title="St. Paul's School, Jodhpur"
              date="2018"
              content={["Marticulation | CGPA: 10.0"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

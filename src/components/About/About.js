import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import selfImg1 from "../../Assets/Personal/3.jpg";
import selfImg2 from "../../Assets/Personal/2.jpeg";
import selfImg3 from "../../Assets/Personal/4.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "blue" }}>
              Who Am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <Row
              style={{
                justifyContent: "left",
                paddingTop: "12px",
              }}
              className="about-img"
            >
              <img src={selfImg1} alt="about" className="img-fluid" height="" style={{
                borderRadius: 10,
                height: 300,
                width: 200,

              }} />
              <img src={selfImg2} alt="about" className="img-fluid" height="" style={{
                borderRadius: 10,
                height: 300,
                width: 200,
                marginInlineStart: 20
              }} />

            </Row>

            <Row
              style={{
                justifyContent: "left",
                paddingTop: "10px",
              }}
              className="about-img"
            >
              <img
                src={selfImg3}
                alt="about"
                style={{
                  padding: 10,
                  borderRadius: 10,
                  height: 300,
                  width: 410,

                }}
                className="img-fluid"
              />

            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

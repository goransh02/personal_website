import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Personal/image.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Here's a quick <span className="purple"> Introduction </span>
            </h1>
            <p className="home-about-body" style={{ color: "grey" }}>
              I'm a{" "}
              <a href="https://www.iitb.ac.in/mems/en" className="purple">
                Metallurgical Engineering and Material Science
              </a>{" "}
              senior undergraduate at Indian Institute of Technology, Bombay.
              <br />
              <br />
              I am currently pursuing a minor in the <a href="https://www.cse.iitb.ac.in">Computer Science and Engineering Department</a>.
              Along with this, I am keen for web devlopment, and have worked on various projects to become efficient in it.
              <br />
              <br />
              Though poles apart from CS, I have worked as a Marketing Associate part time in a startup,{" "}
              <a
                href="https://www.instagram.com/femealforpcos/"
                className="purple"
              >
                FeMeal
              </a>{" "}
              where we aim to reduce the sufferings of women who have PCOS -
              Polycystic Ovarian Syndrome affecting every 1 in 5 women in India.
              <br />
              <br />
              I'm in the Marketing Subdivision of the{" "}
              <a href="https://www.iitbracing.org/" className="purple">
                IIT Bombay Racing team
              </a>
              . We build race cars and compete with top colleges all over the world. I have even worked in the web section to contrbute to its website  <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: 400 / 2 }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              <span className="purple">Connect </span>with me here
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/goransh02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/goransh-gattani-24b5271b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/gattanigoransh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/goranshgattani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;

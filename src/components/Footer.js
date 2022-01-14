import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Goransh Gattani</h3>
        </Col>
        {/* <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col> */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/goransh02"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/gattanigoransh"
                style={{ color: "white" }}
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/goransh-gattani-24b5271b9/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/goranshgattani"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-1"> */}
        <p style={{ textAlign: "justify", color: "grey" }} className="about-text">
          Hi, I am Goransh Gattani, a second year UG at the MEMS department, IIT Bombay.
          I belong from Jodhpur, Rajasthan, which is not dry btw.
          Apart from this, my interests are Coding, Standup Comedy and Chess. <br />
          <strong style={{ textalign: "center" }}>Laughing at my own jokes</strong>
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

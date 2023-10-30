import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anas Rasool </span>
            from <span className="purple">Bahawalpur,Pakistan.</span>
            <br /> I am a Sixth Smester student pursuing Bs Degree
            in Software Engineering at Islamia University Of Bahawalpur
            <br />
            Additionally, I am currently employed as a software developer at
            Enigmatix.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving Hard to build things that are Precious!"{" "}
          </p>
          <footer className="blockquote-footer">Anas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

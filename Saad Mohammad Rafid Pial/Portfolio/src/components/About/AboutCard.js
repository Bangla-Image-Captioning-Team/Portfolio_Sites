import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pial </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I am a 1st year student studying Computer Science & Engineering in Bangladesh University of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Video Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Reading Books
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Anime
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          “Life is not a game of luck. If you wanna win, work hard.”
          </p>
          <footer className="blockquote-footer">Sora</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

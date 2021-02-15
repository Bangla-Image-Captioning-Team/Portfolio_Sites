import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I haven't delved too deep in the developer side of programming. We will see how it goes.
              <br />
              <br />I only know some basic languages.
              <i>
                <b className="purple"> C,C++,HTML. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  learning CSS,JS and React.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I try to participate in competetive programming.
              <i>
                <b className="purple"> </b>
              </i>
              
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saadmrp1038"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

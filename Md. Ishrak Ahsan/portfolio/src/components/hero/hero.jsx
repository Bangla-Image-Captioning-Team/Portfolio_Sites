import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/1.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font40">Hello Everyone!!!</h1>
            <h1 className="weight800 font40">
              I am Md. Ishrak Ahsan.
            </h1>
            <p className="font20">
              This is a portfolio of my works and achievements.
            </p>
            <Button label="CONTACT ME" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;

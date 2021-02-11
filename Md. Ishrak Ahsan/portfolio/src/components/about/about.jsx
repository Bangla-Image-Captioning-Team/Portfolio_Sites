import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME" />
      <p className="font20">
        I am Md. Ishrak Ahsan, currently a first-year undergraduate student, studying Computer Science
        and Engineering <br></br>at Bangladesh University of Engineering and Technology (BUET).
        <br/>I passed my Secondary School Certificate (SSC) Examination
        from St. Joseph Higher Secondary School in 2017 and <br/>Higher Secondary Certificate (HSC)
        Examination from Notre Dame College, Dhaka in 2019. <br/>
      </p>
      {/* <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Md. Ishrak Ahsan" job="Student" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row> */}
    </div>
  </div>
);

export default about;

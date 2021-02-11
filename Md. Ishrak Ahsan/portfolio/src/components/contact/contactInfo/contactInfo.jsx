import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={6} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="House#41/5-6, Road#4, Block#C"
            textLine2="Chanmia Housing, Mohammadpur"
            textLine3="Dhaka, Bangladesh"
          />
        </Col>
        <Col xs={12} lg={6} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="+880 182 607 1969"
            textLine2="+880 194 655 9759"
          />
        </Col>
        <Col xs={12} lg={6} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="ishrak26 AT gmail DOT com"
            textLine2="1905045 AT ugrad DOT cse DOT buet DOT ac DOT bd"
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;

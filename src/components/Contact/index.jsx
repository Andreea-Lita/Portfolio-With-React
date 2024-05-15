import React from 'react';
import './style.css'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Avatar from '../Images/avatar.jpg'
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div style={{ marginTop: 30, marginLeft: 50 }}>

      <Container style={{ marginTop: 80 }}>
        <Row>
          <Col size="md-8">
            <h5>I am a person who likes coding, and mostly coding becoming eficcient for real life! I’ve recently embarked on a journey of web development, creating projects that bring ideas to life!</h5>
            <h5>With every line of code, I try not just building applications, but constructing bridges that connect imagination to reality, transforming the abstract into the tangible.</h5>
              <h5>Developing is also learnig for makeing ideeas a reality!</h5>
            <br />
          </Col>
          <Col size="md-4">
            <img src={Avatar} alt="close avatar" style={{ width: 175, marginTop: 5 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

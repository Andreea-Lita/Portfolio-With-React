import React from 'react';
import './style.css'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Avatar from '../Images/avatar0.jpg'

function Contact() {
  return (
    <div style={{ marginTop: 30, marginLeft: 75 }}>

      <Container style={{ marginTop: 90 }}>
        <Row>
          <Col size="md-8">
            <h5>I am a person who likes coding, and mostly coding becoming eficcient for real life! I’ve recently embarked on a journey of web development, creating projects that bring ideas to life!</h5>
            <h5>With every line of code, I try not just building applications, but constructing bridges that connect imagination to reality, transforming the abstract into the tangible.</h5>
              <h5>Developing is also learnig for makeing ideeas a reality!</h5>
            <br />
            <span class="badge badge-pill badge-secondary"><a href="https://github.com/Andreea-Lita" style={{ color: 'navy' }}>GitHub</a></span>
            <br />
            <span class="badge badge-pill badge-primary"><a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235" style={{ color: 'navy' }}>Linkedin</a></span>
            <br />
            <span class="badge badge-pill badge-secondary"><a href="https://mail.google.com/" style={{ color: 'navy' }}>myemail</a></span>
            <br />
          </Col>
          <Col size="md-4">
            <img src={Avatar} alt="close avatar" style={{ width: 175, marginTop: 15 }} />
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-12">
          
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Contact;

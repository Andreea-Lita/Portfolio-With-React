import React from 'react';

import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import EarthPlanet from '../Images/shot.jpg';
function Contact() {
  return (
    <div style={{ marginTop: 30, marginLeft: 200}}>
        <h1> Andreea (Lita) Malaiasi</h1>
        <h2> Developing is also learnig for makeing ideeas a reality; I hope life will resist and continue to enjoy us!</h2>
        <a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a>
        <br />
        <a href="https://github.com/Andreea-Lita">GitHub</a>
        <br />
        <a href="https://mail.google.com/">myemail</a>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1></h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
         
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

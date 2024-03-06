import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import EarthPlanet from '../components/Images/shot.jpg';
function About() {
  return (
    <div>
      <Hero backgroundImage= {EarthPlanet}>
        <h1> Andreea (Lita) Malaiasi</h1>
        <h2> Developing is also learnig for makeing ideeas a reality; I hope life will resist and continue to enjoy us!</h2>
        <a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a>
        <br />
        <a href="https://github.com/Andreea-Lita">GitHub</a>
        <br />
        <a href="https://mail.google.com/">myemail</a>
      </Hero>``
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

export default About;

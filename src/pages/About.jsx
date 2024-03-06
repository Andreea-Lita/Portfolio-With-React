import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import EarthPlanet from '../components/Images/shot.jpg';
import Avatar from '../components/Images/close_avatar.jpg';
function About() {
  return (
    <div>
      <Hero backgroundImage= {EarthPlanet}>
        <Row>
          <Col size="md-6">
        <h1> Andreea (Lita) Malaiasi</h1>
        <h2> Developing is also learnig for makeing ideeas a reality; I hope life will resist and continue to enjoy us!</h2>
        </Col>
        <Col size="md-4">
        <img src={Avatar} alt="close avatar" style= {{ width: 400, marginTop: 128 }}/>
        </Col>
        </Row>
      </Hero>``
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h2>Skills practicing: HTML, CSS, JavaScript(Bootstrap, NodeJS, JQuery, React)</h2>
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
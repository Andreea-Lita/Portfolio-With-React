import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import EarthPlanet from '../components/Images/shot.jpg';
import Avatar from '../components/Images/Andreea.jpg';

function About() {
  return (
    <div>
      <Hero backgroundImage= {EarthPlanet}>
        <Row>
          <Col size="md-6">
        <h1> Andreea (Lita) Malaiasi</h1>
        <h2> Developing is also learnig for makeing ideeas a reality</h2>
        </Col>
        <Col size="md-4">
        <img src={Avatar} alt="Lita Andreea Malaiasi" style= {{ width: 212, marginTop: 158 }}/>
        </Col>
        <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Skills practicing: HTML, CSS, JavaScript(Bootstrap, NodeJS, JQuery, React)</h3>
          </Col>
        </Row>

        </Container>
        </Row>
      </Hero>``
  
    </div>
  );
}

export default About;
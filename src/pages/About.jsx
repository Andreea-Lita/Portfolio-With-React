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
        <h1> Andreea Malaiasi</h1>
        <h2> Developing is also learnig for makeing ideeas a reality</h2>
        <span class="badge badge-pill badge-primary"><a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a></span>
        <span class="badge badge-pill badge-secondary"><a href="https://github.com/Andreea-Lita">GitHub</a></span>
        </Col>
        <Col size="md-4">
        <img src={Avatar} alt="Andreea (Lita) Malaiasi" style= {{ width: 212, marginTop: 158 }}/>
        </Col>
       
        </Row>
      </Hero>``
  
    </div>
  );
}

export default About;
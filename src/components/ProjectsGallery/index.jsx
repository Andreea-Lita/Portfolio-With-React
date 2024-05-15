import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import React, { useEffect, useState } from 'react';
import portfCardData from "../../../data.json"

function Projects() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    localStorage.setItem('portfCardData', JSON.stringify(portfCardData));
  }, []);

  useEffect(() => {
    const retrievedData = localStorage.getItem('portfCardData');
    const parsedData = JSON.parse(retrievedData);
    setData(parsedData);
  }, []);

  return (
    <section className="starting">
      <Container >
        <Row>
        <div className="project-grid">
          {data.map((item, index) => (
            <div key={index} className="project">
              <h4>{item.name}</h4>
              <a href={item.URL}>Project Link</a>
              <a href={item.githubURL}>GitHub Link</a>
              <img src={item.image} alt={item.name} style={{width:290, margin: 10}}/>
              <h6>{item.note}</h6>
            </div>
          ))}
        </div>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;

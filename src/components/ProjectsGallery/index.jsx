import Container from "../Container";
import "./style.css";
import React, { useEffect, useState } from 'react';
import portfCardData from "../../../data.json"

function Projects() {
  const [data, setData] = useState([]);
  
  // Store data to localStorage
  useEffect(() => {
    localStorage.setItem('portfCardData', JSON.stringify(portfCardData));
  }, []);
  
  // Retrieve data from localStorage
  useEffect(() => {
    const retrievedData = localStorage.getItem('portfCardData');
    const parsedData = JSON.parse(retrievedData);
    setData(parsedData);
  }, []);

  return (
    <section className="starting">
      <Container>
        <div className="project-grid">
          {data.map((item, index) => (
            <div key={index} className="project">
              <h2>{item.name}</h2>
              <a href={item.URL}>Project Link</a>
              <a href={item.githubURL}>GitHub Link</a>
              <img src={item.image} alt={item.name} style={{width:290}}/>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;

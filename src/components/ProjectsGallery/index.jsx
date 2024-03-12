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
      <div>
        <Container>
  {data.map((item, index) => (
          <div key={index}>
  <h2>{item.name}</h2>
        <ul>
          <li>
            <a href={item.URL}>Project Link</a>
          </li>
          <li>
            <a href={item.githubURL}>GitHub Link</a>
          </li>
          <li>
            <img src={item.image} alt={item.name} style={{width:240}}/>
          </li>
        </ul>
        </div>
      ))}
      </Container>
    </div>
  );
  }
  
  export default Projects;
import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import LidarCar from '../assests/trim_from_video_my_car_with_teleoperation_and_map.mp4';
// import LidarCar from '../components/Images/my_teleop_car.jpg';
import Avatar from '../components/Images/Andreea.jpg';
import { FaHtml5, FaCss3, FaBootstrap, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";

import { TbJson } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiCodemirror } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import './aboutstyle.css';


function About() {
  return (
    <div>
      <Hero>
        <div className='overlay'></div>
        <video id='robot' src={LidarCar} autoPlay loop muted />
        <div className='content'>
          <Container size='md-12'>
            <Row>
              <Col size="md-4">
                <h2 id='name'>Andreea Malaiasi</h2>
                <br />
                <span class="badge badge-pill badge-primary"><a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235" style={{ color: 'white' }}><FaLinkedin color='white' size='14px' style={{ marginRight: '5px' }} />Linkedin</a></span>
                <span class="badge badge-pill badge-secondary"><a href="https://github.com/Andreea-Lita" style={{ color: 'white' }}>< FaGithub color='white' size='14px' style={{ marginRight: '5px' }} />GitHub</a></span>
              </Col>
              <Col size="md-4">
                <img src={Avatar} alt="Andreea (Lita) Malaiasi" style={{ width: 200, marginTop: 90 }} />
              </Col>
            </Row>
          </Container>
        </div>
      </Hero>
      <div className='otherInfo'>
        <Container>
          <h5>Practicing web development on my portfolio!</h5>
          <FaHtml5 color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <FaCss3 color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <IoLogoJavascript color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <FaBootstrap color='cyan' size='21px' style={{ marginRight: '10px' }} />
          < FaGithub color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <DiJqueryLogo color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <TbJson color='cyan' size='21px' style={{ marginRight: '10px' }} />
          < FaReact color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <TbApi color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <FaNodeJs color='cyan' size='21px' style={{ marginRight: '10px' }} />
          <SiCodemirror color='cyan' size='21px' style={{ marginRight: '10px' }} />

        </Container>
      </div>
    </div>
  );
}

export default About;
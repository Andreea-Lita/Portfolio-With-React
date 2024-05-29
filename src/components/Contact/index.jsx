import React from 'react';
import './style.css'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Avatar from '../Images/avatar.jpg'
import { FaGithub } from "react-icons/fa";
import trim_from_video_my_car_with_teleoperation_and_map from '../Images/trim_from_video_my_car_with_teleoperation_and_map.mov'
function Contact() {
  return (
    <div style={{ marginTop: 30, marginLeft: 50 }}>

      <Container style={{ marginTop: 80 }}>
        <Row>
          <Col size="md-8">
          
            <h5>I am a person who likes coding, and mostly coding becoming eficcient for real life! I’ve recently embarked on a journey of web development, creating projects that bring ideas to life!</h5>
            <h5>With every line of code, I try not just building applications, but constructing bridges that connect imagination to reality, transforming the abstract into the tangible.</h5>
              <h5>Developing is also learnig for makeing ideeas a reality!</h5>
              <h5>I feel happy that you are reading this content !</h5>
              <h5>I hope I will develop my skills to be even a more experienced web developer!</h5>
              <h6>Some thoughts! </h6>
            <br />
            <br />
            <br />
            <div className='main'>
        <div className="overlay"></div>
        <video src={trim_from_video_my_car_with_teleoperation_and_map} autoPlay loop muted />
        {/* <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div> */}
    </div>
          </Col>
          <Col size="md-4">
            <img src={Avatar} alt="close avatar" style={{ width: 175, marginTop: 5 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

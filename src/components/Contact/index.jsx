import React from 'react';
import './contactstyle.css'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Avatar from '../Images/avatar.jpg'
import { FaGithub } from "react-icons/fa";
import ContactForm from './contactfor';
// import trim_from_video_my_car_with_teleoperation_and_map from '../../assests/trim_from_video_my_car_with_teleoperation_and_map.mp4'
import my_teleop_car from '../Images/my_teleop_car.jpg'
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
            <h5>I consider myself a web developer!</h5>
            <h6></h6>
            <h5>I hope I will develop my skills to be even a more experienced web developer and I also like A. I. and Robotics field as is ilustrated further down in a piece of a individual project for my bachelor degree building a small robot car:</h5>
            <br />
            <br />
            <br />
            {/* <div className='video-column'>
              <div className="overlay">
                <video src={trim_from_video_my_car_with_teleoperation_and_map} autoPlay loop muted />
              </div>
            </div> */}
          </Col>
          <Col size="md-4">
            <img src={Avatar} alt="close avatar" style={{ width: 175, marginTop: 5 }} />
          </Col>
        </Row>
        <Row>
          <img id='picture_robot' src={my_teleop_car} alt='my robot car driven with remote control mini pad to make a map'/>
        </Row>
       
      </Container>
      <br />
      <br />
      <Container> <ContactForm /> {/* Add this line to include the form */}</Container>
    </div>
  );
}

export default Contact;


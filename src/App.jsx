import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import CV from './components/CV';
import Contact from './components/Contact';
import Projects from './components/ProjectsGallery';
import Skills from './components/Skills/Skills';
import ProjectAgritek from './components/PtojectAgritek'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cV" element={<CV/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projectAgritek" element={<ProjectAgritek/>} />
            </Routes> 
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

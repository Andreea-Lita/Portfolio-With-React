import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Discover from './pages/Discover';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
// import ProjectGallery from './components/ProjectGallery';
import CV from './components/CV';
import Contact from './components/Contact';
import Projects from './components/ProjectsGallery'


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
            {/* <Route path="/discover" element={<Discover/>} /> */}
            <Route path="/cV" element={<CV/>} />
            <Route path="/projects" element={<Projects/>} />
            </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

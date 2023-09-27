import React from 'react';
import './App.css';
import './components/navbar.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import Contact from './components/contact.component';
import DiseaseDetection from './components/diseaseDetection.component';
import Welcome from './components/welcome.component';
import Knowledge from './components/knowledge.component';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/diseasedetection" element={<DiseaseDetection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

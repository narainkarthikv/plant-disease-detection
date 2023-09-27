import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="fade-in">Welcome to Plant-Doc!</h1>
      <p>Your Plant Health Companion</p>
      <Link to="/diseasedetection" className="start-button slide-up">
        Get Started
      </Link>
    </div>
  );
};

export default Welcome;

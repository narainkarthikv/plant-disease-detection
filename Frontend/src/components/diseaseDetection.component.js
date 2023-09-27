import React, { useState } from 'react';
import './diseaseDetection.css';
import axios from 'axios';

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [diseaseImage, setDiseaseImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDetectClick = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('img', selectedImage);

      try {
        setIsLoading(true);
        const response = await axios.post('http://127.0.0.1:4000/api', formData);
        const data = response.data;
        setDiseaseResult(data.prediction?.predictions);
        setDiseaseImage(data.image);
      } catch (error) {
        console.error('Error while detecting disease:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="disease-detection-container">
      {!isLoading && (
            <h1 className="detection-title">Disease Detection</h1>
      )
      }
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="selected-image" />
        )}
      </div>

      
      {isLoading && (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      )}

      {!isLoading && (
        <div className="button-section">
          <button className="detect-button" onClick={handleDetectClick}>
            Detect Disease
          </button>
        </div>
      )}

      {diseaseImage && (
        <div className="detected-image">
          <h2>Detected Image:</h2>
          <img src={`data:image/jpeg;base64,${diseaseImage}`} alt="Detected" />
        </div>
      )}

      {diseaseResult && (
        <div className="detection-results">
          <h2>Predicted Disease:</h2>
          <ul>
            {diseaseResult.map((result, index) => (
              <div key={index} className="result-item">
                <p>X: {result.x}</p>
                <p>Y: {result.y}</p>
                <p>Width: {result.width}</p>
                <p>Height: {result.height}</p>
                <p>Confidence: {result.confidence * 100}%</p>
                <p>Class: {result.class}</p>
                {/* <p>Image Path: {result.image_path}</p> */}
                <p>Prediction Type: {result.prediction_type}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;

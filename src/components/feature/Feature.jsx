import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => {
  return (
  <div className="gpt3-features-container-featur">
    <div className="gpt3-features-container-featur-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3-features-container-featur-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature;
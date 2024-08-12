import React from 'react';
import "../loader/Circularloader.css";

const CircularLoader = ({ progress }) => {
  const strokeDashoffset = 440 - (440 * progress) / 100;

  return (
    <div className="circular-loader-container">
      <svg className="circular-loader" viewBox="0 0 160 160">
        <circle className="circular-loader-bg" cx="80" cy="80" r="70" />
        <circle
          className="circular-loader-progress"
          cx="80"
          cy="80"
          r="70"
          style={{ strokeDashoffset }}
        />
      </svg>
      <div className="circular-loader-text">{`${progress}%`}</div>
    </div>
  );
};

export default CircularLoader;

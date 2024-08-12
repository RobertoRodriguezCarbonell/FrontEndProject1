import React, { useState, useEffect } from 'react';
import "../loader/Barloader.css";

const BarLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bar-loader-container">
      <div className="bar-loader">
        <div className="bar-loader-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default BarLoader;

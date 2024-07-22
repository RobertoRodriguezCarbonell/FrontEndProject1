import React, { useState, useEffect } from 'react';

const colors = ['#FF7A00', '#FFA24B'];

const DynamicText = ({ text }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ color: colors[colorIndex], transition: 'color 0.5s' }}>
      {text}
    </span>
  );
};

export default DynamicText;

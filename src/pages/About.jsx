import React, { useState, useEffect } from "react";
import BarLoader from "../components/loader/Barloader";
import CircularLoader from "../components/loader/Circularloader";

const About = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 0
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 text-sandhard">
      <h1 className="font-bold text-2xl">Loaders</h1>
      <div className="mt-4">
        <h1 className="font-bold text-lg">Bar Loader</h1>
        <BarLoader progress={progress} />
      </div>
      <h1 className="font-bold text-lg mt-4">Circular Loader</h1>
      <div className="mt-4">
        <CircularLoader progress={progress} />
      </div>
    </div>
  );
};

export default About;

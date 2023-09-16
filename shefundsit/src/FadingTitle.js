import React, { useState, useEffect } from "react";
import "./FadingTitle.css"; // Create a CSS file for styling

const FadingTitle = ({ titles, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setFadeIn(true); // Start fading in the next title
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, duration / 2); // Half the duration for each phase (in/out)
    }, duration);

    return () => clearInterval(interval);
  }, [currentIndex, duration, titles]);

  return (
    <div className={`fading-title ${fadeIn ? "fade-in" : "fade-out"}`}>
      {titles[currentIndex]}
    </div>
  );
};

export default FadingTitle;

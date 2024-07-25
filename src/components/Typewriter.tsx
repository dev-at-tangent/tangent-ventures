import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  duration = 100,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, duration, text]);

  return (
    <div className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Typewriter;

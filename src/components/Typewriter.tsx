import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";

const Typewriter = forwardRef(({
  text,
  duration = 100,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}, ref) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useImperativeHandle(ref, () => ({
    startTyping: () => setIsTyping(true),
  }));

  useEffect(() => {
    let interval: any;
    
    if (isTyping && currentIndex < text.length) {
      interval = setInterval(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, duration);
    }

    return () => clearInterval(interval);
  }, [currentIndex, duration, text, isTyping]);

  return (
    <div className={className}>
      {currentText}
      {currentText !== text && <span className="animate-blink">|</span>}
    </div>
  );
});

export default Typewriter;
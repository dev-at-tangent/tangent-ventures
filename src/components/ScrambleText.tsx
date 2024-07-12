import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrambleTextComponentProps {
  finalText: string;
  className?: string;
  duration?: number;
  charsPerGroup?: number;
  delay?: number;
}

const ScrambleText: React.FC<ScrambleTextComponentProps> = ({
  finalText,
  className,
  duration = 2,
  charsPerGroup = 3,
  delay = 0,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let currentText = "";
    const timeline = gsap.timeline({ delay: delay });

    // Clear any existing text
    element.textContent = "";

    const scrambleText = (endIndex: number) => {
      const scrambledText = finalText
        .split("")
        .map((char, index) => {
          if (index > endIndex - charsPerGroup && index <= endIndex) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return index <= endIndex - charsPerGroup ? char : " ";
        })
        .join("");
      element.textContent = scrambledText;
    };

    for (let i = 0; i < finalText.length; i += charsPerGroup) {
      const endIndex = Math.min(i + charsPerGroup, finalText.length);
      timeline.to(
        {},
        {
          duration: (duration / finalText.length) * charsPerGroup,
          onStart: () => {
            currentText = finalText.substring(0, endIndex);
          },
          onUpdate: () => scrambleText(endIndex),
          onComplete: () => {
            element.textContent = currentText;
          },
        }
      );
    }

    return () => {
      timeline.kill(); // Clean up the animation when component unmounts
    };
  }, [finalText, duration, charsPerGroup, delay]);

  return <div ref={textRef} className={className}></div>;
};

export default ScrambleText;

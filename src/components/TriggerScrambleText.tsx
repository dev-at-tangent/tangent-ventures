import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";

interface ScrambleTextComponentProps {
  initialText?: string;
  finalText: string;
  className?: string;
  duration?: number;
  charsPerGroup?: number;
  delay?: number;
}

export interface ScrambleTextHandle {
  triggerAnimation: () => void;
}

const ScrambleText = forwardRef<ScrambleTextHandle, ScrambleTextComponentProps>(({
  initialText = "",
  finalText,
  className,
  duration = 2,
  charsPerGroup = 3,
  delay = 0,
}, ref) => {
  const textRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    triggerAnimation: () => {
      startScrambleAnimation();
    },
  }));

  useEffect(() => {
    startScrambleAnimation();
  }, [initialText, finalText, duration, charsPerGroup, delay]);

  const startScrambleAnimation = () => {
    const element = textRef.current;
    if (!element) return;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let currentText = initialText;
    const timeline = gsap.timeline({ delay: delay });

    // Set initial text
    element.textContent = initialText;

    const scrambleText = (endIndex: number) => {
      const scrambledText = finalText
        .split("")
        .map((char, index) => {
          if (index > endIndex - charsPerGroup && index <= endIndex) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return index <= endIndex - charsPerGroup ? char : (currentText[index] || " ");
        })
        .join("");
      element.textContent = scrambledText;
    };

    const maxLength = Math.max(initialText.length, finalText.length);

    for (let i = 0; i < maxLength; i += charsPerGroup) {
      const endIndex = Math.min(i + charsPerGroup, maxLength);
      timeline.to(
        {},
        {
          duration: (duration / maxLength) * charsPerGroup,
          onStart: () => {
            currentText = finalText.substring(0, endIndex) + currentText.substring(endIndex);
          },
          onUpdate: () => scrambleText(endIndex),
          onComplete: () => {
            element.textContent = currentText;
          },
        }
      );
    }
  };

  return <div ref={textRef} className={className}></div>;
});

export default ScrambleText;

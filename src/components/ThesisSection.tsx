import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, type Document } from "@contentful/rich-text-types";
import { useScramble } from "use-scramble";
import Lottie from "lottie-react";

gsap.registerPlugin(ScrollTrigger);

export default function ThesisSection({
  title,
  content,
  lottie,
}: {
  title: string;
  content: Document;
  lottie: any;
}) {
  const highlightRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const scrambleTriggerRef = useRef(null);

  const [currentText, setCurrentText] = useState("PRINCIPLE 1");

  const { ref, replay } = useScramble({
    text: currentText,
  });

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setCurrentText(title);
  //     replay();
  //   }, 2000); // Change to targetText after 2 seconds

  //   return () => clearTimeout(timeoutId);
  // }, [replay, title]);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      gsap.to(highlightRef.current, {
        backgroundPosition: "-99.99% 0",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.to(scrambleTriggerRef.current, {
        scrollTrigger: {
          trigger: scrambleTriggerRef.current,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: () => {
            setCurrentText(title);
            replay();
          },
        },
      });
    },
    { scope: ref }
  );

  useEffect(() => {
    // Refresh ScrollTrigger after a short delay to ensure all content is loaded
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(refreshTimer);
  }, []);

  const options = {
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => (
        <span
          ref={highlightRef}
          className="font-bold bg-gradient-to-r from-transparent from-50% via-transparent via-50% to-turq to-50%
          bg-[-0%_0]
          bg-[length:200%_auto]
          transition-all
          duration-500
          ease-out"
        >
          {text}
        </span>
      ),
    },
  };
  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-lg my-16 gap-y-8"
    >
      <div ref={scrambleTriggerRef}>
        <Lottie animationData={lottie} />
      </div>
      <h1 ref={triggerRef} className="text-3xl text-center desktop:text-5xl">
        <span ref={ref}>Test</span>
      </h1>
      <div className="desktop:w-1/2 text-center">
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
}

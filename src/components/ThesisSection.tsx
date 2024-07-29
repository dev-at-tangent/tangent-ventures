import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, type Document } from "@contentful/rich-text-types";
import Lottie from "lottie-react";
import Typewriter from "./Typewriter";

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
  const typewriterRef = useRef(null);
  const highlightTriggerRef = useRef(null);

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
          trigger: highlightTriggerRef.current,
          // markers: true,
          start: "top 70%",
          end: "bottom 70%",
          // markers: true,
          scrub: true,
        },
      });

      // ScrollTrigger for Typewriter
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 70%",
        // markers: true,
        onEnter: () => {
          (typewriterRef.current as any)?.startTyping();
        },
      });
    },
    { scope: containerRef }
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
      <div id="title-trigger" ref={triggerRef}>
        <Lottie animationData={lottie} />
      </div>
      <div ref={highlightTriggerRef}>
        <Typewriter
          text={title}
          duration={50}
          ref={typewriterRef}
          className="text-3xl sm:text-5xl font-medium text-center"
        />
      </div>
      <div className="desktop:w-1/2 text-center">
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
}

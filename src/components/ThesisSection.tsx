import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, type Document } from "@contentful/rich-text-types";

gsap.registerPlugin(ScrollTrigger);

export default function ThesisSection({
  title,
  content,
  image,
}: {
  title: string;
  content: Document;
  image: string;
}) {
  const ref = useRef(null);
  const triggerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(ref.current, {
        backgroundPosition: "-99.99% 0",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
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
          ref={ref}
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
    <div className="flex flex-col items-center text-lg">
      <img src={image} alt="balloon" className="desktop:w-1/2" />

      <h1 ref={triggerRef} className="text-3xl text-center desktop:text-5xl">
        {title}
      </h1>
      <div className="desktop:w-1/2 text-center mt-12">
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
}
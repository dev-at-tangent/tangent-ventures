import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleButtonVisibility = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleButtonVisibility);
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`rounded-full bg-white p-3 fixed drop-shadow-lg bottom-12 right-4 lg:bottom-16 lg:right-16 z-20 ${
        showButton ? "block" : "hidden"
      }`}
    >
      <ArrowUpIcon className="size-6" />
    </button>
  );
}

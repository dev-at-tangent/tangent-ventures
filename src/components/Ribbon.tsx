import { motion } from "framer-motion";

// Define the array of slides with numbers
const slides = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

const SliderNumber = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full mt-12 overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full py-4 text-6xl backdrop-blur-sm bg-white/15">
              {slide.number}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderNumber;

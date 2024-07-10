import React, { useState } from 'react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-64 h-96 [perspective:1000px] cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-blue-500 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">Front</p>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-green-500 [transform:rotateY(180deg)] flex items-center justify-center">
          <p className="text-white text-2xl font-bold">Back</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
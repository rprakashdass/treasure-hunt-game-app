import { useState } from "react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // Fixed typo in variable name (isflipped -> isFlipped)

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <div
        className={`relative flex justify-center items-center bg-gray-900 cursor-pointer w-72 h-72 rounded-lg shadow-lg transform transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={handleFlip}
      >
        {/* Front Content */}
        <div
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>Flip It</p>
        </div>

        {/* Back Content */}
        <div
          className={`absolute inset-0 flex justify-center items-center bg-slate-400 rounded-lg transition-opacity transform duration-500 ${
            isFlipped ? "opacity-100 rotate-y-180 rotate-x-180" : "opacity-0"
          }`}
        >
          <p>You Flipped It</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

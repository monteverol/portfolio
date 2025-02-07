import React, { useEffect, useState } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false); // Tracks user interaction

  useEffect(() => {
    const delay = isInteracted ? 5000 : 3000; // Delay 5s after user click, otherwise 3s
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex =>
        prevIndex < children.length - 1 ? prevIndex + 1 : 0
      );
      setIsInteracted(false); // Reset interaction flag after auto-slide
    }, delay);

    return () => clearTimeout(timer); // Cleanup on unmount or re-render
  }, [currentIndex, isInteracted, children.length]); // Dependencies

  const handleIndicatorClick = index => {
    setCurrentIndex(index);
    setIsInteracted(true); // Prevent auto-slide for 5s
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            {child}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-button_bg" : "bg-background"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
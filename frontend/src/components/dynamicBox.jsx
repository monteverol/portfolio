import React, { useState, useEffect } from 'react';

const DynamicBox = ({ height, width, col, row, top, left }) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[${height}rem] w-[${width}rem] flex flex-col gap-4 z-10`}
      style={{
        top: `calc(${top}% + ${scrollOffset * 0.1}px)`, // Adjust top based on scrollOffset
        left: `${left}%`, // Keep left static or make dynamic similarly
        position: 'absolute', // Fixed positioning
        transition: 'top 0.1s ease-out', // Smooth movement
      }}
    >
      {/* Generate rows dynamically */}
      {Array.from({ length: row }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-2"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {/* Generate columns dynamically for each row */}
          {Array.from({ length: col }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="invert-bg rounded-full opacity-80"
              style={{
                height: '1rem', // Ball size
                width: '1rem',
                backgroundColor: 'var(--cc-bg)',
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicBox;
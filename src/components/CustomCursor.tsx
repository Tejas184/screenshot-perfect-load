
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            cursor: none;
          }
          a, button, [role="button"] {
            cursor: none;
          }
        `}
      </style>
      <div
        className="pointer-events-none fixed left-0 top-0 z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-100 ${isClicking ? 'scale-90' : 'scale-100'}`}
        >
          <path 
            d="M3 3l7.5 7.5M12 21l-7.5-7.5L3 3l9 3 6-6 3 3-6 6 3 9z" 
            fill="url(#gradientCursor)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="gradientCursor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00DBDE" />
              <stop offset="100%" stopColor="#FC00FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;

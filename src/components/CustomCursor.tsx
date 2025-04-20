
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
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-100 ${isClicking ? 'scale-90' : 'scale-100'}`}
        >
          <path 
            d="M4 4l10 10L24 4v10l-10 10h-10l10-10z" 
            fill="url(#arrowGradient)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

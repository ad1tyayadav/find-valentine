import React, { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate heart positions only once on mount
    const generatedHearts = [...Array(15)].map(() => ({
      id: Math.random(), // Unique ID for key
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    setHearts(generatedHearts);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 text-2xl opacity-70 animate-softFloat"
          style={{
            left: heart.left,
            top: heart.top,
            animationDuration: heart.duration,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

// import { Link, NavLink } from "react-router-dom";
// import { useRef, useState, useEffect } from "react";

// Generated once at module load — never during render
const PUMPKINS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 20 + Math.random() * 50,
  rotation: Math.random() * 360,
  opacity: 0.1 + Math.random() * .5,
}));

function RandomPumpkins() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PUMPKINS.map(({ id, left, top, size, rotation, opacity }) => (
        <svg
          key={id}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            opacity,
            transform: `rotate(${rotation}deg)`,
          }}
          viewBox="0 0 100 100"
        >
          <ellipse cx="50" cy="58" rx="14" ry="28" fill="#d97706" />
          <ellipse cx="40" cy="58" rx="13" ry="26" fill="#f59e0b" />
          <ellipse cx="60" cy="58" rx="13" ry="26" fill="#f59e0b" />
          <ellipse cx="30" cy="60" rx="10" ry="22" fill="#d97706" />
          <ellipse cx="70" cy="60" rx="10" ry="22" fill="#d97706" />
          <path
            d="M47 25 C47 18 49 12 55 10 C53 14 55 19 58 24 Z"
            fill="#4a7c59"
          />
        </svg>
      ))}
    </div>
  );
}

export default RandomPumpkins;

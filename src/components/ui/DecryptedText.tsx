import { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  animateOn?: "view" | "hover"; 
}

export const DecryptedText = ({ 
    text, 
    className = "",
    speed = 50,
    // maxIterations = 10, // Unused
    // sequential = true, // Unused
    // revealDirection = "start", // Unused
    // useOriginalCharsOnly = false, // Unused
    characters = letters,
    animateOn = "hover"
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<any>(null);
  const isHovering = useRef(false);

  const scramble = () => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((_letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
      scramble();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
  }, []);

  return (
    <span
      className={`inline-block whitespace-nowrap ${className}`}
      onMouseEnter={() => {
        if (animateOn === "hover") {
            isHovering.current = true;
            scramble();
        }
      }}
      onMouseLeave={() => {
        isHovering.current = false;
      }}
    >
      {displayText}
    </span>
  );
};

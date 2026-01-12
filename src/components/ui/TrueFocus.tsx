import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

export const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (manualMode) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap">
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            className="relative text-white cursor-pointer select-none"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.5,
              transition: `filter ${animationDuration}s ease, opacity ${animationDuration}s ease`,
            }}
            onMouseEnter={() => {
              if (manualMode) setCurrentIndex(index);
            }}
          >
            {word}
            {isActive && (
              <motion.div
                layoutId="focus-border"
                className="absolute -inset-2 border-2 rounded-lg pointer-events-none"
                style={{
                  borderColor: borderColor,
                  boxShadow: `0 0 4px ${glowColor}`,
                }}
                transition={{
                  duration: animationDuration,
                }}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

import React from 'react';
import { DecryptedText } from '../ui/DecryptedText';
import { TrueFocus } from '../ui/TrueFocus';

interface HeroProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ heroRef }: HeroProps) {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4" ref={heroRef}>
      <div className="text-center z-10 max-w-5xl w-full">
        {/* Top tiny label */}
        <p className="text-xs md:text-sm text-neutral-500 mb-8 tracking-widest uppercase">
         <DecryptedText text="System Name: ALAN LUI YIU LUN" className="text-white text-xs md:text-sm" speed={40} />
        </p>

        {/* Main Title using TrueFocus for impact */}
        <div className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 flex flex-col items-center gap-4">
           <TrueFocus 
              sentence="WEB DEVELOPER"
              manualMode={false}
              blurAmount={6}
              borderColor="#B19EEF"
              glowColor="rgba(177, 158, 239, 0.6)"
              animationDuration={1}
              pauseBetweenAnimations={0.8}
           />
        </div>

        {/* Subtext with Decrypted Text effect */}
        <div className="flex flex-col items-center gap-4 text-neutral-400 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          <p>
            Proficient in <span className="text-white font-medium">Web Application Technologies</span> with a strong foundation in communication and problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center mt-4">
            <span>Specializing in</span>
            <DecryptedText text="REACT / TAILWIND / NODEJS / POSTGRESQL / SOLIDITY" className="text-white text-xs md:text-sm" speed={40} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

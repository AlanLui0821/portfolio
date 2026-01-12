import React from 'react';
import PixelTransitionCard from '../ui/PixelTransitionCard';
import knightSafeImg from '../../assets/knightsafe.webp';
import knightradeImg from '../../assets/knightrade.webp';
import app_knightradeImg from '../../assets/app_knightrade.webp';

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

export default function Projects({ projectsRef }: ProjectsProps) {
  const projects = [
    {
      title: "KnighSafe - Application Page",
      description: "Application for KnightSafe, built with React, TypeScript, and Solidity.",
      link: "https://www.knightsafe.io/",
      tech: ["React", "TypeScript", "Solidity"],
      image: knightSafeImg
    },
    {
      title: "Knightrade - Landing Page",
      description: "Landing page for Knightrade, built with React, TypeScript, and Tailwind.",
      link: "https://knightrade.io/",
      tech: ["React", "TypeScript", "Tailwind"],
      image: knightradeImg
    },
    {
      title: "Knightrade - Application Page",
        description: "Application for Knightrade, built with React, Solidity, TypeScript, Node.js, and Tailwind.",
        link: "https://app.knightrade.io/",
      tech: ["React", "Solidity", "TypeScript", "Node.js", "Tailwind"],
      image: app_knightradeImg
    },
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section ref={projectsRef} className="min-h-screen py-20 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center border-b border-gray-800 pb-8">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-[400px] w-full" onClick={() => handleCardClick(project.link)}>
              <PixelTransitionCard 
                className="w-full h-full cursor-pointer"
                gridSize={30}
                pixelColor="#000"
                animationStepDuration={0.2}
                firstContent={
                  <div className="w-full h-full relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                } 
                secondContent={
                  <div className="w-full h-full bg-neutral-900 p-8 flex flex-col justify-center text-center">
                     <h3 className="text-2xl font-bold mb-4 text-[#B19EEF]">{project.title}</h3>
                     <p className="text-gray-300 mb-6 leading-relaxed">
                       {project.description}
                     </p>
                     <div className="flex flex-wrap justify-center gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono px-3 py-1 rounded-full border border-gray-700 bg-black/50 text-gray-400">
                            {t}
                          </span>
                        ))}
                     </div>
                  </div>
                } 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

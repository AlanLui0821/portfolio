import React from 'react';

interface ExperienceProps {
  experienceRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Experience({ experienceRef }: ExperienceProps) {
  const experiences = [
    {
      title: "Software Engineer",
      company: "KS Lab Limited - Central",
      period: "08/2024 - 06/2025",
      description: "Developed scalable and maintainable code for the web application and smart contract, ensuring the long-term stability of the software using React.js and Solidity.js.",
      points: [
        "Integrated a new smart contract into existing systems, increasing capabilities, and improving overall performance.",
        "Developed reusable components that significantly reduced development effort on multiple projects.",
        "Implemented effective debugging strategies, resulting in fewer software defects, and increased reliability.",
        "Documented software specifications and updates for future reference and compliance.",
        "Deployed the new features using the Git action to different environments."
      ]
    },
    {
      title: "Contract Junior Programmer",
      company: "Treasury - Hong Kong",
      period: "10/2021 - 10/2023",
      points: [
        "Worked closely with clients to establish specifications and system designs.",
        "Discussed issues with team members to provide resolution and apply best practices.",
        "Using the manual test to test scalable, highly available software products.",
        "Collaborated closely with cross-functional teams, such as UX/UI designers and QA testers, to create seamless user experiences."
      ]
    },
    {
      title: "Game Programmer",
      company: "Fun town limited - Kowloon, Mong Kok",
      period: "07/2018 - 08/2018",
      points: [
        "Developed engaging gameplay mechanics using industry-standard programming languages.",
        "Designed the game design to highlight the game feature.",
        "Debugged and optimized code to enhance game performance across platforms.",
        "Implemented user feedback to refine game features and improve player experience."
      ]
    }
  ];

  return (
    <section ref={experienceRef} className="min-h-screen py-20 px-6 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center border-b border-gray-800 pb-8">Experience</h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card relative pl-8 md:pl-0">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-px bg-gray-800"></div>
              
              <div className="md:grid md:grid-cols-[1fr,2fr] gap-8">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                  <div className="text-[#B19EEF] font-mono mt-2 text-sm">{exp.period}</div>
                  <div className="text-lg font-medium text-gray-300 mt-2">{exp.title}</div>
                </div>
                
                <div className="space-y-4">
                  {exp.description && (
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gray-600"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

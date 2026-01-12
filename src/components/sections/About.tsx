import React from 'react';

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export default function About({ aboutRef }: AboutProps) {
  return (
    <section ref={aboutRef} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="about-text text-4xl md:text-6xl font-bold mb-12 border-b border-gray-800 pb-8">
          Personal Summary
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="about-text space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Entry-level web developer holding a degree in Information and Communication Technology. 
                Proficient in web application technologies with a strong foundation in communication and problem-solving.
              </p>
              <p>
                Committed to contributing effectively to team projects and addressing technical challenges.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-white text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white text-lg font-semibold">Bachelor of Science (Honor's)</h4>
                  <p className="text-[#B19EEF] text-sm mb-2">Technological And Higher Education Institute of Hong Kong - Chai Wan | 12/2021</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>Completed many types of technology skills in IT</li>
                    <li>Learned more program skills and design thinking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold">High diploma : Game Software Development</h4>
                  <p className="text-[#B19EEF] text-sm mb-2">Vocational Training Council - Tsing Yi | 12/2019</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>Completed a game project on Game Software Development</li>
                    <li>Learned more program skills and design thinking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="text-white text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                <h4 className="text-gray-500 uppercase tracking-wider text-xs font-bold">Development</h4>
                <ul className="space-y-2 text-gray-400 font-mono text-sm">
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">Web development (HTML, CSS, JS)</li>
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">React.js & TypeScript</li>
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">Node.js Programming</li>
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">C# Programming</li>
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">Java Programming</li>
                  <li className="border-l-2 border-[#B19EEF] pl-3 hover:text-white transition-colors">Unity Game Development</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-gray-500 uppercase tracking-wider text-xs font-bold">Specialized & Tools</h4>
                <ul className="space-y-2 text-gray-400 font-mono text-sm">
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">Blockchain Technology</li>
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">Solidity & Smart Contracts</li>
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">API Integration</li>
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">Database Management (MySQL)</li>
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">Version Control (GitHub)</li>
                  <li className="border-l-2 border-gray-700 pl-3 hover:border-gray-500 transition-colors">Manual & UAT Testing</li>
                </ul>
              </div>
              
              <div className="space-y-4 md:col-span-2">
                <h4 className="text-gray-500 uppercase tracking-wider text-xs font-bold">Languages</h4>
                <ul className="flex gap-4 text-gray-400 font-mono text-sm flex-wrap">
                  <li className="bg-neutral-900 px-3 py-1 rounded border border-gray-800">English</li>
                  <li className="bg-neutral-900 px-3 py-1 rounded border border-gray-800">Cantonese</li>
                  <li className="bg-neutral-900 px-3 py-1 rounded border border-gray-800">Mandarin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

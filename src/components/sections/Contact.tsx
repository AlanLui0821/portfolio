import Shuffle from '../ui/Shuffle';

export default function Contact() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center border-t border-neutral-800 py-20 px-6">
        <div className="text-center max-w-2xl mx-auto">
        <Shuffle
          text="LET'S WORK TOGETHER"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-3xl md:text-5xl font-bold mb-12"
        />
          
          <div className="space-y-6 mb-12">
            <a href="mailto:alanero984@gmail.com" className="block text-xl hover:text-[#B19EEF] transition-colors">
              alanero984@gmail.com
            </a>
            <p className="text-xl text-gray-400">
              (+852) 9874 0698
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
             <a href="https://github.com/AlanLui0821" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm">
                GitHub
             </a>
             <a href="https://www.linkedin.com/in/yiu-lun-lui/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm">
                LinkedIn
             </a>
          </div>

          <a href="mailto:alanero984@gmail.com" className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300 text-lg tracking-widest uppercase">
            Get in touch
          </a>
        </div>
    </section>
  );
}
